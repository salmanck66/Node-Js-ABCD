
const fs = require("fs")

setTimeout(() => {
    console.log("Time Out Has Been Read");
}, 0);

fs.readFile(__filename,()=>
{
    console.log("file has been read");
})
