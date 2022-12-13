const { Router } = require("express");
const { PostSignUP } = require("../Controller/SignUpController");

const SignUp=Router();

SignUp.post("/",PostSignUP)

module.exports={SignUp};