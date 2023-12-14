const express = require('express');

const {create , getAllBooks, upvote} = require('../controllers/book-controller');

const bookRouter = express.Router();

bookRouter.route('/add').post(create);
bookRouter.route('/all').get(getAllBooks)
bookRouter.route('/upvote').patch(upvote);

module.exports = bookRouter;