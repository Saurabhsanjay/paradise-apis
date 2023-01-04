const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  
  const authHeader = req.headers['authorization'];
  console.log(authHeader)
  console.log(req.headers['content-length'])
  const token = authHeader && authHeader.split(' ')[1];


  if (token == null) {
    return res.status(401).json({ message: 'No token provided' });
  }

  
 let verifytoken= jwt.verify(token, process.env.JWT_SECRET)

  
 console.log(verifytoken)
  if (!verifytoken) {
    return res.status(403).json({ message: 'Invalid token' });
  }

 

  
  next();

};

module.exports = authMiddleware;
