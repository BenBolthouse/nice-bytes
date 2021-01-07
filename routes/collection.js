const express = require("express");
const { Collection } = require("../db/models");

const router = express.Router();

router.get("/wantToVisit", async (req, res) => {
  if (req.session.auth) {
    const userId = req.session.auth.userId;
    const collections = await Collection.findAll({
      where: { userId: userId, name: "Want to Visit" },
    });

    // const spots= await SpotCollection.;
    res.render("collection", {
      title: "Places you want to visit",
      collections,
    });
  } else {
    res.redirect("/");
  }
});

router.get("/haveVisited", async (req, res) => {
  if (req.session.auth) {
    const userId = req.session.auth.userId;
    const collections = await Collection.findAll({
      where: { userId: userId, name: "Have Visited" },
    });
    res.render("collection", {
      title: "Places you have visited",
      collections,
    });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
