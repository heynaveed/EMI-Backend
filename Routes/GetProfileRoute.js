const { Router } = require("express");
const { GetProfiles } = require("../Controller/GetProfileContriller");

const GetProfile=Router();
        
  GetProfile.get("/",GetProfiles)

module.exports={GetProfile};