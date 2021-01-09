const express = require('express');
const { Spot, Review, Collection, User } = require('../db/models');
const router = express.Router();

// redirects to home if the client navigates to http://localhost:8080/spots/
router.get('/', (req, res) => {
  res.redirect('/');
});

/**
 * GET http://localhost:8080/spots/:id
 */
router.get('/:id', async (req, res, next) => {
  let user = null;
  let userId = null;
  const id = req.params.id;

  // this query for rendering the spot page with associated reviews
  const spot = await Spot.findOne({
    where: { id },
    include: { model: Review, include: User },
  });

  if (!req.session.auth) {
    return res.render('spot', { spot, user });
  }

  userId = req.session.auth.userId;

  const customCollections = await Collection.findAll({
    where: { userId: userId },
  });

  const defaultCollections = {
    haveVisitedId: null,
    wantToVisitId: null,
  };

  for (let i = 0; i < customCollections.length; i++) {
    if (customCollections[i].name === 'Want To Visit') {
      defaultCollections.wantToVisitId = customCollections.splice(i, 1)[0].id;
      i--;
      continue;
    }
    if (customCollections[i].name === 'Have Visited') {
      defaultCollections.haveVisitedId = customCollections.splice(i, 1)[0].id;
      i--;
      continue;
    }
  }

  user = req.session.user;
  user.customCollections = customCollections;
  user.defaultCollections = defaultCollections;

  res.render('spot', {
    spot,
    user,
  });
});

module.exports = router;
