

setTimeout(()=>
{
    console.log("Timer Call 1");
    process.nextTick(()=>
    console.log(("Inside Timer Nextick")))
},0)
setTimeout(()=>
{
    console.log("Timer Call 2");
},0)


process.nextTick(()=>
{
    console.log("nexttick 1");
})
process.nextTick(()=>
{
    console.log("nexttick 2");

    process.nextTick(()=>
        {
        console.log("nexttick inner 1");
            process.nextTick(()=>
            {
            console.log("nexttick inner 2");
            })
        })
})
process.nextTick(()=>
{
    console.log("nexttick 3");
})