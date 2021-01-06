var express = require('express');
const { Spot, Review } = require('../db/models');
var router = express.Router();

//query the DB to find Spots

/**
 * GET http://localhost:8080/
 */
router.get('/', async function (req, res, next) {
  // Code below to implement when we have reviews seeded
  // Will not work:
  // const spots = await Spot.findAll({include: Review, limit: 10, order: [ "Review.stars", 'DESC' ]});
  // Will work:
  const spots = await Spot.findAll({ limit: 10, order: ['name'] });
  console.log(spots);
  res.render('index', { title: 'NiceBytes', user: req.session.user, spots });
});

module.exports = router;
