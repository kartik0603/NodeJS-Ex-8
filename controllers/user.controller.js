const User = require("../model/user.schema");

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const createUser=(req, res) => {

}

// const renderHomePage=(req, res) => {

//     res.render('index');
    
// }
module.exports = { getUsers };
