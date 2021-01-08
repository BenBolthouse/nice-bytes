const express = require("express");
const { Spot, Review, Collection } = require("../db/models");
const { Op } = require("sequelize");
const { authorize } = require("../auth");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/");
});

router.get("/:id", authorize, async (req, res, next) => {
  const id = req.params.id;
  const userId = req.session.auth.userId;

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
