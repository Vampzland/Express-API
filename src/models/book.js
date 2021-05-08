const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
  },
  isbn: {
    type: String,
    required: true,
    maxlength: 13,
  },
  author: {
    type: String,
    required: true,
  },
})

const Book = mongoose.model('Book', bookSchema)

module.exports = {
  Book,
}
