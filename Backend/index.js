const express=require("express");
const database=require("./database/dbconnection");
const user=require("./models/signin");
const app=express();

require('dotenv').config();

const PORT=process.env.PORT || 5000;

const user1= new user({
    Name:"Tauqueer manzar",
    Email:"tauqueer.er@gmail.com",
    Password:"Taj@123",
});

user1.save();

app.listen(PORT,()=>{
    console.log(`server is running now at port ${PORT}`);
});