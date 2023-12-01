const fs = require("fs")
const readableStream = fs.createReadStream('./docs/big.txt',
{
    encoding:"utf-8",
    highWaterMark: 2
})

const writableStream = fs.createWriteStream('./docs/big2.txt')


readableStream.on("data",(chunk)=>
{
    console.log(chunk)
    writableStream.write(chunk)
})