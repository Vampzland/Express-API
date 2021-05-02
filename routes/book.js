const express = require('express')
const {Book, validateBook, validateTitle} = require('../models/book')
const mongoose = require('mongoose')

const router = express.Router()


router.get('/books',async (req,res) =>{ 
    let book = await Book.find().sort('title')
    res.status(200).send(book)
})

router.get('/books/:id', async (req,res) => {
    const { id } = req.params
    const book = await Book.findById(id)
    if(!book) res.status(404).send('This book does not exist')
    res.status(200).send(book)
})

router.post('/books',async (req,res) => {
    const {title, isbn, author} = req.body
    const {error} = validateBook(req.body)
    if(error) res.status(400).send(error.details[0].message)
    let book = new Book({title, isbn, author})
    book = await book.save()
    res.status(201).send(book)

})

router.put('/books/:id', async (req,res) => {
    const {id} = req.params
    const {title, isbn, author} = req.body
    const {error} = validateBook(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const book = await Book.findByIdAndUpdate(id, { title, isbn, author },{
        new: true
    })
    if(!book) res.status(404).send('This book does not exist')
    res.status(201).send(book)

})

router. patch('/books/:id', async (req, res) => {
    const {id} = req.params
    const {title} = req.body
    const {error} = validateTitle(title)
    if(error) res.status(400).send(error.details[0].message)
    const book = await Book.findByIdAndUpdate(id, {title} , {new : true})
    if(!book) res.status(404).send('This book does not exist')
    res.status(201).send(book)
})
router.delete('/books/:id', async (req,res) => {
    const {id} = req.params
    const book = await Book.findByIdAndRemove(id)
    if(!book) res.status(404).send('This book does not exist')
    res.status(200).send(book)
})

module.exports = router