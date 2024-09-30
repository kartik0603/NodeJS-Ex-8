const express =require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');   
const cookieParser = require('cookie-parser');
const app = express();
const userRouter=require("./routes/user.route")
const isAuth=require("./middlewares/auth")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'view'))
app.use(express.static(path.join(__dirname, 'public')));



// app.use("/user",userRouter);

app.get("/home", (req, res) => {
    res.render('index');
})




app.listen(8000, () => {
    console.log('Server is running on port 8000');
    connectDB();
});