const jwt = require('jsonwebtoken')

const generatetoken = (res,user) => {
 const accestoken =  jwt.sign({user : user[0].id} , 'secret')
 res.cookie("accestoken", accestoken, { httpOnly: true });
 res.json({ accestoken, id: user[0].id, name: user[0].username });
}

module.exports = {generatetoken}