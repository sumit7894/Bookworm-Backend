const { default: mongoose } = require('mongoose');
const BookService = require('../services/book-service');
const {StatusCodes} = require('http-status-codes');
const bookService = new BookService();

const create = async(req,res)=>{
    try {
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
const getAllBooks = async(req,res)=>{
    try {
        const response = await bookService.getAllBooks();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Fetched all the users",
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:true,
            message:error.message,
            data:{},
            err:error
        })
    }
}
const upvote = async(req,res)=>{
    try {
        const response = await bookService.upvote({
            _id:req.body._id
        });
        return res.status(StatusCodes.OK).json({
            succes:true,
            message:"Successfully done upvote",
            data:response.upvotes,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:true,
            message:error.message,
            data:{},
            err:error
        })
    }
}
const addComment = async(req,res)=>{
    try {
        const response = await bookService.addComment({
            id:req.body.id,
            comment:req.body.comment
        })
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Successfully added the comment",
            data:response,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:true,
            message:error.message,
            data:{},
            err:error
        })
    }
}
module.exports = {
    create,
    getAllBooks,
    upvote,
    addComment
}