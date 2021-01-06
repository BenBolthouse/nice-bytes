var express = require('express');
const { Spot, Review } = require('../db/models')
var router = express.Router();

//query the DB to find Spots



/* GET home page. */
router.get('/', async function(req, res, next) {
  // Code below to implement when we have reviews seeded
  //const spots = await Spot.findAll({include: Review, limit: 10, order: [ "Review.stars", 'DESC' ]});
  const spots = await Spot.findAll({ limit: 10, order: [ 'name' ]});
<<<<<<< HEAD
  res.render('index', { title: 'NiceBytes', spots, user: req.session.user, });
=======
  res.render('index', { title: 'NiceBytes', spots, user: req.session.user });
>>>>>>> 9b69c9bd15ec46407280aadac21e4b08c467fab0
});

module.exports = router;
