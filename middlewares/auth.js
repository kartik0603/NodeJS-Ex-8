const isAuth = (req, res, next) => {
  let { id } = req.cookieParse;
  if (id) {
    next();
  } else {
    res.render("login");
  }
};

module.exports = isAuth;
