const user=require("../models/signin");
const test = (req, res) => {
    res.json({
      message: "Hello, how are you Sammer"
    });
  };
  
module.exports=test;