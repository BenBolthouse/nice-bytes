const validationResult = require("express-validator").validationResult;
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const express = require("express");
const csrf = require("csurf");

const { validateSignUp, validateLogin } = require("./__validators");
const { User, Collection } = require("../db/models");
const { logUserIn, authorize } = require("../auth");

const router = express.Router();

// X-CSRF token
const csrfProtection = csrf({ cookie: true });

/**********************************************************
 * Router level middleware configures response locals object
 * to later contain the validation results from sign up and
 * login.
 */
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
    firstName: firstName || "",
    lastName: lastName || "",
    username: username || "",
    email: email || "",
  };
  next();
});

/**********************************************************
 * Returns a Pug view with an embedded X-CSRF token
 * and—where applicable—prefill data from the previous POST
 * attempt.
 */
// prettier-ignore
router.get("/signup", csrfProtection, (req, res) => {
  return res.render("partials/sign-up", {
    csrf: req.csrfToken(),
    messages: res.locals.messages,
    prefill: res.locals.prefill,
  });
});

/************************************************************
 * Accepts data from a form submission to create the
 * database user.
 */
// prettier-ignore
router.post("/signup", validateSignUp, csrfProtection, asyncHandler(async (req, res) => {
    // data from form submission
    const { firstName, lastName, username, email, password } = req.body;
    // variable is used in multiple validation steps; if
    // passing is still equal to true after validation then
    // create the user in the database and then send a
    // success response
    let passing = true;
    // do form validation
    const validationErrors = validationResult(req);
    // if form validation failed push errors into validation view model
    if (!validationErrors.isEmpty()) {
      validationErrors.errors.forEach((err) => {
        res.locals.messages[err.param].push(err.msg);
      });
      passing = false;
    }
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
      return res.render("partials/sign-up", {
        csrf: req.csrfToken(),
        user: req.session.user,
        messages: res.locals.messages,
        prefill: res.locals.prefill,
      });
    // if still passing then create the user in the database
    user = User.build();
    // else create the user and redirect to home
    const hash = await bcrypt.hash(password, 10);
    user = await User.create(
      {
        firstName: firstName || null,
        lastName: lastName || null,
        username: username,
        email: email,
        passwordHash: hash,
        _collections: [{ name: "Want To Visit" }, { name: "Have Visited" }],
      },
      {
        include: { model: Collection, as: "_collections" },
      }
    );
    // finally redirect the logged in user to the home page
    logUserIn(req, user);
    return res.redirect("/");
  })
);

/**********************************************************
 * Returns a Pug view with an embedded X-CSRF token to
 * accept login form data.
 */
// prettier-ignore
router.get("/login", csrfProtection, (req, res) => {
  return res.render("partials/log-in", {
    csrf: req.csrfToken(),
    user: req.session.user,
    messages: res.locals.messages,
    prefill: res.locals.prefill,
  });
});

/************************************************************
 * Accepts data from a form submission to create the session
 * user for a 24-hour express session.
 */
// prettier-ignore
router.post("/login", csrfProtection, validateLogin, asyncHandler(async (req, res, next) => {
    // data from form submission
    const { email, password } = req.body;
    // variable is used in multiple validation steps; if
    // passing is still equal to true after validation then
    // create the session and then send a success response
    let passing = true;
    // do form validation
    const validationErrors = validationResult(req);
    // if form validation failed push errors into validation view model
    if (!validationErrors.isEmpty()) {
      validationErrors.errors.forEach((err) => {
        res.locals.messages[err.param].push(err.msg);
      });
      passing = false;
    }
    // if the user cannot be found in the database send the
    // Pug login form with the error message
    const user = await User.findOne({
      where: { email: email },
      include: { model: Collection, as: "_collections" },
    });
    if (!user) {
      res.locals.messages.email.push(
        "A user does not exist with the provided email."
      );
      return res.render("partials/log-in", {
        csrf: req.csrfToken(),
        user: req.session.user,
        messages: res.locals.messages,
        prefill: res.locals.prefill,
      });
    }
    // compare request password with user password
    const hash = user.passwordHash.toString();
    const passwordIsValid = await bcrypt.compare(password, hash);
    // if the password is invalid send the Pug login form
    // with the error message
    if (!passwordIsValid) {
      res.locals.messages.password.push(
        "Password is invalid. Please try again."
      );
      return res.render("partials/log-in", {
        csrf: req.csrfToken(),
        user: req.session.user,
        messages: res.locals.messages,
        prefill: res.locals.prefill,
      });
    }
    // if any other validation is not passing notify the client
    if (!passing)
      return res.render("partials/log-in", {
        csrf: req.csrfToken(),
        user: req.session.user,
        messages: res.locals.messages,
        prefill: res.locals.prefill,
      });
    // finally redirect the logged in user to the home page
    logUserIn(req, user);
    req.session.save(() => res.redirect("/"));
  })
);

/************************************************************
 * Deletes a users 24-hour express session.
 */
// prettier-ignore
router.get("/logout", authorize, (req, res, next) => {
  req.session.destroy(() => res.redirect("/login"));
});

/************************************************************
 * Helper function checks the database for a user with a
 * given username.
 * @param {String} username
 */
const userUsernameIsUnique = async (username) => {
  const result = await User.findOne({ where: { username } });
  if (result) return false;
  return true;
};

/************************************************************
 * Helper function checks the database for a user with a
 * given email.
 * @param {String} username
 */
const userEmailIsUnique = async (email) => {
  const result = await User.findOne({ where: { email } });
  if (result) return false;
  return true;
};

module.exports = router;
