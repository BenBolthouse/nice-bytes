const express = require('express');
const { Spot, Review } = require('../db/models');
const router = express.Router();

//query the DB to find Spots

/**
 * GET http://localhost:8080/
 */
router.get('/', async function (req, res, next) {
  const spots = await Spot.findAll({
    include: { model: Review },
    order: ['name'],
  });
  res.render('index', { user: req.session.user, spots });
});

module.exports = router;
