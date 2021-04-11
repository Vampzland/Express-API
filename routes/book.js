const express = require('express')

const router = express.Router()
const books = [
    {id:1, name:'Book 1'},
    {id:2, name:'Book 2'},
    {id:3, name:'Book 3'}
]


router.get('/books',(req,res)=>{
    res.status(200).send(books)
})

router.get('/books/:id', (req,res)=>{
    const { id } = req.params
    const book = books.find(book => book.id === parseInt(id) )
    res.status(200).send(book)
})

module.exports = router