const authorize = require("../auth").authorize;
const createError = require("http-errors");
const csrf = require("csurf");
const router = require("express").Router();

const { User, Collection, Spot } = require("../db/models");

// X-CSRF token
const csrfProtection = csrf({ cookie: true });

/******************************************************************************
 * Middleware updates session user with a user's collections, for use on this
 * router's routes.
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next 
 */
const updateCollections = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.session.user.id, {
      include: {
        model: Collection,
        as: "_collections",
        include: { model: Spot, as: "spots" },
      },
    });
    const collections = user.collections();
    const favorites = user.favorites();
    const visited = user.visited();
    req.session.user.collections = collections;
    req.session.user.favorites = favorites;
    req.session.user.visited = visited;
    next();
  }
  catch (e) {
    next(e);
  }
}

/******************************************************************************
 * Accepts the index route at the collections router and then immediately
 * redirects to a user's favorites collection.
 */
// prettier-ignore
router.get("/", authorize, updateCollections, async (req, res) => {
  const user = req.session.user;
  const { favorites, visited, collections } = user;
  return res.render("collections", {
    scoped: favorites,
    collections,
    favorites,
    visited,
    user,
  });
});

/******************************************************************************
 * Returns a view that allows a user to create a new collection.
 */
router.get("/add", authorize, csrfProtection, async (req, res) => {
  return res.render("add-collection", {
    csrf: req.csrfToken(),
    user: req.session.user,
  });
});

/******************************************************************************
 * Receives form data from the add collection view.
 */
router.post("/add", authorize, csrfProtection, async (req, res, next) => {
  // data from form submission
  const { name } = req.body;

  // check if the collection already exists
  const exists = req.session.user.collections.find((c) => c.name === name);
  const illVisited = "HAVE VISITED" === name.toUpperCase();
  const illFavorite = "WANT TO VISIT" === name.toUpperCase();

  // return an error message if the collection already exists
  if (exists || illVisited || illFavorite) {
    return res.render("add-collection", {
      csrf: req.csrfToken(),
      error: "Collection already exists. Try another name?",
      user: req.session.user,
    });
  }

  // save to the database
  Collection.create({
    userId: req.session.user.id,
    name,
  });

  // return to collections browse view
  return res.redirect("/collections");
});

/******************************************************************************
 * Accepts the index route at the collections router and then immediately
 * redirects to a user's favorites collection.
 */
// prettier-ignore
router.get("/:id", authorize, updateCollections, async (req, res, next) => {
  // id from params
  const id = parseInt(req.params.id);

  const user = req.session.user;
  const { favorites, visited, collections } = user;

  let scoped;
  if (favorites.id === id) scoped = favorites;
  else if (visited.id === id) scoped = visited;
  else scoped = collections.find((c) => c.id === id);

  if (scoped) {
    return res.render("collections", {
      scoped,
      collections,
      favorites,
      visited,
      user,
    });
  }
  else next(createError(404));
});

module.exports = router;
