const express = require('express');
const { Spot, Review } = require('../db/models');

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/');
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const spot = await Spot.findByPk(id);
    const reviews = await Review.findAll({ where: { spotId: id}});
    // const spot = await json.json();
    console.log(spot.name)
    console.log(reviews)
    res.render('spot', { title: `${spot.name}`, spot, reviews });
})

module.exports = router;
