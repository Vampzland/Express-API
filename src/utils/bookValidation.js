const Joi = require('joi')

function validateTitle(title) {
  const schema = {
    title: Joi.string().min(5).required(),
  }
  return Joi.validate({ title }, schema)
}
function validateBook(book) {
  const schema = {
    title: Joi.string().min(5).required(),
    isbn: Joi.string().min(13).max(13).required(),
    author: Joi.string().min(5).required(),
  }
  return Joi.validate(book, schema)
}

module.exports = {
  validateBook,
  validateTitle,
}
