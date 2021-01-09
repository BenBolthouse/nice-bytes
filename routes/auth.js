const { validateSignUp, validateLogin } = require('./__validators');
const { User, Collection } = require('../db/models');
const { validationResult } = require('express-validator');
const { secret } = require('../config');
const { logUserIn, logUserOut, authorize } = require('../auth');
const { asyncHandler } = require('./__utils');
const express = require('express');
const csrf = require('csurf');
const bcrypt = require('bcrypt');

const router = express.Router();

// form request forgery protection
const csrfProtection = csrf({ cookie: true });

router.use((req, res, next) => {
  const { firstName, lastName, username, email } = req.body;
  res.locals.messages = {
    firstName: [],
    lastName: [],
    username: [],
    email: [],
    password: [],
    confirmPassword: [],
  };
  res.locals.prefill = {
    firstName: firstName || '',
    lastName: lastName || '',
    username: username || '',
    email: email || '',
  };
  next();
});

//
// GET: http://localhost:8080/signup
//
router.get('/signup', csrfProtection, (req, res, next) => {
  return res.render('partials/sign-up', {
    csrf: req.csrfToken(),
    user: req.session.user,
    messages: res.locals.messages,
    prefill: res.locals.prefill,
  });
});

//
// POST: http://localhost:8080/signup
//
router.post(
  '/signup',
  validateSignUp,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    // scoped uer variable
    let user;

    // indicates that express validation is passing
    let passing = true;

    // check for form validation errors
    const validationErrors = validationResult(req);

    // if form validation failed push errors into validation view model
    if (!validationErrors.isEmpty()) {
      validationErrors.errors.forEach(err => {
        res.locals.messages[err.param].push(err.msg);
      });
      passing = false;
    }

    // data from form submission
    const { _csrf, firstName, lastName, username, email, password } = req.body;

    // if the requested username is in use notify client
    if (!(await userUsernameIsUnique(username))) {
      res.locals.messages.username.push(
        `Username "${username}" is taken, please choose another username.`
      );
      passing = false;
    }

    // if the requested email is in use notify client
    if (!(await userEmailIsUnique(email))) {
      res.locals.messages.email.push(
        `Email "${email}" is already registered to an account.`
      );
      passing = false;
    }

    // if any other validation is not passing notify the client
    if (!passing)
      return res.render('partials/sign-up', {
        csrf: req.csrfToken(),
        user: req.session.user,
        messages: res.locals.messages,
        prefill: res.locals.prefill,
      });

    user = User.build();

    // else create the user and redirect to home
    const hash = await bcrypt.hash(`${password}:${secret}`, 10);
    user = await User.create(
      {
        firstName: firstName || null,
        lastName: lastName || null,
        username: username,
        email: email,
        passwordHash: hash,
        collections: [{ name: 'Have Visited' }, { name: 'Want To Visit' }],
      },
      {
        include: {
          model: Collection,
          as: 'collections',
        },
      }
    );

    // log the user
    // logUserIn(req, user);

    return res.redirect('/');
  })
);

/**
 * GET: http://localhost:8080/login
 */
router.get('/login', csrfProtection, (req, res, next) => {
  return res.render('partials/log-in', {
    csrf: req.csrfToken(),
    user: req.session.user,
    messages: res.locals.messages,
    prefill: res.locals.prefill,
  });
});

/**
 * POST: http://localhost:8080/login
 */
router.post(
  '/login',
  csrfProtection,
  validateLogin,
  asyncHandler(async (req, res, next) => {
    // scoped user variable
    let user;

    // indicates that express validation is passing
    let passing = true;

    // check for form validation errors
    const validationErrors = validationResult(req);

    // if form validation failed push errors into validation view model
    if (!validationErrors.isEmpty()) {
      validationErrors.errors.forEach(err => {
        res.locals.messages[err.param].push(err.msg);
      });
      passing = false;
    }

    // data from form submission
    const { _csrf, email, password } = req.body;

    // if the user cannot be found in user store notify client
    user = await User.findOne({ where: { email: email } });
    res.locals.messages.email.push(
      'A user does not exist with the provided email.'
    );
    if (!user)
      return res.render('partials/log-in', {
        csrf: req.csrfToken(),
        user: req.session.user,
        messages: res.locals.messages,
        prefill: res.locals.prefill,
      });

    // compare request password with user password
    const saltyPassword = `${password}:${secret}`;
    const passwordIsValid = await bcrypt.compare(
      saltyPassword,
      user.passwordHash.toString()
    );

    // if password is invalid notify client
    if (!passwordIsValid)
      res.locals.messages.password.push(
        'Password is invalid. Please try again.'
      );
    if (!user)
      return res.render('partials/log-in', {
        csrf: req.csrfToken(),
        user: req.session.user,
        messages: res.locals.messages,
        prefill: res.locals.prefill,
      });

    // if any other validation is not passing notify the client
    if (!passing)
      return res.render('partials/log-in', {
        csrf: req.csrfToken(),
        user: req.session.user,
        messages: res.locals.messages,
        prefill: res.locals.prefill,
      });

    // if everything else checks out then log the user in
    logUserIn(req, user);
    return res.redirect('/');
  })
);

/**
 * POST: http://localhost:8080/demo
 */
router.get(
  '/demo',
  csrfProtection,
  validateLogin,
  asyncHandler(async (req, res, next) => {

    //Queries for demo user using a unique key
    const user = await User.findOne({ where: { email: 'demo@demo.com' } });
    
    //Logs in demo user
    logUserIn(req, user);
    return res.redirect('/');
  })
);

// <a href="/demo?_csrf=csrf">Login as demo user</a>

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
