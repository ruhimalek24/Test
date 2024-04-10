var mysql = require('mysql');
require('dotenv').config();

const con = mysql.createConnection({
    host : process.env.host,
    user : process.env.user,
    password : process.env.password,
    database : 'all_task',
    multipleStatements: true
});

con.connect((err) =>{
    if(err) throw err;
    else{
        console.log('DATABASE CONNECTED');
    }
});

module.exports = con;