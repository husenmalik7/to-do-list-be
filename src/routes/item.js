const express = require('express');
const controller = require('../controllers/itemController');
const auth = require('../helper/auth');

const Router = express.Router();

Router.get('/checklist/:checklistId/item', auth.checkToken, controller.getAllItem);
Router.post('/checklist/:checklistId/item', auth.checkToken, controller.postItem);

Router.get('/checklist/:checklistId/item/:itemId', auth.checkToken, controller.getItemById);
Router.delete('/checklist/:checklistId/item/:itemId', auth.checkToken, controller.deleteItem);

Router.put('/checklist/:checklistId/item/:itemId', auth.checkToken, controller.changeItemStatus);
Router.put('/checklist/:checklistId/item/rename/:itemId', auth.checkToken, controller.changeItemName);

module.exports = Router;
