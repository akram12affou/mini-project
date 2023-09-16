const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    text :{
        type:String,
        required:true,
    },
    userId : {
        type:String, 
        required:true
    },
    username : {
        type:String,
        required:false
    }
})
const postModel = mongoose.model('posts' , postSchema);

module.exports = {postModel};