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
    if(!book) res.status(404).send('This book does not exist')
    res.status(200).send(book)
})

router.post('/books',(req,res)=>{
    const book = {
        id: books.length + 1,
        name: req.body.name
    }

    books.push(book)
    res.send(book)

})

router.put('/books/:id', (req,res)=>{
    const {id} = req.params
    const book = books.find(book=> book.id ===parseInt(id))
    if(!book) res.status(404).send('This book does not exist')
    book.name = req.body.name
    res.send(book)

})

module.exports = router