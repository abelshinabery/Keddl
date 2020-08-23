const mongoose = require('mongoose')

const teaSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  pic: {
    type: String,
  },
  caffeine: {
  	type: String
  },
  blurb: {
  	type: String
  }
})

module.exports = teaSchema;