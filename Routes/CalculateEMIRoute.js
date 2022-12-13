const { Router } = require("express");
const { CalculateEmi } = require("../Controller/CalculateController");

const CalEMI=Router();

CalEMI.post("/",CalculateEmi)

module.exports={CalEMI};