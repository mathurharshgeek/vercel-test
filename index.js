const express=require('express');
const app= express();
const routes=require('./routes')(app)

app.listen(5000,()=>{console.log("Server started")})