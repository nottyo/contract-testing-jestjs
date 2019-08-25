var express = require('express');
var router = express.Router();
var flights_data = require('../bkk-icn.json')

/* GET users listing. */
router.get('/routes/:from/:to', function(req, res, next) {
  if (req.params.from.toUpperCase() === 'BKK' && req.params.to.toUpperCase() === 'ICN') {
    res.json({
      status: 'success',
      data: flights_data
    })
  } else {
    res.send({
      status: 'failed',
      message: `Can't find flight data for route: ${req.params.from}-${req.params.to}`
    });
  }
});

module.exports = router;
