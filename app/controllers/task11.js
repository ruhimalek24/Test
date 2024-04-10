const con = require('../connection');

function display(req,res){

    var page = req.query.page;
    var query = req.body.text;

    console.log(page);
    res.render('task11', { page: page, query: query });

};


function data(req,res){

    var query = req.body.text;

    var l = ` LIMIT 0,100;`;
    query += l;
    con.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.send('Re-check inserted row !');
        }
        else {
            console.log(query);
            console.log('Query executed');
            res.render('task11', { result: result, head: Object.keys(result[0]), query: query });

        }
    })

};

module.exports = {display , data};
