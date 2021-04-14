const lib = require('../models/book')

describe('verifyBookName', ()=>{
 it('Should return the book name',()=>{
     const result = lib.verify('Book 1')
     expect(result).toBe('The book name is: Book 1')
 })
})