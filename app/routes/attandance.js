const { Router } = require('express');
const isLoggedIn  = require('../middleware/middleware');
const {att} = require('../controllers/task8');
// const islogged = require('../middleware/middleware');


const app = Router();


app.get('/',isLoggedIn,att);


module.exports = app;
