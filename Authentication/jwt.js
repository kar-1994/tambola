const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
exports.getToken=(data)=>{
    return new Promise((resolve, reject) => {
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
       
        const token = jwt.sign(data, jwtSecretKey);
       
        return resolve(token);
    })
    
}

exports.validateToken=(req,res,next)=>{
    
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = req.headers.authorization;
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(!verified){
            return res.status(401).send(error);
            
        }
        const decoded=jwt.decode(token,{complete:true})
        req.uid=decoded.payload.user_id;
        next()
        
    } catch (error) {
        console.log(error);
        return res.status(401).send(error);
    }
    
}
