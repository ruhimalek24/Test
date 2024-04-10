const con = require('../connection');

function data(req, res) {
    var page = req.query.page;
    var obf = req.query.obf;
    var order = req.query.order;

    if (!obf) {
        obf = 'student_id';
    }
    if (!order) {
        order = 'asc';
    }
    if (!page) {
        page = 1;
    }
    else if (page < 1) {
        page = 1;
        console.log(page);
    }
    console.log(page);
    console.log(obf);
    console.log(order);
    var rows = page * 20 - 20;
    var query = `SELECT * FROM student_master ORDER BY ${obf} ${order} LIMIT ${rows},20`;
    console.log(query);

    con.query(query, (err, result) => {
        if (err) {
            console.log('SOMETHING WENT WRONG');
            console.log(err);
            return;
        }
        else {
            res.render('task10', { data: result, page: page, obf: obf, order: order });
        }
    })
};

module.exports = { data };



