const { Router } = require('express');
const isLoggedIn  = require('../middleware/middleware');
const { display , execute } = require('../controllers/task7');

const app = Router();


app.get('/',isLoggedIn,display);
app.post('/',isLoggedIn,execute);

module.exports = app;
