const getRecordCtrl = require('./controllers/get-record');

module.exports = function route(app) {
  app.post('/getRecord', getRecordCtrl);
};
