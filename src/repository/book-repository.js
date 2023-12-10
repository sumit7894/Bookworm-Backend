const Book = require('../models/book');

class BookRepository
{
    async create(data)
    {
        try {
            const book = await Book.create(data);
            return book;
        } catch (error) {
            console.log("Somthing went wrong in the book creation");
            throw error;
        }
    }
    async get(){
        try {
            const book = await Book.find();
            return book;
        } catch (error) {
            console.log("Somthing went wrong in the repo layer")
            throw error;
        }
    }
}
module.exports = BookRepository;