const express = require("express");
const { asyncHandler } = require("./__utils");
const { authorize } = require("../auth");
const { User, Collection, SpotCollection, Review } = require("../db/models");
const { get } = require(".");

const router = express.Router();

/**
 * POST /collections
 */
router.post(
  "/collections",
  authorize,
  asyncHandler(async (req, res, next) => {
    const { name } = req.body;
    const userId = req.session.auth.userId;

    const insertCollection = await Collection.create({
      userId: userId,
      name: name,
    });

    res.json({
      id: insertCollection.id,
    });
  })
);

/**
 * DELETE /collection/:id
 */
router.delete(
  "/collection/:id",
  authorize,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    await Collection.destroy({ where: { id: id } });
  })
);

/**
 * POST /collections/spot
 */
router.post(
  "/collections/spot",
  authorize,
  asyncHandler(async (req, res, next) => {
    const { spotId, collectionId } = req.body;
    const insertCollectionSpot = await SpotCollection.create({
      spotId: spotId,
      collectionId: collectionId,
    });

    res.json({
      id: insertCollectionSpot.id,
    });
  })
);

/**
 * DELETE /collections/spot/:id
 */
router.delete(
  "/collections/spot/:id",
  authorize,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    await SpotCollection.destroy({ where: { id: id } });
  })
);

/**
 * POST /spots/reviews
 */
router.post(
  "/spots/reviews",
  authorize,
  asyncHandler(async (req, res, next) => {
    const { spotId, stars, title, body } = req.body;
    const userId = req.session.auth.userId;

    const insertReview = await Review.create({
      userId: userId,
      spotId: spotId,
      stars: stars,
      title: title,
      body: body,
    });
    res.redirect(`/spots/${spotId}`);
  })
);

/**
 * PUT /spots/reviews
 */
router.put(
  "/spots/reviews/:id",
  authorize,
  asyncHandler(async (req, res, next) => {
    const { stars, title, body } = req.body;
    const { id } = req.params;

    const getReview = await Review.findByPk(id);
    if (getReview) {
      getReview.body = body;
      getReview.title = title;
      getReview.stars = stars;
      await getReview.save();
    }
    res.json({
      id: getReview.id,
    });
  })
);

/**
 * DELETE /spots/review/:id
 */
router.delete(
  "/spots/review/:id",
  authorize,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { spotId } = req.body;
    console.log("from the route", spotId);

    await Review.destroy({ where: { id: id } });

    res.json({ id: spotId });
  })
);

module.exports = router;
