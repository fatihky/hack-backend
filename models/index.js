const mongoose = require('mongoose');
const recordSchema = require('./record');

mongoose.connect('mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon');

exports.Record = mongoose.model('Record', recordSchema);
