const express = require('express');
const restaurant = require('./restaurant');
const item = require('./item');
const app = express()
const port = 6969

app.get('/',(res,req)=>{
    res.send("Program Running.");
})

app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
})