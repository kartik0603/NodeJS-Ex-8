const { Router } = require("express");
const { getUsers } = require("../controllers/user.controller");

const userRouter = Router();

userRouter.get("/", getUsers);


// userRouter.get("/home", (req, res) => {
//   res.render("index");
// });

module.exports = userRouter;
