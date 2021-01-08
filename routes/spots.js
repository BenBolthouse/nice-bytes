const express = require('express');
const { Spot, Review, User } = require('../db/models');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/');
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;

  const spot = await Spot.findByPk(id, {
    include: {
      model: Review,
      include: User,
    },
  });

  res.render('spot', { spot });
});

module.exports = router;
