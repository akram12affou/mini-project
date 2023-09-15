const express = require("express");
const { postModel } = require("../models/Posts")

const postRoute = express.Router();


postRoute.get("/", async (req, res) => {
   res.json('postModel');
});

postRoute.post("/add-post", async (req, res) => {
    const {text, userId} = req.body
    const newPost = await  postModel({
        text ,
        userId
    })
    newPost.save()
});

module.exports = { postRoute };