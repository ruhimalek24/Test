const con = require('../connection');

function att(req,res){
    var page = req.query.page;
    var month = req.query.month;
    if (month == undefined || isNaN(month)) month = 12;
    console.log(month);

    if (!page) {
        page = 1;
    }
    else if (page < 1) {
        page = 1;
        console.log(page);
    }
    var rows = page * 20 - 20;
    // var query = `SELECT * FROM attendance_table LIMIT ${rows},200`;
    var query = `select student_master.student_id , student_master.fname , count(attendance_table.present_day) as total_attendance from student_master join attendance_table on student_master.student_id = attendance_table.student_id where attendance_table.present_day = 1 and month(attendance_table.date) = ${month} group by attendance_table.student_id LIMIT ${rows},20 ;`

    con.query(query, (err, result) => {
        if (err) {
            console.log('SOMETHING WENT WRONG');
            console.log(err);
        }
        else {
            res.render('task8', { data: result, page: page, month: month });
        }

    })
};

module.exports = {att};