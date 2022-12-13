const { Router } = require("express");
const { PostLogin } = require("../Controller/LoginController");

const Login=Router();

Login.post("/",PostLogin)

module.exports={Login};