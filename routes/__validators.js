//

const { check } = require('express-validator');

const validateSignUp = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Username is required.')
    .isLength({ min: 4, max: 20 })
    .withMessage('Username must be between 4 and 20 characters long.'),
    // .matches(/^([a-zA-Z0-9])$/gm)
    // .withMessage('Username can only contain letters, numbers and the characters "-" and "_".'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Email is required.')
    .isEmail()
    .withMessage('Email address must be a valid email address.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Password is required.')
    .isLength({ min: 8, max: 20 })
    .withMessage('Password must be between 8 and 20 characters long.'),
    // .matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g)
    // .withMessage(
    //   'Password must contain an uppercase letter, lowercase letter, special character and a number.'
    // ),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Confirm password is required.')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

const validateLogin = [
  check('email').exists({ checkFalsy: true }).withMessage('Username is required.'),
  check('password').exists({ checkFalsy: true }).withMessage('Password is required.'),
];

module.exports = { validateSignUp, validateLogin };
