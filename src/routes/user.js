const express = require('express');
const controller = require('../controllers/userController');
const auth = require('../helper/auth');

const Router = express.Router();

Router.post('/login', controller.loginUser);
Router.post('/register', controller.registerUser);
Router.get('/:id', auth.checkToken, controller.getUserById);

module.exports = Router;
