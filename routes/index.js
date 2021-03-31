const express = require("express");
const asyncHandler = require("express-async-handler");
const { Spot, Review } = require("../db/models");
const router = express.Router();

//query the DB to find Spots

/**
 * GET http://localhost:8080/
 */
router.get("/", asyncHandler(async (req, res, next) => {
    const spots = await Spot.findAll({
      include: { model: Review },
      order: ["name"],
    });
    req.session.reload(() => {
      res.render("index", { user: req.session.user, spots });
    });
  })
);

module.exports = router;
