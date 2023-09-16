const { postModel } = require("../models/Posts");
const addPost = async (req, res) => {
  const { text, userId, username } = req.body;
  const newPost = await postModel({
    text,
    userId,
    username,
  });
  newPost.save();
};
const getPosts = async (req, res) => {
  const posts = await postModel.find({});
  res.json(posts);
};
const deletePost = async (req, res) => {
  const id = req.params.id;
  await postModel.findByIdAndDelete(id);
};
module.exports = { addPost, getPosts, deletePost };
