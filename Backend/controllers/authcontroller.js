const User=require("../models/signin");
const bodyParser=require("body-parser");
const signup=(req,res)=>{
    const{username,email,password}=req.body;
    const newuser=new User({username,email,password});
    newuser.save();
    res.status(201).json("User created sucessfully");
};

module.exports=signup;