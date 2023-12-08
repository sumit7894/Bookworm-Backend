const mongoose = require('mongoose');
const {MONGODB_URL} = require('./serverConfig')
const connect =()=>{
    console.log("here is url",MONGODB_URL)
    mongoose.connect(MONGODB_URL);
}

module.exports = connect;