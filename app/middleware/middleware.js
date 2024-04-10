const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());



const isLoggedIn = (req,res,next) => {
    var secretKey = 'eSpaekBiz#24';
    // console.log(req.headers.cookie.split('=')[1]);
    var token = req.headers.cookie.split('=')[1];
    if(!token){
        req.send('UNAUTHORIZED REQUEST !');
    }
    console.log('12345',token);
    console.log(req.cookies);
    if(!token){
        return res.send('Unauthorized token');
    }
    try{
        console.log(token);
        const decode = jwt.verify(token,secretKey);
        req.user =  decode;
        next();
    }
    catch(err){
        return res.json({message : 'Invalid Token'});
    }
    
}

module.exports =  isLoggedIn ;