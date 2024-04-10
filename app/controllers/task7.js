const con = require('../connection');

function display(req, res){

    var id = req.body.txt;
    var sql = `SELECT * FROM  Student_master.Student_table LIMIT 100    ;`;
    con.query(`${sql}`, (err, result, fields) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('task7', { result: result, head: Object.values(fields), id: id });
        }
    })

};

function execute(req, res){
    var id = req.body.txt;
    var name = req.body.txt1;
    var city = req.body.txt2;
    var andOr = req.body.txt3;
    // console.log(id);

    var sql = `SELECT * FROM  Student_master.Student_table WHERE 1=1 AND `

    if (id) {
        let conc = `id = '${id}'`;
        sql += conc;
        console.log(sql);
    }
    if (name) {
        let conc = `${andOr} firstname = '${name}'`;
        sql += conc;
    }
    if (city) {
        let conc = `${andOr} city = '${city}'`;
        sql += conc;
    }

    con.query(`${sql}`, (err, result, fields) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.render('task7', { result: result, head: Object.values(fields), id: id });
        }
    })
};

module.exports = {display , execute};