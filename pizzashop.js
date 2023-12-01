const fs  = require("fs")
fs.writeFile("./docs/big.txt"," hello",{flag: "a"},(err)=>
{
    if(err)
    {
        console.log("no error");
    }
})