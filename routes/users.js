const express = require('express');
const csrf = require('csurf');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const { secret } = require('../config');
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
    // Body props
    const { username, email, password } = req.body;

    // Array of validation errors
    const errors = [];

    // Check for validation errors
    const validationErrors = validationResult(req);

    // Push validation errors to errors array and send view
    if (!validationErrors.isEmpty()) {
      errors.push(validationErrors.array().map(error => error.msg));
      return res.render('log-in', { csrf: req.csrfToken(), validationErrors: errors });
    }

    const usernameIsUnique = await getUsernameIsUnique(username);
    const emailIsUnique = await getEmailIsUnique(email);

    // Check to see if the username and email taken, handle gracefully
    if (usernameIsUnique) {
      errors.push('message');
    }
    if (emailIsUnique) {
      errors.push('message');
    }

    // If there is anything inside of the errors array then send the errors to
    // the client, else redirect
    if (errors.length) {
      return res.render('log-in', { csrf: req.csrfToken(), validationErrors: errors });
    } else {
      // If we get this far then we're good to create the user

      // Hash the password
      const passwordHash = await bcrypt.hash(`${password}:${secret}`, 10);

      await User.create({
        username: username,
        email: email,
        passwordHash: passwordHash,
      });
      res.redirect('/');
    }
  })
);

//
// GET: http://localhost:8080/users/login
//
router.get('/login', csrfProtection, (req, res, next) => {
  //
  return res.render('log-in', { csrfToken: req.csrfToken() });
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
      return res.render('log-in', { csrf: req.csrfToken(), errors });
    } else {
    }
  })
);

const getUsernameIsUnique = async username => {
  try {
    const user = await User.findAll({ where: { username: username } });
  } catch {
    return true;
  }
  return false;
};

const getEmailIsUnique = async email => {
  try {
    const user = await User.findAll({ where: { email: email } });
  } catch {
    return true;
  }
  return false;
};

module.exports = router;
