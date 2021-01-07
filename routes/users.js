const { asyncHandler: asyn } = require('./__utils');
const express = require('express');
const csrf = require('csurf');

const router = express.Router();

//
// POST: http://localhost:8080/signup
//
router.post(
  '/',
  asyn(async (req, res, next) => {
    res.send('Nothing here yet.');
  })
);

module.exports = router;
