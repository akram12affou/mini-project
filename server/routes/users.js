const express = require("express");
const userRoute = express.Router();
const {
  register  , login
} = require('../controller/userContoller')

 
userRoute.post("/register", (req,res)=>register(req,res));
userRoute.post("/login",(req, res)=>login(req,res));

module.exports = { userRoute };
