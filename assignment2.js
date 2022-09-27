const express = require('express');
const app = express()
const path = require('path')

app.use('/home',express.static(path.join(__dirname,'home.html')))
app.use('/about',express.static(path.join(__dirname,'about.html')))
app.use('/services',express.static(path.join(__dirname,'services.html')))
app.use('/contact',express.static(path.join(__dirname,'contact.html')))


app.listen(3000,()=>{
    console.log('server starting up at port : 3000');
})