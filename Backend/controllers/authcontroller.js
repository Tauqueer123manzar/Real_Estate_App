const catchAsyncErrors = require("../middleware/CatchAsyncmiddleware");
const ErrorHandler=require("../middleware/errormiddleware")
const User=require("../models/signin");
const bodyParser=require("body-parser");

const signup=catchAsyncErrors(async(req,res,next)=>{
    const{username,email,password}=req.body;
    if(!username || !email || !password){
        return next(new ErrorHandler("Please fill the form",400));
    }
    try{
        await User.create({username,email,password});
        res.status(201).json({
            sucess:true,
            message:"Registration sucessfully",
        });
    }catch(error){
        next(error);
    }
});

module.exports=signup;
