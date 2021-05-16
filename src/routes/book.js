const express = require('express')
const BookRoutes = require('../controllers/bookManagement')

const router = express.Router()

router.get('/books', BookRoutes.getAllBooks)

router.get('/books/:id', BookRoutes.getBookById)

router.post('/books', BookRoutes.addNewBook)

router.put('/books/:id', BookRoutes.updateBookById)

router.patch('/books/:id', BookRoutes.modifyTheBookTitle)

router.delete('/books/:id', BookRoutes.deleteBookById)

module.exports = router
