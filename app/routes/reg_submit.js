const {Router} = require('express');
const { reg_submit } = require('../controllers/submit');
const app = Router();


app.post('/submit',reg_submit );

module.exports = app;