const express = require("express");
const { Spot, Review, Collection } = require("../db/models"); // Changed
const { Op } = require("sequelize"); //Changed

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/");
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  const userId = req.session.auth.userId;

  const spot = await Spot.findByPk(id);
  const reviews = await Review.findAll({ where: { spotId: id } });
  const customCollections = await Collection.findAll({
    where: { userId: userId },
    attributes: { exclude: ["Want To Visit", "Have Visited"] },
  });
  const defaultCollections = await Collection.findAll({
    where: {
      userId: userId,
      name: { [Op.or]: ["Want To Visit", "Have Visited"] },
    },
  });
  const { firstName, lastName, username, email } = req.session.user;

  res.render("spot", {
    title: `${spot.name}`,
    spot,
    reviews,
    user: {
      firstName,
      lastName,
      username,
      email,
      customCollections: [customCollections],
      defaultCollections: [defaultCollections],
    },
  });
});

module.exports = router;
  