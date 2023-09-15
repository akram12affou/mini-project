const express = require('express')
const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    text :{
        type:String,
        required:true,
    },
    userId : {
        type:mongoose.Types.ObjectId,
        required:false
    }
})
const postModel = mongoose.model('posts' , postSchema);

module.exports = {postModel};