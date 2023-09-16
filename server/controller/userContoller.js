const { userModel } = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const login = async (req,res) => {
        const { username, password } = req.body;
        const user = await userModel.find({ username });
        if (!user[0]) {
          res.status(400).json("user Not Found");
        } else {
          const MachedPassword = await bcrypt.compare(password, user[0].password);
          if (MachedPassword) {
            const accestoken = await jwt.sign({ id: user[0].id }, "secret");
            res.cookie("accestoken", accestoken, { httpOnly: true });
            res.json({ accestoken, id: user[0].id, name: user[0].username });
          } else {
            res.status(400).json("password or username incorrect");
          }
        } 
      }
  
const register = async (req,res) => {
    const { username, password } = req.body;
  const user = await userModel.find({ username });
  if (user.length !== 0) {
    res.status(400).json("unvalid");
  } else {
    const passwordDB = await bcrypt.hash(password, 10);
    const newuser = userModel({
      username,
      password: passwordDB,
    });
    newuser.save();
    res.json("created");
  }
}


module.exports = {
    register , login
}
