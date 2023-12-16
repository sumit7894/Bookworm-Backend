const Book = require('../models/book');

class BookRepository
{
    async create(data)
    {
        try {
            const {tags} = data;
            const commaSeprated = tags.split(/[,]+/);
            data.tags = commaSeprated;
            const book = await Book.create(data);
            return book;
        } catch (error) {
            console.log("Somthing went wrong in the book creation");
            throw error;
        }
    }
    async get(sortBy,genre){
        try {
            const filter ={};
            if(genre){
                filter.tags = {$in: genre};
            }
            const book = await Book.find(filter).sort({[sortBy]:-1});
            return book;
        } catch (error) {
            console.log("Somthing went wrong in the repo layer")
            throw error;
        }
    }
    async upvote(bookId){
        try {
            const updatedUpvote = await Book.findByIdAndUpdate(
                bookId,
                {$inc:{upvotes:1}},
                {new:true}
            );
            return updatedUpvote;
        } catch (error) {
            console.log("Somthing went wrong in repo layer");
            throw error;
        }
    }
    async addComment(data){
        try {
            const book = await Book.findById(data.id);
            book.comments.push(data.comment);
            const count = await Book.findByIdAndUpdate(data.id,
            {$inc:{commentCount:1}},
            {new:true}
            )
            await book.save();
            
            return book;
        } catch (error) {
            console.log("Somthing went wrong in the repo layer");
            throw error;
        }
    }
}
module.exports = BookRepository;