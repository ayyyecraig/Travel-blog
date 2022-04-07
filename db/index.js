const mongoose = require('mongoose')

let dbUrl = process.NODE_ENV === 'production' ? process.MONGODB_URI : 'mongodb://127.0.0.1:27017/travelDatabase'

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db