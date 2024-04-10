const { Router } = require('express');
// const { log } = require('../controllers/login');
const app = Router();

app.get('/:id',(req,res)=>{
    console.log(req.params);
    res.render('verify');
});

// app.post('/home',log);
module.exports = app;