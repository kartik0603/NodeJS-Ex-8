const User = require("../model/user.schema");


const showUsers = async (req, res) => {
  const users = await User.find({ isVerified: true });
  res.remder("dashboard", { users });
};

const allowPost = async (req, res) => {
  const { id, action } = req.body;

  const user = await User.findById(id);

  if (!user) {
    return res.send({ msg: "user not found" });
  }

  // allow post

  user.canPost = action === "allow" ? true : false;
  await user.save();

  res.cookieParser("canPost", canPost, { httpOnly: true, maxAge: 3600000 });
};

module.exports = { showUsers, allowPost };
