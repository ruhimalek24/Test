const con = require('../connection');
const jwt = require('jsonwebtoken');
const express = require('express');

const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());


function log(req, res){
    const user = req.body.user_email_login;
    const password = req.body.pswrd_login;
    console.log(user);
    console.log(password);

    var secretKey = 'eSpaekBiz#24';
    console.log(secretKey);
    const sckey = jwt.sign({ email: user }, secretKey);
    console.log(sckey);

    const log = `select user_id  , email from registration.users_table where email = '${user}' and pswrd = '${password}' and active_status = 1; `;
    con.query(log, (err, result) => {
        if (err) throw err;
        else {
            if (result.length === 0) {
                var str = 'Unregistered Email!';
                res.render('login', { result: result, user: user, str: str });
            }
            else {
                res.cookie('Token', sckey).redirect('/home');
            }
        }
    })


};
module.exports = { log };