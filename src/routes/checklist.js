const express = require('express');
const controller = require('../controllers/checklistController');
const auth = require('../helper/auth');

const Router = express.Router();

Router.get('/checklist', auth.checkToken, controller.getAllChecklist);
Router.post('/checklist', auth.checkToken, controller.postChecklist);

module.exports = Router;
