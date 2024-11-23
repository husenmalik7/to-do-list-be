const express = require('express');
const controller = require('../controllers/checklistController');
const auth = require('../helper/auth');

const Router = express.Router();

Router.get('/checklist', auth.checkToken, controller.getAllChecklist);
Router.post('/checklist', auth.checkToken, controller.postChecklist);
Router.delete('/checklist/:id', auth.checkToken, controller.deleteChecklist);

module.exports = Router;
