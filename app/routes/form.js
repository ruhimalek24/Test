const { Router } = require('express');
const { home , form , register , update , fresult} = require('../controllers/task12');

const app = Router();


app.get('/',home);
app.get('/form',form);
app.post('/form',register);
app.get('/update',update);
app.post('/ans',fresult);

module.exports = app;
