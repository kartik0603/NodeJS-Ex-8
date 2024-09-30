const User = require("../model/user.schema");
const sendingMail = require("../service/mailservice");
const cookieParser = require("cookie-parser");

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const createUser = async (req, res) => {
  let { username, email, password } = req.body;

  let user = {
    usernmae,
    email,
    password,
  };
  const isExists = User?.await.findOne({ email: email });

  if (isExists) {
    let data = await User.create(user);
    res.send(data);
  } else {
    res.send({ user: isExists, msg: "user already exists" });
  }
};

// generating otp

let otps = new Map();

const sendOtp = async (req, res) => {
  let { email } = req.body;
  let user = await User.findOne({ email: email });

  if (!user) {
    res.send({ msg: "user not found" });
  } else {
    const otp = Math.floor(100000 + Math.random() * 900000);
    otps.set(email, otp);

    let html = `<h1> Your OTP is ${otp}</h1>`;

    sendingMail(email, "OTP", html);
    res.cookieParser("id", user.id).send({ msg: "otp sent" });
  }
};

const sigining = async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.send({ msg: "user not found" });
  }

  // verify

  if (otps.get(email) === otp) {
    res.send({ msg: "otp verified" });
  } else {
    res.send({ msg: "otp not verified" });
  }
  user.isVerified = true;
  await user.save();

  res.cookieParser("id", user.id).send({ msg: "user verified" });
  res.status(200).send({ msg: "user verified" });
};

const updateUser = async (req, res) => {
  let { id } = req.params;
  let data = await User.findByIdAndUpdate(id, req.body, { new: true });

  res.send(data);
};

const deleteUser = async (req, res) => {
  let { id } = req.params;
  let data = await User.findByIdAndDelete(id);
  res.send(data);
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  sigining,
  sendOtp,
};
