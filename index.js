const express = require('express')
const bodyparser = require('body-parser')
const book = require('./src/routes/book')
const mongoose = require('mongoose')

const app = express()
const port = 5000
mongoose.connect('mongodb://localhost/narouBookstore',{useNewUrlParser: true})
.then(() => console.log('Connected to the db...'))
.catch(err => console.log(`Couldnt connect to the db:  ${err}`))

app.use(bodyparser.json())

app.use('/api/', book)

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})

