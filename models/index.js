const mongoose = require('mongoose');
const recordSchema = require('./record');

// plug node's promise api to mongoose
mongoose.Promise = Promise;

mongoose.connect('mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon');

exports.Record = mongoose.model('Record', recordSchema);
