const express = require("express");
const {
  addPost,
  getPosts, 
  deletePost, 
} = require("../controller/postContoller");
const { verify } = require("../middleware/authMiddleware");
const postRoute = express.Router();
postRoute.get("/", getPosts);
postRoute.post("/add-post/:cookie", verify,  addPost);
postRoute.delete("/:id",   deletePost);
module.exports = { postRoute };  
  