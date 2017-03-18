const express = require('express');
const bodyParser = require('body-parser');
const getRecordCtrl = require('./controllers/get-record');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/getRecord', getRecordCtrl);

app.listen(8383);
