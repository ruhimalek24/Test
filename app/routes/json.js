const { Router } = require('express');
const isLoggedIn  = require('../middleware/middleware');
const { ap , dt } = require('../controllers/task4');
const app = Router();

app.get('/', isLoggedIn,ap);
app.get('/:id',isLoggedIn,dt);



module.exports = app;