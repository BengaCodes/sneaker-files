const mongoose = require('mongoose')



const commentSchema = new mongoose.Schema({
  text: { type: String, required: true }
}, {
  timestamps: true
})

// Model of trainer document
const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: Number, required: true, min: 1, max: 12 },
  image: { type: String, required: true },
  description: { type: String, required: true, maxlength: 300 },
  comments: [commentSchema] // * Array of comments on trainer
}, {
  timestamps: true
})


trainerSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Trainer', trainerSchema)













// * Remember to export it at the end for use in your controllers

// * head over to "controller.js" next