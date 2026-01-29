require('dotenv').config()// to acces env contained data
//1. import express
const express = require ('express')
require('./config/db')
const router = require('./router/router')
const wasterouter = require('./router/wasteRouter')
const groceryouter = require('./router/groceryRouter')
const cors = require('cors')

//2.  create application using express
const server = express()


server.use(cors())
server.use(express.json())
server.use(router)
server.use(wasterouter)
server.use(groceryouter)

// 3.running server using listen method
const PORT = process.env.PORT || 3000
server.get('/',(req,res)=>{
    res.send("Server Started")
})
server.listen(PORT,()=>{
    console.log(`Server Running On The PORT ${PORT}`);
    
})
