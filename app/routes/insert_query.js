const { Router } = require('express');
const isLoggedIn  = require('../middleware/middleware');
const { display , data } = require('../controllers/task11');

const app = Router();


app.get('/',isLoggedIn,display);
app.post('/',isLoggedIn,data);

module.exports = app;
