const jwt = require("jsonwebtoken");

const verify = async (req,res,next) => {
    const cookie = req.params.cookie
     if(!cookie){
        res.status(400).json('makaynch cookie')
     }
     try{
          const checkUser =  jwt.verify(cookie,"secret")
          if(checkUser){
            next();
          }
     }catch(err){
        res.status(400).json('unvalid cookie')
     }
   
}      
   
module.exports = {verify}