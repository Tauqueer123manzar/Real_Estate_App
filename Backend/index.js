const express=require("express");
const database=require("./database/dbconnection");
const dotenv=require('dotenv');
const user=require("./models/signin");
const userrouter=require('./routes/UserRoutes')
const app=express();

dotenv.config();

const PORT=process.env.PORT || 5000;

app.use("/api/user",userrouter);

app.listen(PORT,()=>{
    console.log(`server is running now at port ${PORT}`);
});