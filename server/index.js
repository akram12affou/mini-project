const express = require('express')
const dotenv = require('dotenv')
dotenv.config()   
const {connectDB} = require('./config/db')
const {notFound, errorHandler} = require('./middleware/errorMiddleware')
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
connectDB()
app.use(express.json()) 
app.use('/users' , userRoute)
app.use('/posts' , postRoute )
 app.use(notFound)
app.use(errorHandler)
app.listen(process.env.PORT  , (req , res) => {
   console.log('listeinig')
}) 
