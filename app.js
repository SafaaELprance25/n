const express = require('express')


const app = express()



const port = 3000


const path = require('path')
const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))
app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/products',(req,res)=>{
    if(!req.query.country){
        return res.send({
            error:'You must provide address'
        })
    }
    news(req.query.country,req.query.category,(error,data)=>{

        if(error){
           return res.send({error})
        }
        res.send({
           data

        })
    })
})
app.get('*',(req,res)=>{
    res.render('404page',{
        title:"ERROR!! 404 Page Not Found"
    })
})const port = 3500;
app.listen(port,()=>{
    console.log('Listening to port')
})
