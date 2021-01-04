const express = require('express');
const csrf = require('csurf');
const { validationResult } = require('express-validator');
const { userSignupValidator, userLoginValidator } = require('./__formValidators');
const { User } = require('../db/models');

const router = express.Router();

const csrfProtection = csrf({ cookie: true });

//
// GET: http://localhost:8080/users/signup
//
router.get('/signup', userSignupValidator, csrfProtection, (req, res, next) => {
  const { username, emailAddress, password, confirmPassword } = req.params;

  // 1. Check to see if the user already exists in the user store
  // const existingUser = User.findAll({where: {emailAddress: emailAddress}}) !== null;

  res.render('sign-up', { csrf: req.csrfToken() });
});

//
// GET: http://localhost:8080/users/login
//
router.get('/login', userLoginValidator, csrfProtection, (req, res, next) => {
  //
  res.render('log-in', { csrf: req.csrfToken() });
});

module.exports = router;
