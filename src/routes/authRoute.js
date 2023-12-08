const express = require('express');

const {signUp} = require('../controllers/user-controller');
const authRouter = express.Router();

authRouter.route('/signup').post(signUp);

module.exports = authRouter;
