const User = require("../model/user.schema");

const isAdmin = async (req, res, next) => {
  const adminId = req.cookieParser.adminId;

  if (!adminId) {
    return res.status(403).send("Admin access only");
  }
  next();
};

module.exports = isAdmin;
