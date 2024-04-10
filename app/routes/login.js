const { Router } = require('express');

const app = Router();

app.get('/',(req,res)=>{
    res.render('login');
});

module.exports = app;