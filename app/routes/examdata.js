const { Router } = require('express');
const isLoggedIn  = require('../middleware/middleware');
const { display , data } = require('../controllers/task9');

const app = Router();


app.get('/',isLoggedIn,display);
app.get('/details',isLoggedIn,data);

module.exports = app;
