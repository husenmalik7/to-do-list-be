const express = require('express');
const controller = require('../controllers/itemController');
const auth = require('../helper/auth');

const Router = express.Router();

Router.get('/checklist/:checklistId/item', auth.checkToken, controller.getAllItem);
Router.post('/checklist/:checklistId/item', auth.checkToken, controller.postItem);

module.exports = Router;
