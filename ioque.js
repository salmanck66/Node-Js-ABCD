const fs = require("fs")

fs.readFile(__filename,()=>
{
    console.log("file has been read");
})
process.nextTick(()=>
{
    console.log("next tick");
})
Promise.resolve().then(()=>
{
    console.log("this is a promise resolve");
})