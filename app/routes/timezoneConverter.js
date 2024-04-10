const {Router} = require('express');
const isLoggedIn  = require('../middleware/middleware');
const {display , time} = require('../controllers/task6');
const app = Router();

app.get('/',isLoggedIn,display);
app.post('/',isLoggedIn,time);

module.exports = app;
