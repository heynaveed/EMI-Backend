const express = require("express");

const cors= require("cors");
const { Connection } = require("./config/db");
const { SignUp } = require("./Routes/SignupRoute");
const { Login } = require("./Routes/LoginRoute");
const { GetProfile } = require("./Routes/GetProfileRoute");
const { CalEMI } = require("./Routes/CalculateEMIRoute");
const { Authentication } = require("./Middleware/Authentication");

require("dotenv").config();
const PORT=process.env.PORT|| 8500

const app=express();
app.use(cors());
app.use(express.json());

app.use("/signup",SignUp)

app.use("/login",Login)

app.use("/getProfile",Authentication,GetProfile)

app.use("/calculateEMI",Authentication,CalEMI)

app.listen(PORT,async()=>{
    try{
        await Connection;
        console.log("connection to DATABASE successfull")
    }
    catch(err){
        console.log("error in connecting to DATABASE")
        console.log(err);
    }
    console.log(`Listening to Port ${PORT}`)
})

