const _ = require('lodash');
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

recordSchema.methods.toJSON = function() {
  var obj = this.toObject();
  return _.pick(obj, ['key', 'value', 'date']);
};

module.exports = recordSchema;
