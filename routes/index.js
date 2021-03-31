const express = require("express");
const asyncHandler = require("express-async-handler");

const { Spot, Review } = require("../db/models");

const router = express.Router();

/**********************************************************
 * Returns a Pug view with spots data; the home page of the app.
 */
// prettier-ignore
router.get("/", asyncHandler(async (req, res, _next) => {
    // get spots and reviews
    const spots = await Spot.findAll({
      include: { model: Review },
      order: ["name"],
    });
    // get average star rating per spot
    spots.forEach((spot) => {
      spot.rating = 0;
      spot.Reviews.forEach((review) => {
        spot.rating += review.stars;
      });
      if (spot.rating) {
        const avg = spot.rating / spot.Reviews.length;
        spot.stars = Math.ceil(avg);
      }
    });
    // send pug view with spots data
    req.session.reload(() => {
      res.render("index", { user: req.session.user, spots });
    });
  })
);

module.exports = router;
