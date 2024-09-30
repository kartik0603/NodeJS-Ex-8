const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const userRouter = require("./routes/user.route");
const adminRouter = require("./routes/admin.Route");
const isAuth = require("./middlewares/auth");
const isAdmin = require("./middlewares/adminAuth");

const port = 8070;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.static(path.join(__dirname, "public")));



app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/admin", (req, res) => {
  res.render("dashboard");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.use("/user", isAuth, userRouter);
app.use("/admin", isAdmin, adminRouter);

app.listen(port, () => {
  console.log(`Server  ${port}`);
  connectDB();
});
