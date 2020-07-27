const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const logger = require('./lib/logger')
const port = process.env.PORT || 8000
const router = require('./config/routes')
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/trainers'

mongoose.connect(dbURI, // * If connection to mongo works, we should see "Mongo is connected log in terminal"
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)
    console.log('Mongo is Connected!')
  })

app.use(bodyParser.json())

app.use(logger) // * <-- Logging middleware not found in "lib/logger.js"

// * Place and additional middlewares below here
app.use('/api', router)
// * Start at model.js


// if (process.env.NODE_ENV === 'production') {

// }


app.listen(port, () => console.log(`Express is listening on port ${port}`))