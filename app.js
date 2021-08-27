const express = require('express');

const app =express();

const PORT = process.env.PORT || 3000;

app.use(express.static('frontend'));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/frontend/html/home.html")
})

app.listen(PORT,()=>{
    console.log("server started at port"+PORT);
});