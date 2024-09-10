const ErrorHandler=require("../middleware/errormiddleware");
const catchAsyncErrors=require("../middleware/CatchAsyncmiddleware");
const User=require("../models/Signup");
const bodyParser=require("body-parser");

const signup=catchAsyncErrors(async(req,res,next)=>{
    const{username,email,password}=req.body;

    if(!username || !email || !password){
        return next(new ErrorHandler("Please fill the form",400));
    }

    // Check there user is already registered or not.
    const existuser= await User.findOne({email});
    if(existuser){
        return next(new ErrorHandler("User already exists",400));
    }

    try{
        await User.create({username,email,password});
        res.status(201).json({
            success:true,
            message:"Registration sucessfully",
        });
    }catch(error){
        next(error);
    }
});

module.exports=signup;

