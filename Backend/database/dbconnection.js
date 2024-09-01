const mongoose=require("mongoose");
const dotenv=require("dotenv");

dotenv.config({path:"./config/.env"});

main().then((req,res)=>{
     console.log("!!!!! Database connected sucesfully !!!!!");
}).catch((err)=>{
    console.log(`${err.message}`);
})

async function main(){
    await mongoose.connect(process.env.MONGO_URI);
}

module.exports=mongoose.connection;