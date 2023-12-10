const BookService = require('../services/book-service');
const {StatusCodes} = require('http-status-codes');
const bookService = new BookService();

const create = async(req,res)=>{
    try {
        console.log("here is response",req.body);
        const response = await bookService.create({
            BookName:req.body.name,
            logo:req.body.logo,
            description:req.body.description,
            tags:req.body.tags,
            upvotes: req.body.upvotes
        })
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Successfully added the book",
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:error.message,
            data:{},
            err:error
        })
    }
}
module.exports = {
    create
}