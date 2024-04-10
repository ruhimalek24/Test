const express = require('express');


const login = require('./routes/login');
const log = require('./routes/log');
const reg = require('./routes/registration');
const home = require('./routes/home');
const frgtpswrd = require('./routes/forgotpswrd');
const reg_submit = require('./routes/reg_submit');
const verify = require('./routes/verify');
const task1 = require('./routes/jsEvents');
const task2 = require('./routes/dynamic');
const task3 = require('./routes/kukuCube');
const task4 = require('./routes/json');
const task5 = require('./routes/delimiterSearch');
const task6 = require('./routes/timezoneConverter');
const task7 = require('./routes/searchvia_multiparams');
const task8 = require('./routes/attandance');
const task9 = require('./routes/examdata');
const task10 = require('./routes/studentdata');
const task11 = require('./routes/insert_query');
const task12 = require('./routes/form');
const submit = require('./controllers/submit');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

app.use('/',login);
app.use('/login',login);
app.use('/',log);
app.use('/registration',reg);
app.use('/',home);
app.use('/forgotpswrd',frgtpswrd);
app.use('/',reg_submit);
app.use('/verify',verify);
app.use('/task1',task1);
app.use('/task2',task2);
app.use('/task3',task3);
app.use('/data_api',task4);
app.use('/details_api',task4);
app.use('/task5',task5);
app.use('/execute',task5);
app.use('/task6',task6);
app.use('/6_1',task6);
app.use('/task7',task7);
app.use('/display',task7);
app.use('/task8',task8);
app.use('/task9',task9);
app.use('/task9_1',task9);
app.use('/task10',task10);
// app.use('/task10',task10);
app.use('/task11',task11);
app.use('/task11',task11);
app.use('/task12',task12);
app.use('/',task12);
app.use('/',task12);
app.use('/',task12);
app.use('/',task12);


app.listen(3500,()=>{
    console.log('SERVER LISTENS');
});