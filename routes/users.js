const express = require('express');
const csrf = require('csurf');
const { validationResult } = require('express-validator');

const { userSignupValidator, userLoginValidator } = require('./__formValidators');
const { asyncHandler } = require('./__utils');
const { User } = require('../db/models');

const router = express.Router();

const csrfProtection = csrf({ cookie: true });

//
// GET: http://localhost:8080/users/signup
//
router.get('/signup', csrfProtection, (req, res, next) => {
  res.render('sign-up', { csrfToken: req.csrfToken() });
});

//
// POST: http://localhost:8080/users/signup
//
router.post(
  '/signup',
  userSignupValidator,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    // const { username, emailAddress, password, confirmPassword } = req.body;
    const errors = [];

    // Check to see if the username and email taken, handle gracefully
    if (await !usernameIsUnique()) {
      errors.push('message');
    }
    if (await !emailIsUnique()) {
      errors.push('message');
    }

    // If there is anything inside of the errors array then send the errors to
    // the client, else redirect
    if (!errors.length) {
      res.render('log-in', { csrf: req.csrfToken(), errors });
    } else {
    }
  })
);

//
// GET: http://localhost:8080/users/login
//
router.get('/login', csrfProtection, (req, res, next) => {
  //
  res.render('log-in', { csrfToken: req.csrfToken() });
});

//
// POST: http://localhost:8080/users/login
//
router.post(
  '/login',
  userLoginValidator,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const errors = [];

    // If there is anything inside of the errors array then send the errors to
    // the client, else redirect
    if (!errors.length) {
      res.render('log-in', { csrf: req.csrfToken(), errors });
    } else {
    }
  })
);

const usernameIsUnique = async username => {
  try{
    await User.findAll({where: { username: username }})
  } catch {
    return true
  }
  return false
};

const emailIsUnique = async email => {
  try{
    await User.findAll({where: { email: email }})
    } catch {
    return true
  }
  return false
};

module.exports = router;
