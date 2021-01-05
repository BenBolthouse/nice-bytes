const express = require('express');
const { Spot, Review } = require('../db/models');

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/');
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const spot = await Spot.findByPk(id);
    // const spot = await json.json();
    console.log(spot.name)
    res.render('spot', { title: `${spot.name}`, spot });
})

module.exports = router;
