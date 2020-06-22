const mongoose = require('mongoose')
const User = require('../models/user')
const Trainer = require('../models/trainer')
const dbURI = 'mongodb://localhost/trainers'
const trainersData = require('./data/trainers')


mongoose.connect(dbURI, // * If connection to mongo works, we should see "Mongo is connected log in terminal"
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  async (err, db) => {
    if (err) return console.log(err)
    try {
      await db.dropDatabase()
      const user = await User.create({
        username: 'benga',
        email: 'benga@mail',
        password: 'pass',
        passwordConfirmation: 'pass'
      }) 
      console.log(`User ${user.username} created 🙎🏾‍♂️`)
      const trainers = await Trainer.create(trainersData)
      console.log(`${'👟' .repeat(trainers.length)} trainers created`)
    } catch (err){
      console.log(err)
    }
    await mongoose.connection.close()
    console.log('Peace out homie')
  })