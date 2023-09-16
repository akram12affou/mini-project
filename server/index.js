const express = require('express')     
const mongoose = require('mongoose')
const {userRoute}  =require('./routes/users')
const {postRoute}  =require('./routes/posts')
const cors = require('cors')  
const cookieParser = require('cookie-parser'); 
const app = express()      
app.use(cookieParser());

app.use(      
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
app.use(express.json())
app.use('/users' , userRoute)
app.use('/posts' , postRoute)
app.listen(3000 , (req , res) => {
    mongoose.connect('mongodb+srv://akramaffou:akramaffou@cluster0.nvieeag.mongodb.net/').then(res => {
          console.log('listening')
    })
})