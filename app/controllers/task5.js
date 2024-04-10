const con = require('../connection');

function display (req,res){
    var sql = `SELECT * FROM  student_master LIMIT 100;`;
    con.query(`${sql}`, (err, result, fields) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('task5', { result: result, head: Object.values(fields) });
        }
    })
};

var symbols = {
    "_": `student_master.student_id`,
    "^": `student_master.fname`,
    "$": `student_master.lname`,
    ":": `student_master.age`,
    "(": `student_master.city`,
    "}": `student_master.email`,
    "[": `student_master.semester`,
};

function data (req,res){
    var query = req.body.text;
    var start = -1;
    var result = {};
    var current = '';
    for (let i = 0; i < query.length; i++) {
        var char = query.charAt(i);

        if (Object.keys(symbols).includes(char)) {
            if (start !== -1) {
                var value = query.substring(start + 1, i);
                result[symbols[current]] = value;
            }
            start = i;
            current = char;
        }
    }
    if (start !== -1) {
        value = query.substring(start + 1);
        result[symbols[current]] = value;
    }

    var sql = `SELECT * FROM student_master WHERE`;
    var condition = [];
    for (var i in result) {
        var value = result[i];
        // console.log(isNaN(value));
        if (isNaN(value)) {
            condition.push(` ${i} = '${value}'`);
        }
        else {
            condition.push(` ${i} = ${value}`);
        }
    }
    sql += condition.join(' AND');
    //    console.log(sql);
    con.query(sql, (err, result, fields) => {
        if (err) {
            console.log(err);
        }
        else {
            result = JSON.parse(JSON.stringify(result));
            res.render('task5', { result: result, sql: sql, head: Object.values(fields), query: query });
        }
    })
};

module.exports = {display , data};
