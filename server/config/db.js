const mongoose = require('mongoose')
const connectDB = async ( ) => {
   try{
    const conn = await  mongoose.connect(process.env.MONGO_DB_URI) 
    console.log(conn.connection.host)
   }catch(err){
      console.log(err.meggage)
      process.exit(1)
   }
}

module.exports = {connectDB}