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
    console.log("nexttick ");
})