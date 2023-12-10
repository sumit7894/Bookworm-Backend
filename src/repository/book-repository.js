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
    async get(bookName){
        try {
            const book = await Book.findOne({name: bookName});
            return book;
        } catch (error) {
            console.log("Somthing went wrong in the repo layer")
            throw error;
        }
    }
}
module.exports = BookRepository;