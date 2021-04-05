const router = require("express").Router();

router.get("/", async (req, res) => {
  if (req.session.user.id) {
    const { collections, favorites, visited } = req.session.user;
    return res.render("collections", { collections, favorites, visited });
  }
  return res.redirect("/");
});

module.exports = router;
