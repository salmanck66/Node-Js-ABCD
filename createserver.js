const http = require("http")
const server = http.createServer((req,res)=>
{
    const det = {
        name : "salman",
        age : 23
    }
    res.writeHead(200,{"content-type":"application/json"})
    console.log("request has been recieved")
    res.end(JSON.stringify(det))
})

server.listen(3000,()=>
{
    console.log("Server Has Been Created")
})