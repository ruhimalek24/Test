const { Router } = require('express');
const isLoggedIn  = require('../middleware/middleware');

const app = Router();


app.get('/home', isLoggedIn,(req,res)=>{
    res.render('home');
});

// app.post('/home',log);
module.exports = app;