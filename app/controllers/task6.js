const con = require('../connection');



function display(req,res){
    res.render('task6');
};

function time(req, res) {
    var timez = req.body.timezone;

    let date = new Date();

    let result = date.toLocaleString("en-US", {
        timeZone: timez
    });

    
    res.render('task6_1', { result: result, timez: timez });
   
};

module.exports = {display , time};