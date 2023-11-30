

const fs = require("fs")

/// read file
// const file = fs.readFile('./docs/text.txt','utf-8',(err,data)=>
// {
//     if(err)
//     {
//         console.log("Theres error");
//         return
//     }
//     if(data)
//     {
//         console.log(data);
//     }

// })
// console.log("file read")

//writefile

// const file = fs.writeFile('./docs/text.txt','poliyee',(err)=>
// {
//     if(err)
//     {
//         console.log("theres an error");
//     }
//     else{
//         console.log("file was written");
//         fs.readFile('./docs/text.txt','utf-8',(err,data)=>
//         {
//             if(data)
//             {
//                 console.log(data)
//             }else
//             {
//                 console.log("error has been occured");
//             }
//         })
//     }
// })

// fs.readFile('./docs/text.txt','utf-8',(err,data)=>
//     {
//         console.log(data)
//     })

//directories
// fs.mkdir('./assets',(err)=>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log("work completed successfully");
//     }
// })


// Creating and deleting an directory
// if(!fs.existsSync('./assets'))
// {
//     fs.mkdir('./assets',(err)=>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log("Folder Created");
//     }
// })
// }else
// {
//     fs.rmdir('./assets',(err)=>
//     {
//         if(err)
//         {
//             console.log(err);
//         }else
//         {
//             console.log();
//         }
//     })
// }

//deleting files

// if(fs.existsSync('./docs/text1.txt'))
// {
//     fs.unlink('./docs/text1.txt',(err)=>{{
//         if(err)
//         {
//             console.log(err)
//         }
//         console.log('file has been deleted')
//     }})
// }

/// streams read and write

// const readStream = fs.createReadStream('./docs/big.txt',{encoding :'utf-8'})
// const writeStream = fs.createWriteStream('./docs/big4 .txt')
// readStream.on('data',(chunk)=>
// {
//     writeStream.write("New Chunk")
//     writeStream.write(chunk)
// })

//piping easy way to read and write
// const readStream = fs.createReadStream('./docs/big.txt',{encoding :'utf-8'})
// const writeStream = fs.createWriteStream('./docs/big4 .txt')
// readStream.pipe(writeStream)