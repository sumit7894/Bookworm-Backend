const mongoose = require('mongoose');

const commentSchema  = new mongoose.Schema({
    comment:{
        type:String,
    }
});

module.exports = commentSchema;