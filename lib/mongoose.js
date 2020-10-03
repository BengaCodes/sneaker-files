const mongoose = require('mongoose')
const db = 'mongodb+srv://bengaboy:Gbenga90@old-sneeka-file.npnsn.mongodb.net/Old-sneeka-file?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true
    })
    console.log('Mongo is connected...!')
  } catch (err) {
    console.log(err.message)

    // Exit the process with failure
    process.exit(1)
  }
}

module.exports = connectDB