const ErrorHandler=require("../middleware/errormiddleware");
const catchAsyncErrors=require("../middleware/CatchAsyncmiddleware");
const User=require("../models/Userschema");
const bodyParser=require("body-parser");

module.exports.signup=catchAsyncErrors(async(req,res,next)=>{
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


module.exports.signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please fill the form", 400));
    }

    try {
        console.log("Signin request data:", req.body);

        const user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorHandler("User not Registered", 400));
        }

        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
            return next(new ErrorHandler("Incorrect Password", 400));
        }
        res.status(200).json({
            success: true,
            message: "User Logged in successfully",
        });
    } catch (error) {
        console.error("Signin Error:", error);
        return next(error);
    }
};