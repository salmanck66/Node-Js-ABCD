const eventEmitter = require("events")

const emitter =new eventEmitter()

emitter.on('order-pizza',(size,topping)=>
{
    console.log(`your ${size} pizza with ${topping} has been cooked`)
})
emitter.on('order-pizza',(size)=>
{
    if(size === "large")
    {
        console.log(`Serving Complimentey drink `)
    }
    
})
console.log("do work before everything");
emitter.emit('order-pizza',"large","mushroom")
