const { Router } = require('express');

const app = Router();

app.get('/',(req,res)=>{
    res.render('forgotpswrd');
});


module.exports = app;