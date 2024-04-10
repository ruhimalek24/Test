const { Router } = require('express');
const isLoggedIn  = require('../middleware/middleware');

const app = Router();

app.get('/',isLoggedIn,(req,res) =>{
    res.render('task2');
});

module.exports = app;