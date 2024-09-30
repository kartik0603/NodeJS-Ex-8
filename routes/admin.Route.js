const express = require("express");

const adminRouter = express.Router();

const { showUsers, allowPost } = require("../controllers/admin.controller");
const isAdmin = require("../middlewares/adminAuth");

adminRouter.get("/", isAdmin, showUsers);
adminRouter.post("/allow", isAdmin, allowPost);

module.exports = adminRouter;
