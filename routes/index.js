var express = require('express');
const { Spot, Reviews } = require('../db/models')
var router = express.Router();

//query the DB to find Spots



/* GET home page. */
router.get('/', async function(req, res, next) {
  const spots = await Spot.findAll({limit: 10, order: [ "name" ]});
  console.log(spots);
  res.render('index', { title: 'NiceBytes', spots});
});

module.exports = router;
