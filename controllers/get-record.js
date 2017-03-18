const joi = require('joi');
const Record = require('../models').Record;

const schema = joi.object().keys({
  key: joi.string().required()
});

function controller(req, res) {
  const {error} = joi.validate(req.body, schema);

  if (error) {
    return res.status(400).json({
      stat: 'fail',
      error: {
        message: error.message
      }
    });
  }

  Record.find({key: req.body.key}).exec(function (err, results) {
    if (err) {
      console.error('kayit aranirken hata olustu.', err);
      return res.status(500).json({
        stat: 'fail',
        error: {
          message: 'internal server error occured, please try again later'
        }
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        stat: 'fail',
        error: {
          message: 'no records found for this key'
        }
      });
    }

    res.json(results[0]);
  });
}

module.exports = controller;
