const express=require('express')
const app=express()
const path=require('path')

app.use(express.static('public'))

const port=process.env.port||3001;


app.listen(port,()=>console.log(`Servidor corriendo en el puerto `+port));
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})
app.get('/registro',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})