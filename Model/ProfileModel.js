const mongoose=require("mongoose");

const ProfileSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    timestamp:{type:String,required:true},
    unique_id:{type:String,required:true}
})

const ProfileModel= mongoose.model("profile",ProfileSchema);

module.exports={ProfileModel};