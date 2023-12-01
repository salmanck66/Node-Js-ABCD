
const fs = require("fs")

fs.readFile(__filename,()=>
{
    console.log("file has been read");//3
    setImmediate(()=>
        {
        console.log("this is insode set immediate");
        })//5
    process.nextTick(()=>
        {
        console.log("nexttick inside ");//4
})

})
process.nextTick(()=>
{
    console.log("nexttick ");
})//1

setTimeout(() => {
    console.log("Time Out Has Been Read");
}, 0);//2
setImmediate(()=>
{
    console.log("this is set immediate");
})//3
