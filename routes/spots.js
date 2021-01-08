const express = require("express");
const { Spot, Review, Collection } = require("../db/models");
const { Op } = require("sequelize");
const { authorize } = require("../auth");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/");
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  const userId = req.session.auth.userId;

     // this query for rendering the spot page with associated reviews
    const spot = await Spot.findOne({ where: { id }, include: { model: Review, include: User } });

    // this query to retrieve all collections and included spots for the current user
    const user = await User.findOne({ where: { id: userId }, include: { model: Collection, as: 'collections', include: { model: Spot, where: { id } } } });

    if (user.collections.length === 0) res.render('spot', { title: `${spot.name}`, spot, user });
    else res.json(user);

})


  const spot = await Spot.findByPk(id);

  const [customCollections] = await Collection.findAll({
    where: { userId },
  });

  //Removing default collections from the custom collections array so that
  //we have 1 findAll query instead of 2
  const defaultCollections = [];
  const defaultCollectionsFilter = async (collectionsArray) => {
    for (let i = 0; i < collectionsArray.length; i++) {
      if (
        collectionsArray[i].name === "Have Visited" ||
        collectionsArray[i].name === "Want To Visit"
      ) {
        let removed = collectionsArray.splice(i, 1);
        defaultCollections.push(removed);
      }
    }
  };

  defaultCollectionsFilter();

  const { firstName, lastName, username, email } = req.session.user;

  res.render("spot", {
    spot,
    reviews,
    user: {
      firstName,
      lastName,
      username,
      email,
      customCollections,
      defaultCollections,
    },
  });
});

module.exports = router;
