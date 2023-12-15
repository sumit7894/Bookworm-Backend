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

    async getAllBooks(){
        try {

            const book = await this.bookRepository.get();
            return book;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async upvote(bookId){
        try {
            const updateUpvote = await this.bookRepository.upvote(bookId);
            return updateUpvote;
        } catch (error) {
            console.log("Somthing went wrong in the repo layer");
            throw error;
        }
    }
    async addComment(data){
        console.log(data);
        try {
            const comment = await this.bookRepository.addComment(data);
            return comment;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = BookService;