const { error } = require("console")
const fs = require("fs/promises")
//promised fs

// fs.readFile('./docs/big.txt','utf-8')
// .then(data=>console.log(data))
// .catch(error)
// console.log("Asysnc")

//async fs
// async function readFile()
// {
//     try
//     {
//         const data =await fs.readFile('./docs/big.txt','utf-8')
//         console.log(data)
//     }
//     catch(err)
//     {
//         console.log(err)
//     }
// }

// readFile()