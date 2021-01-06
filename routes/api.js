const express = require('express');
const { asyncHandler } = require('./__utils');
const { authorize } = require('../auth');
const { User, Collection, SpotCollection } = require('../db/models');

const router = express.Router();

/**
 * POST /collections
 */
router.post(
  '/collections',
  authorize,
  asyncHandler(async (req, res, next) => {
    const { name } = req.body;
    const userId = req.session.auth.userId;

    const insertCollection = await Collection.create({
      userId: userId,
      name: name,
    });

    res.json({
      "id": insertCollection.id,
    });
  })
);

/**
 * DELETE /collection/:id
 */
router.delete(
  '/collection/:id',
  authorize,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
  })
);

/**
 * POST /collections/spot
 */
router.post(
  '/collections/spot',
  authorize,
  asyncHandler(async (req, res, next) => {
    const { spotId, collectionId } = req.body;

    const insertCollectionSpot = await SpotCollection.create({
      spotId: spotId,
      collectionId: collectionId,
    });
    
    res.json({
      "id": insertCollectionSpot.id,
    });
  })
);

/**
 * DELETE /collections/spot/:id
 */
router.delete(
  '/collections/spot/:id',
  authorize,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
  })
);

/**
 * POST /spots/reviews
 */
router.post(
  '/spots/reviews',
  authorize,
  asyncHandler(async (req, res, next) => {
    const { name } = req.body;
  })
);

/**
 * DELETE /spots/review/:id
 */
router.delete(
  '/spots/review/:id',
  authorize,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
  })
);

module.exports = router;
