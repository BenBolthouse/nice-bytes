const express = require('express');
const csrf = require('csurf');

const { User } = require('../db/models');

const router = express.Router();

const csrfProtection = csrf({ cookie: true });

// GET: http://localhost:8080/users/signup
// https://github.com/BenBolthouse/nice-bytes/wiki/Frontend-Routes#get-httpnicebytescomsignup
//
router.get('/signup', csrfProtection, (req, res, next) => {
  
  const { username, emailAddress, password, confirmPassword } = req.params;

  // 1. Check to see if the user already exists in the user store
  
  // res.send('respond with a resource');
});

module.exports = router;
