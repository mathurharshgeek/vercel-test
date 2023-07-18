const express=require('express');
const app= express();
const routes=require('./routes')(app)

app.listen(8081,()=>{console.log("Server started")})