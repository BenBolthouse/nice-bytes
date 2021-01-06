var express = require('express');
const { Spot, Review } = require('../db/models');
var router = express.Router();

//query the DB to find Spots

/**
 * GET http://localhost:8080/
 */
router.get('/', async function (req, res, next) {
  const spots = await Spot.findAll({ include: { model: Review }, limit: 10, order: ['name'] });
  res.render('index', { title: 'NiceBytes', user: req.session.user, spots });
});

module.exports = router;
