const express = require('express')//impprting express 
const app = express()// making an instance of express app

app.set('view engine','ejs')

app.get('/',(req,res)=>
{
    // res.send('<p>Hello</p>')//it automatically sets status code and everything so we dont need to mention any
    res.sendFile('./views/index.html',{root :__dirname})// to send a file// we are doing an html file here // it takes absuolute position only so we should mention relative path in an object using root
})// to listen to a get request

app.get('/about',(req,res)=>
{
    // res.send('<p>Hello</p>')//it automatically sets status code and everything so we dont need to mention any
    res.sendFile('./views/about.html',{root :__dirname})// to send a file// we are doing an html file here // it takes absuolute position only so we should mention relative path in an object using root
})// to listen to a get request

app.get('/aboutus',(req,res)=>
{
    
    res.redirect('/about')
})// to listen to a get request

app.use((req,res)=>
{
    res.status(404).send("<h1>badway</h1>")
})// if the req.url doesnt match any routes app.use middleware will be called and responded


app.listen(3000)//listening for requests, we dont need to specify
//local host ,it use automatically





