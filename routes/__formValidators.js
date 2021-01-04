//

const { check } = require('express-validator');

const userSignupValidator = [
  check('username').exists({checkFalsy: true}).withMessage('Username is required.'),
  check('emailAddress').exists({checkFalsy: true}).withMessage('Email is required.'),
  check('password').exists({checkFalsy: true}).withMessage('Password is required.'),
  check('confirmPassword').exists({checkFalsy: true}).withMessage('Password confirmation is required.'),
];

const userLoginValidator = [
  check('emailAddress').exists({checkFalsy: true}).withMessage('Username is required.'),
  check('password').exists({checkFalsy: true}).withMessage('Password is required.'),
];

module.exports = { userSignupValidator, userLoginValidator };
