const mongoose = require('mongoose')
const Joi = require('joi')

const bookSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
        minlength : 5,
    },
    isbn: {
        type : String,
        required : true,
        maxlength : 13
    },
    author: {
        type : String,
        required: true
    }
})

const Book = mongoose.model('Book', bookSchema)
function  validateBook(book) {
    const schema = {
        title: Joi.string().min(5).required(),
        isbn: Joi.string().min(13).max(13).required(),
        author: Joi.string().min(5).required()
    }
    return Joi.validate(book, schema)
}

const verify = (name) => {
  return `The book name is: ${name}`
}




module.exports = {verify, Book, validateBook}