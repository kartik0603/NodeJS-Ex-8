const { Router } = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  sendOtp,
  sigining,
} = require("../controllers/user.controller");

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.post("/", sendOtp, createUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/signing", sigining);

// userRouter.get("/home", (req, res) => {
//   res.render("index");
// });

module.exports = userRouter;
