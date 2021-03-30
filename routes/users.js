const asyncHandler = require("express-async-handler");
const express = require('express');
const csrf = require('csurf');

const router = express.Router();

//
// POST: http://localhost:8080/signup
//
router.post(
  '/',
  asyncHandler(async (req, res, next) => {
    res.send('Nothing here yet.');
  })
);

module.exports = router;
