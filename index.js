const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./lib/mongoose')
const app = express()
const logger = require('./lib/logger')
const port = process.env.PORT || 8000
const router = require('./config/routes')
const path = require('path')


// * Connect the database
connectDB()


app.use(bodyParser.json())

app.use(logger) // * <-- Logging middleware not found in "lib/logger.js"

// * Place and additional middlewares below here
app.use('/api', router)
// * Start at model.js

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('frontend/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}


app.listen(port, () => console.log(`Express is listening on port ${port}`))