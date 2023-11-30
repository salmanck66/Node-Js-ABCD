//creating a server basic

// const http = require('http');
// const server = http.createServer((req,res)=>{
// console.log(req.url,req.method);


// res.setHeader('Content-Type','text/html')
// res.write("<h1>hello</h1>")
// res.end("Done")
// })

// server.listen(3003 ,'localhost',()=>
// {
//     console.log("Listenig for requests");
// })

// creating a server and sending html page response
const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    if(req.url == "/")
    {
    res.setHeader('Content-Type','text/html')
    // res.statusCode = 200
    res.end(fs.readFileSync('./views/index.html','utf-8'))
    }
    if(req.url == "/about")
    {
    res.setHeader('Content-Type','text/html')
    res.end(fs.readFileSync('./views/about.html','utf-8'))
    }
    })
server.listen(3003 ,'localhost',()=>
{
    console.log("Listenig for requests");
})