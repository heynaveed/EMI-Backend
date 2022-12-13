const bcrypt=require("bcrypt");
const { UserModel } = require("../Model/UserModel");

const PostSignUP=async(req,res)=>{
    const {name,email,password}=req.body;
    const AlreadyPresent=await UserModel.findOne({email});
    if(AlreadyPresent){
        res.send("User already exists, try logging in")
    }
    else{
        bcrypt.hash(password,4,async function(err,hash){
            if(err){
                res.send("Something Went Worng Please Try Later")
            }
            const newuser=new UserModel({
                name:name,
                email:email,
                password:hash
            })
            await newuser.save();
            const Data=await UserModel.findOne({email})
            console.log(Data)
            res.send("Signup sucessfull")
        })
    }
}
module.exports={PostSignUP};