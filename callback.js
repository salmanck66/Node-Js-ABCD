function greet(name)
{
    console.log(`hello ${name}`)
}
function greetme(greetfn)
{
    const name  = "salman"
    greetfn(name)
}

greetme(greet)