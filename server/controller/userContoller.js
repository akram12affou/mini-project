const {User}= require("../models/Users");
const jwt= require("jsonwebtoken");
const {generatetoken} = require('../utils/generateToken')
const bcrypt = require("bcrypt");
const login = async (req,res,next) => {
        const { username, password } = req.body;
        const user = await User.find({ username });
        if (!user[0]) {
          res.status(400)
          const error = new Error("user Not Found")
          next(error);
        } else {   
           const MachedPassword = await bcrypt.compare(password, user[0].password);
          if (MachedPassword) {
            generatetoken(res,user)
          } else { 
            res.status(400).json("password or username incorrect");
          }
        }
      }
const register = async (req,res) => {
    const { username, password } = req.body;
  const user = await User.find({ username });
  if (user.length !== 0) {
    res.status(400).json("unvalid");
  } else {
    const newuser = User({
      username,
      password,
    });
    newuser.save();
    generatetoken(res,user)
    res.json("created");
  }
}


module.exports = {
    register , login
}
