const express=require("express");
const database=require("./database/dbconnection");
const dotenv=require('dotenv');
const userroutes =require("./routes/userroutes")
const authroutes=require("./routes/authroutes");
const bodyParser = require("body-parser");
const app=express();

dotenv.config();

const PORT=process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/api/user",userroutes);
app.use("/api/auth",authroutes);

// ====================================== middleware ==================================================
app.use
app.listen(PORT,()=>{
    console.log(`server is running now at port ${PORT}`);
});