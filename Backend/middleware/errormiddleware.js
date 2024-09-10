const errormiddleware=(err,req,res,next)=>{
    const statusCode= err.statusCode || 500;
    const message=err.message || "Intenal Server error";

    res.status(statusCode).json({
       success:false,
       statusCode,
       message,
    });
};

module.exports=errormiddleware