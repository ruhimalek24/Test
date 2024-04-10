const con = require('../connection');


function display(req,res){

    var page = req.query.page;

    if (!page) {
        page = 1;
    }
    else if (page < 1) {
        page = 1;
        console.log(page);
    }

    console.log(page);
    var rows = page * 20 - 20;

    var sql1 = `select student_master.fname ,student_master.student_id, sum(exam_table.practical) as practical, sum(exam_table.theory) as theory from student_master join exam_table on student_master.student_id = exam_table.student_id where exam_table.exam_type = 1 group by exam_table.student_id LIMIT ${rows},20;`;

    var sql2 = `select student_master.fname ,student_master.student_id, sum(exam_table.practical) as practical, sum(exam_table.theory) as theory from student_master join exam_table on student_master.student_id = exam_table.student_id where exam_table.exam_type = 2 group by exam_table.student_id LIMIT ${rows},20;`;

    var sql3 = `select student_master.fname ,student_master.student_id, sum(exam_table.practical) as practical, sum(exam_table.theory) as theory from student_master join exam_table on student_master.student_id = exam_table.student_id where exam_table.exam_type = 3 group by exam_table.student_id LIMIT ${rows},20;`;

    con.query(`${sql1} ${sql2} ${sql3}`, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            res.render('task9', { result, page: page });
        }
    })
};

function data(req,res){


    var page = req.query.page;
    var id = req.query.id;

    if (!page) {
        page = 1;
    }
    else if (page < 1) {
        page = 1;
        console.log(page);
    }
    var ex1 = `select student_master.fname , student_master.student_id , exam_table.subject_id, exam_table.theory , exam_table.practical from student_master join exam_table on student_master.student_id = exam_table.student_id where exam_table.student_id = ${id} and exam_table.exam_type = 1;`;
    var ex2 = `select student_master.fname , student_master.student_id , exam_table.subject_id, exam_table.theory , exam_table.practical from student_master join exam_table on student_master.student_id = exam_table.student_id where exam_table.student_id = ${id} and exam_table.exam_type = 2;`;
    var ex3 = `select student_master.fname , student_master.student_id ,exam_table.subject_id, exam_table.theory , exam_table.practical from student_master join exam_table on student_master.student_id = exam_table.student_id where exam_table.student_id = ${id} and exam_table.exam_type = 3;`;


    con.query(`${ex1} ${ex2} ${ex3}`, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            // console.log(result);
            res.render('task9_1', { result, page: page, id: id });
        }

    })
};

module.exports = {display , data};