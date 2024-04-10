const { Router } = require('express');
const isLoggedIn  = require('../middleware/middleware');
const app = Router();

app.get('/',isLoggedIn,(req,res) =>{
    res.render('task1');
});

module.exports = app;