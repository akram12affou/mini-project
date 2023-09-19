const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    username :{
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    }
}) 

userSchema.pre('save' , async function (next)  {
    if(!this.isModified('password')){
        next();
    }
    const salt  = await bcrypt.genSalt(10);
   await bcrypt.hash(this.password, salt).then(res => {
        this.password = res
    })
    next();
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  }
const User = mongoose.model('users' , userSchema);

module.exports = {User};