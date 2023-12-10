const express = require('express');

const {create , getAllBooks} = require('../controllers/book-controller');

const bookRouter = express.Router();

bookRouter.route('/add').post(create);
bookRouter.route('/cards').get(getAllBooks)

module.exports = bookRouter;