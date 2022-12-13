const bcrypt=require("bcrypt");
const  JWT=require("jsonwebtoken");
const { ProfileModel } = require("../Model/ProfileModel");
const { UserModel } = require("../Model/UserModel");
require("dotenv").config();


const PostLogin=async(req,res)=>{
     const{email,password}=req.body;
     const user=await UserModel.findOne({email});
     if(user){
        const hashpassword=user.password;
        bcrypt.compare(password,hashpassword,async function(err,macthed){
            if(err){
                res.send("something went wrong, try again later");
            }
            else{
                if(macthed){
                    const newProfile=new ProfileModel({
                       name:user.name,
                       email:email,
                       timestamp: new Date().getTime(),
                       unique_id:user._id
                    })
                    await newProfile.save();
                    const data= await ProfileModel.findOne({unique_id:user._id});
                    // console.log(data._conditions);
                    const token=JWT.sign({user_id:user._id},process.env.SECRET);
                    res.send({"msg":"login successfull", "token": token,"profile":data})
                }
                else{
                    res.send("data didn't match");
                }
            }
        });
     }
}
module.exports={PostLogin};