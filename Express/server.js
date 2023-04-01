const express = require('express');
const ErrorHandle = require('./Middleware/ErrorHandle');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.port; //fetching it up from .env file
app.listen(port,()=>{
    console.log(`server listening at ${port}`);
});
//app.get("/api/contact" , (req,res)=>{
        //res.status(200).send("Get all Contacts")
        //res.json({message : 'This is a json shit'})
//})
app.use(express.json())
app.use('/api/contact',require('./Routes/ContactRoutes')); //using a middleware for routing
app.use(ErrorHandle);
app.get('/api/',(req,res)=>{
    res.status(200).json({message:'this is json shit'});
})