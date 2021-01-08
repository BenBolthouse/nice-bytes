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

     // this query for rendering the spot page with associated reviews
    const spot = await Spot.findOne({ where: { id }, include: { model: Review, include: User } });

    // this query to retrieve all collections and included spots for the current user
    const user = await User.findOne({ where: { id: userId }, include: { model: Collection, as: 'collections', include: { model: Spot, where: { id } } } });

    if (user.collections.length === 0) res.render('spot', { title: `${spot.name}`, spot, user });
    else res.json(user);

})


  const spot = await Spot.findByPk(id);
  // const reviews = await Review.findAll({ where: { spotId: id } });

  // Optimize the above query to do eager load of Review


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

  // 1. Query the database to get collections WHERE userId = req.session.user.id
      // Save to array customCollections
  // 2. In resulting array, find collections with name "Have Visited" and "Want To Visit"
  // 3. Splice() the two collections above to a new array defaultCollections
  // 4. End result is customCollections does not have elements from defaultCollections

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
