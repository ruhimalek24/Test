const { Router } = require('express');
const isLoggedIn  = require('../middleware/middleware');
const { data } = require('../controllers/task10');

const app = Router();

app.get('/',isLoggedIn,data);

module.exports = app;