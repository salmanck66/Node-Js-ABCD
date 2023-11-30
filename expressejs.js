const express = require('express')
const app = express()


app.set('view engine','ejs')
app.listen(3002)
app.use(express.static('docs'))
app.use(express.urlencoded({extended:true}))
// app.use((req,res)=>
// {
//     console.log("url",req.url);
//     console.log("path",req.path);
//     console.log("hostname",req.hostname);
// })
app.get('/',(req,res)=>
{
    const blogs = [
        {
            title : 'Fight Club',snippet :"lorem ipsum sam sre fa"
            
        },
        {
            title : 'Dooms Day',snippet :"lorem ipsum sam sre fa"
        },
        {
            title : 'Frie Pans',snippet :"lorem ipsum sam sre fa"
        }
    ]
    res.render('index2',{ title : "Home",blogs})
})
app.get('/about',(req,res)=>
{
    res.render('about2',{ title : "About"})
})
app.get('/blog/create',(req,res)=>
{
    res.render('createblog',{ title : "Create Blog"})
})
app.post('/blogs', (req, res) => {
        console.log(req.body);
});

app.use((req,res)=>
{
    res.status(404).render('error',{ title : "Error"})
})