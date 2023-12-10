const BookRepository = require('../repository/book-repository');

class BookService{
    constructor(){
        this.bookRepository = new BookRepository();
    }

    async create(data){
        try {
            const book = await this.bookRepository.create(data);
            return book;
        } catch (error) {
            console.log("Somthing went wrong in the service layer");
            throw error;
        }
    }
}

module.exports = BookService;