/**
 * * ======================================================
 * *  Authorization & Authentication Utilities
 * * ======================================================
 */

/**********************************************************
 * Helper function returns a UTC string 24 hours from now.
 */
const __setExpiryDate = () => {
  let now = new Date();
  let newDate = now.setDate(now.getDate() + 1);
  return new Date(newDate).toUTCString();
};

/**********************************************************
 * Logs a user in with a 24-hour session.
 * @param {Request} req `express.Request`
 * @param {User} user `db.models.User`
 */
const logUserIn = (req, user) => {
  req.session.cookie = {
    expires: __setExpiryDate(),
    httpOnly: true,
    secure: false,
    path: "/",
  };
  req.session.user = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    collections: user.collections(),
    favorites: user.favorites(),
    visited: user.visited(),
  };
};

/**********************************************************
 * Logs a user out by deleting their session.
 * @param {Request} req `express.Request`
 */
const logUserOut = (req) => {
  delete req.session.user;
};

/**********************************************************
 * Authorization middleware prevents unauthorized access to
 * a given Express route by detecting an Express session.
 * @param {Request} req `express.Request`
 * @param {Function} next Express middleware `next()`
 */
const authorize = (req, _res, next) => {
  if (!req.session.user.id) {
    const err = new Error("Not authorized to view this resource.");
    err.title = "Not authorized to view this resource.";
    err.status = 403;
    return next(err);
  }
  return next();
};

module.exports = { logUserIn, logUserOut, authorize };
