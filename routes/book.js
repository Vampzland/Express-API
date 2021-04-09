const express = require('express')

const router = express.Router()
const books = [
    {id:1, name:'Book 1'},
    {id:2, name:'Book 2'},
    {id:3, name:'Book 3'}
]


router.get('/books',(req,res)=>{
    res.status(200).send([1,2,3])
})

module.exports = router