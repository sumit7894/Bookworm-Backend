const mongoose = require('mongoose')
const commentSchema = require('./commentsSchema');
const bookSchema = new mongoose.Schema({
    BookName:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    description:{

    },
    tags:{
        type:Array,
        required:true   
    },
    upvotes:{
        type:Number,
        required:true,
        default: 0,
    },
    comments:[commentSchema]
},{timestamps:true})

const Book = mongoose.model('Book',bookSchema);

module.exports = Book;