var express=require('express')
var app=express()

app.get('/home',(req,res)=>{
    res.send("hai")
})
app.get('/address',(req,res)=>{
    res.send("this is my sample program")
})
app.get('/back',(req,res)=>{
    res.send("Exit page")
})


app.listen(3000,()=>{
    console.log("server started at  http://localhost:3000/home")
})