const JWT = require("jsonwebtoken");
require('dotenv').config();

const Authentication=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[0];
    console.log("token",token)
    var decoded = JWT.verify(token,process.env.SECRET);
    const user_id=decoded.user_id;
    console.log("userID",user_id);
   if(decoded){
      req.body.user_id=user_id;
      next();
   }
else{
    res.send("Plese login again")
}
}
module.exports={
    Authentication
}