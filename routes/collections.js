const express = require("express");
const { Collection } = require("../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  if (req.session.auth) {
    // get custom and default collections
    const collections = req.session.user.collections;

    // const spots= await SpotCollection.;
    res.render("collections", { collections });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
