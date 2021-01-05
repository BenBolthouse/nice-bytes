const express = require('express');
const csrf = require('csurf');
const bcrypt = require('bcrypt');
const parser = require('body-parser');
const { validationResult } = require('express-validator');

const { secret } = require('../config');
const { userSignupValidator, userLoginValidator } = require('./__formValidators');
const { asyncHandler: asyn } = require('./__utils');
const { User } = require('../db/models');

const router = express.Router();

// Middleware configuration
const csrfProtection = csrf({ cookie: true });

let errorMessages = {
  firstName: [],
  lastName: [],
  username: [],
  email: [],
  password: [],
  confirmPassword: [],
};

let validationPassing = true;

//
// GET: http://localhost:8080/users/signup
// Send the signup form with csrf protection token
//
router.get('/signup', csrfProtection, (req, res, next) => {
  return res.render('sign-up', { csrfToken: req.csrfToken(), errorMessages });
});

//
// POST: http://localhost:8080/users/signup
// Receive the POST from the sign up form, validate request and create a user
//
router.post(
  '/signup',
  userSignupValidator,
  csrfProtection,
  asyn(async (req, res, next) => {
    // Request URL params
    const { username, email, password } = req.body;

    // Check for validation errors
    const validationErrors = validationResult(req);

    // If express validator found errors
    if (!validationErrors.isEmpty()) {
      validationErrors.errors.forEach(err => {
        errorMessages[err.param].push(err.msg);
      });
      validationPassing = false;
    }

    // If the requested username is in use
    if (!(await userUsernameIsUnique(username))) {
      errorMessages.username.push(`Username "${username}" is in use.`);
      validationPassing = false;
    }

    // If the requested username is in use
    if (!(await userEmailIsUnique(email))) {
      errorMessages.email.push(`Email "${email}" is in use.`);
      validationPassing = false;
    }

    // If validation failed
    if (!validationPassing) {
      // Then send a view with errors and new csrf token...
      return res.render('sign-up', { csrf: req.csrfToken(), errorMessages });
    }

    // Else create the user and redirect to home
    else {
      const passwordHash = await bcrypt.hash(`${password}:${secret}`, 10);
      await User.create({
        username: username,
        email: email,
        passwordHash: passwordHash,
      });
      return res.redirect('/');
    }
  })
);

/**
 * GET: http://localhost:8080/users/login
 */
router.get('/login', csrfProtection, (req, res, next) => {
  return res.render('log-in', { csrfToken: req.csrfToken(), errorMessages });
});

/**
 * POST: http://localhost:8080/users/login
 */
router.post(
  '/login',
  userLoginValidator,
  csrfProtection,
  asyn(async (req, res, next) => {
    const errors = [];

    // If there is anything inside of the errors array then send the errors to
    // the client, else redirect
    if (!errors.length) {
      return res.render('log-in', { csrf: req.csrfToken(), errorMessages });
    } else {
    }
  })
);

/**
 * Checks the `Users` store for a record containing the same username.
 * @param {The `username` string of the new user object} username
 */
const userUsernameIsUnique = async username => {
  try {
    const user = await User.findAll({ where: { username: username } });
  } catch (e) {
    return true;
  }
  return false;
};

/**
 * Checks the `Users` store for a record containing the same email address.
 * @param {The `email` string of the new user object} email
 */
const userEmailIsUnique = async email => {
  try {
    const user = await User.findAll({ where: { email: email } });
  } catch (e) {
    return true;
  }
  return false;
};

module.exports = router;
