const jwt = require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
    console.log("inside Jwt middleware");
    console.log(req.headers.authorization.slice(7));
    const token = req.headers.authorization.slice(7)
    
    try{
        const jwtVerification = jwt.verify(token,process.env.jwtKey)
        console.log(jwtVerification);
        req.payload=jwtVerification.userMail
        
        
    }
    catch(err){
        
       res.status(500).json("Authentication error",err)
    }

    next()
}
module.exports=jwtMiddleware