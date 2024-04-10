const {Router} = require('express');
const { log } = require('../controllers/login');
// const isLoggedIn  = require('../middleware/middleware');
const app = Router();


app.post('/home',log);

module.exports = app;