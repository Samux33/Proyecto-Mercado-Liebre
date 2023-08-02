const express=require('express')
const app=express()
const path=require('path')

app.use(express.static('public'))

app.listen(4000,()=>{
    console.log("Servidor Corriendo")
})
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})
app.get('/registro',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})