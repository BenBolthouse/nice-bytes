// returns a date time string for 24 hours from now.
const __setExpiryDate = () => {
  let now = new Date();
  let newDate = now.setDate(now.getDate() + 1);
  return new Date(newDate).toUTCString();
};

/**
 * Logs a user in with a 24-hour session.
 * @param {Express middleware request object} req
 * @param {Application user to log in} user
 */
const logUserIn = (req, user) => {
  req.session.cookie = {
    httpOnly: true,
    path: '/',
    secure: false,
    expires: __setExpiryDate(),
    maxAge: 10000,
  };
  req.session.auth = {
    userId: user.id,
  };
  req.session.user = {
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
  }
};

/**
 * Logs a user out by deleting their session.
 * @param {Express middleware request object} req
 */
const logUserOut = (req) => {
  delete req.session.auth;
};

/**
 * Detects if a request is authorized and returns a `403 Forbidden` response if unauthorized.
 */
const authorize = (req, res, next) => {
  if (!req.session.auth) {
    const err = new Error('Not authorized to view this resource.')
    err.title = 'Not authorized to view this resource.';
    err.status = 403;
    next(err);
  }
  next();
}

module.exports = { logUserIn, logUserOut, authorize };
