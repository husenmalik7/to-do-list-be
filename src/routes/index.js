const express = require('express');
const user = require('./user');

const Router = express.Router();

Router.use('/api', user);

module.exports = Router;
