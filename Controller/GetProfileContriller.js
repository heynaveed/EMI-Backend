const { ProfileModel } = require("../Model/ProfileModel");

const GetProfiles=async(req,res)=>{
    const {user_id}=req.body;
    console.log("user_id",user_id);
    const Profile=await ProfileModel.findOne({unique_id:user_id})
    res.send(Profile);
}
module.exports={GetProfiles};