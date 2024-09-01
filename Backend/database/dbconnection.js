const mongoose=require("mongoose");

main().then((req,res)=>{
     console.log("!!!!! Database connected sucesfully !!!!!");
}).catch((err)=>{
    console.log(err.message);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Real_Estate");
}

module.exports=main;