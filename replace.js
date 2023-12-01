const http = require("http")
const fs = require("fs")
const index = fs.readFileSync('./index.html','utf-8')
const server = http.createServer((req,res)=>
{
    const name = "salman"
    res.writeHead(200,{
        "Content-type":"text/html"
    })
    
    res.end(index.replace("{{name}}",name))
})

server.listen(3000,()=>
{
    console.log("Response have been recieved");
})