const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

// ======================================== Password hash_code ============================================
UserSchema.pre("save",async function(next){
    if(!this.isModified(`password`)){
        next();
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
});

UserSchema.methods.comparePassword=async function(enteredpassword){
    return await bcrypt.compare(enteredpassword,this.Password);
};

const User= mongoose.model("User",UserSchema);
module.exports=User;
