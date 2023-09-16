const express = require("express");
const { postModel } = require("../models/Posts")
const {verify} = require('../middleware/authMiddleware')
const postRoute = express.Router();


postRoute.get("/", async (req, res) => {
     const posts = await postModel.find({})
      res.json(posts); 
});

postRoute.post("/add-post",verify, async (req, res) => {
    const {text, userId,username} = req.body
console.log(text, userId,username)
    const newPost = await  postModel({
        text ,
        userId,
        username
    })
    newPost.save()
});
postRoute.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await postModel.findByIdAndDelete(id)
});

module.exports = { postRoute };