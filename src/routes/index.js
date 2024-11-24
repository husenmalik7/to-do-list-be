const express = require('express');
const user = require('./user');
const checklist = require('./checklist');
const item = require('./item');

const Router = express.Router();

Router.use('/api', user);
Router.use('/api', checklist);
Router.use('/api', item);

module.exports = Router;
