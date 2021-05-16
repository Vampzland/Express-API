const { Book } = require('../models/book')
const { validateTitle, validateBook } = require('../utils/bookValidation')

async function getAllBooks(req, res) {
  const book = await Book.find().sort('title')
  res.status(200).send(book)
}
async function getBookById(req, res) {
  const { id } = req.params
  const book = await Book.findById(id)
  if (!book) res.status(404).send('This book does not exist')
  res.status(200).send(book)
}

async function addNewBook(req, res) {
  const { title, isbn, author } = req.body
  const { error } = validateBook(req.body)
  if (error) res.status(400).send(error.details[0].message)
  let book = new Book({ title, isbn, author })
  book = await book.save()
  res.status(201).send(book)
}
async function updateBookById(req, res) {
  const { id } = req.params
  const { title, isbn, author } = req.body
  const { error } = validateBook(req.body)
  if (error) res.status(400).send(error.details[0].message)
  const book = await Book.findByIdAndUpdate(id, { title, isbn, author }, {
    new: true,
  })
  if (!book) res.status(404).send('This book does not exist')
  res.status(201).send(book)
}
async function modifyTheBookTitle(req, res) {
  const { id } = req.params
  const { title } = req.body
  const { error } = validateTitle(title)
  if (error) res.status(400).send(error.details[0].message)
  const book = await Book.findByIdAndUpdate(id, { title }, { new: true })
  if (!book) res.status(404).send('This book does not exist')
  res.status(201).send(book)
}

async function deleteBookById(req, res) {
  const { id } = req.params
  const book = await Book.findByIdAndRemove(id)
  if (!book) res.status(404).send('This book does not exist')
  res.status(200).send(book)
}

module.exports = {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBookById,
  modifyTheBookTitle,
  deleteBookById,
}
