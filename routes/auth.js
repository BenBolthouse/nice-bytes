const { userSignupValidator, userLoginValidator } = require('./__validators');
const { validationResult } = require('express-validator');
const { asyncHandler: asyn } = require('./__utils');
const { secret } = require('../config');
const { User, Collection } = require('../db/models');
const bcrypt = require('bcrypt');
const express = require('express');
const csrf = require('csurf');
const { logUserIn, logUserOut, authorize } = require('../auth');

const router = express.Router();

// form request forgery protection
const csrfProtection = csrf({ cookie: true });

class ValidationViewModel {
  username = [];
  firstName = [];
  lastName = [];
  email = [];
  password = [];
  confirmPassword = [];
}
class FormPrefillViewModel {
  username = '';
  firstName = '';
  lastName = '';
  email = '';
}

//
// GET: http://localhost:8080/signup
//
router.get('/signup', csrfProtection, (req, res, next) => {
  return res.render('sign-up', {
    csrfToken: req.csrfToken(),
    errorMessages: new ValidationViewModel(),
    prefill: new FormPrefillViewModel(),
  });
});

//
// POST: http://localhost:8080/signup
//
router.post(
  '/signup',
  userSignupValidator,
  csrfProtection,
  asyn(async (req, res, next) => {
    // body params
    const { firstName, lastName, username, email, password, _csrf } = req.body;

    // validation view model
    let validationViewModel = new ValidationViewModel();
    let validationPassing = true;

    // form prefill persists form state across requests
    let prefill = new FormPrefillViewModel();
    prefill.firstName = firstName;
    prefill.lastName = lastName;
    prefill.username = username;
    prefill.email = email;

    // check for form validation errors
    const validationErrors = validationResult(req);

    // if form validation failed push errors into validation view model
    if (!validationErrors.isEmpty()) {
      validationErrors.errors.forEach(err => {
        validationViewModel[err.param].push(err.msg);
      });
      validationPassing = false;
    }

    // if the requested username is in use notify client
    if (!(await userUsernameIsUnique(username))) {
      validationViewModel.username.push(`Username "${username}" is in use.`);
      validationPassing = false;
    }

    // if the requested username is in use notify client
    if (!(await userEmailIsUnique(email))) {
      validationViewModel.email.push(`Email "${email}" is in use.`);
      validationPassing = false;
    }

    // if any notify client
    if (!validationPassing) {
      return res.render('sign-up', {
        csrfToken: req.csrfToken(),
        errorMessages: validationViewModel,
        prefill
      });
    }

    // else create the user and redirect to home
    else {
      const passwordHash = await bcrypt.hash(`${password}:${secret}`, 10);
      await User.create({
        firstName: firstName || null,
        lastName: lastName || null,
        username: username,
        email: email,
        passwordHash: passwordHash,
      });

      const user = await User.findOne( { where: { username: username } });
      await Collection.create({
        userId: user.id,
        name: 'Want to Visit'
      })
      await Collection.create({
        userId: user.id,
        name: 'Have Visited'
      })

      return res.redirect('/');
    }
  })
);

/**
 * GET: http://localhost:8080/login
 */
router.get('/login', csrfProtection, (req, res, next) => {
  return res.render('log-in', {
    csrfToken: req.csrfToken(),
    errorMessages: new ValidationViewModel(),
    prefill: new FormPrefillViewModel(),
  });
});

/**
 * POST: http://localhost:8080/login
 */
router.post(
  '/login',
  csrfProtection,
  userLoginValidator,
  asyn(async (req, res, next) => {
    // from sign-in form
    const { email, password } = req.body;

    // scoped user
    let user;

    // validation view model
    let validationViewModel = new ValidationViewModel();
    let validationPassing = true;

    // form prefill persists form state across requests
    let prefill = new FormPrefillViewModel();
    prefill.email = email;

    // check for form validation errors
    const validationErrors = validationResult(req);

    // if form validation failed push errors into validation view model
    if (!validationErrors.isEmpty()) {
      validationErrors.errors.forEach(err => {
        validationViewModel[err.param].push(err.msg);
      });
      validationPassing = false;
    }

    try {
      // try to find the user by email
      user = await User.findOne({ where: { email: email } });
    } catch (e) {
      // if user cannot be found then notify client
      errorMessages.email.push(`User was not found with email address ${email}.`);
      return res.render('log-in', {
        csrfToken: req.csrfToken(),
        errorMessages: validationViewModel,
        prefill
      });
    }

    // compare request password with user password
    const saltyPassword = `${password}:${secret}`;
    const passwordIsValid = await bcrypt.compare(saltyPassword, user.passwordHash.toString());

    // if password is invalid notify client
    if (!passwordIsValid) {
      validationViewModel.password.push('Password is invalid.');
      return res.render('log-in', {
        csrfToken: req.csrfToken(),
        errorMessages: validationViewModel,
        prefill
      });
    }

    // if any notify client
    if (!validationPassing) {
      return res.render('log-in', {
        csrfToken: req.csrfToken(),
        errorMessages: validationViewModel,
        prefill
      });
    }

    // else log the user in
    else {
      // session sign in
      logUserIn(req, user);

      // redirect to page
      return res.redirect('/');
    }
  })
);

/**
 * GET: http://localhost:8080/logout
 */
router.get('/logout', authorize, (req, res, next) => {
  logUserOut(req);
  res.redirect('/login');
});

/**
 * Checks the `Users` store for a record containing the same username.
 * @param {The `username` string of the new user object} username
 */
const userUsernameIsUnique = async username => {
  const result = await User.findOne({ where: { username: username } });
  if (result) return false;
  return true;
};

/**
 * Checks the `Users` store for a record containing the same email address.
 * @param {The `email` string of the new user object} email
 */
const userEmailIsUnique = async email => {
  const result = await User.findOne({ where: { email: email } });
  if (result) return false;
  return true;
};

module.exports = router;
