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

//
// GET: http://localhost:8080/users/signup
// Send the signup form with csrf protection token
//
router.get('/signup', csrfProtection, (req, res, next) => {
  return res.render('sign-up', { csrfToken: req.csrfToken() });
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
    const { username, email, password } = req.params;

    // Array of validation errors
    const errors = [];

    // Check for validation errors
    const validationErrors = validationResult(req);

    // If express validator found errors...
    if (!validationErrors.isEmpty()) {
      // Push errors to the errors array...
      errors.push(validationErrors.array().map(error => error.msg));

      // Then send a view with errors and new csrf token
      return res.render('log-in', { csrf: req.csrfToken(), validationErrors: errors });
    }

    // Check if the requested username is in use
    if (await userUsernameIsUnique(username)) {
      // Push error to array if not unique
      errors.push(`Username "${username}" is in use. Please pick another username.`);
    }
    // Check if the requested username is in use
    if (await userEmailIsUnique(email)) {
      // Push error to array if not unique
      errors.push(`Email "${email}" is in use. Please use another email.`);
    }

    // If there is anything inside of the errors array...
    if (errors.length) {
      // Then send a view with errors and new csrf token...
      return res.render('log-in', { csrf: req.csrfToken(), validationErrors: errors });
    }
    // Else create the user and redirect to home
    else {
      // Hash the password
      const passwordHash = await bcrypt.hash(`${password}:${secret}`, 10);

      // Create the user
      await User.create({
        username: username,
        email: email,
        passwordHash: passwordHash,
      });

      // Redirect to home
      return res.redirect('/');
    }
  })
);

/**
 * GET: http://localhost:8080/users/login
 */
router.get('/login', csrfProtection, (req, res, next) => {
  return res.render('log-in', { csrfToken: req.csrfToken() });
});

/**
 * POST: http://localhost:8080/users/login
 */
router.post('/login',
  userLoginValidator,
  csrfProtection,
  asyn(async (req, res, next) => {
    const errors = [];

    // If there is anything inside of the errors array then send the errors to
    // the client, else redirect
    if (!errors.length) {
      return res.render('log-in', { csrf: req.csrfToken(), errors });
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
  } catch {
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
  } catch {
    return true;
  }
  return false;
};

module.exports = router;
