const express = require('express');

const {create} = require('../controllers/book-controller');

const bookRouter = express.Router();

bookRouter.route('/add').post(create);

module.exports = bookRouter;