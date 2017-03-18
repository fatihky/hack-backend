const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  key:  String,
  value: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = recordSchema;
