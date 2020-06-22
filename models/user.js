const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')


// * User model
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})


userSchema.virtual('createdTrainers', {
  ref: 'Trainer',
  localField: '_id', 
  foreignField: 'user'
})

userSchema
  .set('toJSON', {
    virtuals: true,
    transform(doc, json) {
      delete json.password
      return json
    }
  })

// * password comparison of user password entered at login with the bcrpyt password on file. 
userSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

// * Create a virtual passwordConfirmation submodel
userSchema
  .virtual('passwordConfirmation')
  .set(function(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })

// * Validate the password, check if it has been updated, does passwordConfirmation match the password?
userSchema
  .pre('validate', function(next){
    if (this.isModified('password') && this._passwordConfirmation !== this.password){
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

// * If the above is true, save the password using bcrypt.
userSchema
  .pre('save', function(next){
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

userSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('User', userSchema)