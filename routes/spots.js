const express = require('express');
const { Spot, Review } = require('../db/models');

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/');
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    const spot = await Spot.findByPk(id);
    const reviews = await Review.findAll({where: { spotId: id}});

    res.render('spot', { title: `${spot.name}`, spot, reviews, user: req.session.user });
})

module.exports = router;
