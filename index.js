const express=require('express');
const app= express();
app.get('/',(req,res)=>{
    res.send("working");
})
app.listen(5000,()=>{console.log("Server started")})
module.exports=app;