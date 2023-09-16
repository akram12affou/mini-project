const express = require("express");
const {
  addPost,
  getPosts,
  deletePost,
} = require("../controller/postContoller");
const { verify } = require("../middleware/authMiddleware");
const postRoute = express.Router();
postRoute.get("/", (req, res) => getPosts(req, res));
postRoute.post("/add-post/:cookie", verify, (req, res) => addPost(req, res));
postRoute.delete("/:id",  (req, res) => deletePost(req, res));
module.exports = { postRoute };
  