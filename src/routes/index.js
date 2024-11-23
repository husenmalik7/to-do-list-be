const express = require('express');
const user = require('./user');
const checklist = require('./checklist');

const Router = express.Router();

Router.use('/api', user);
Router.use('/api', checklist);

module.exports = Router;
