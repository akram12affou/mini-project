const express= require('express');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const verify = (req,res,next) => {
    console.log('Cookies: ',req.cookies)
    next();
}

module.exports = {verify}