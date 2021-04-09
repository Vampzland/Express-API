const express = require('express')
const bodyparser = require('body-parser')
const book = require('./routes/book')

const app = express()
const port = 5000

app.use(bodyparser.json())

app.use('/api/', book)

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})

