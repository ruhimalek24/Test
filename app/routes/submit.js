const {Router} = require('express');
const isLoggedIn  = require('../middleware/middleware');
const {time} = require('../controllers/task6');
const app = Router();


app.post('/submit',isLoggedIn,time);

module.exports = app;