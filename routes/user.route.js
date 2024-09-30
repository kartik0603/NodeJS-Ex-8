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
userRouter.post("/signup",  createUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/signin", sendOtp, sigining);



module.exports = userRouter;
