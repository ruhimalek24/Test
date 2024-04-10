const con = require('../connection');

function home(req,res){
    var id = req.body;
    res.render('task12', { id: id });
}

function form(req,res){
    res.render('form');
};


function register(req, res){
    var data = req.body;
    var id = req.body.id;
    console.log(data);
    //   --------------------------Personal Info-------------------
    const { personId, fName, lName, designation, address1, address2, email, city, mobileNo, state, gender, zipcode, relationship_status, date_of_birth, degree, board_OR_University, passingyear, percentage, courseName, companyName, designation_exp, startDate, endDate, reference_contactName, reference_mobileno, relation, prefered_location, notice_period, expected_CTC, current_CTC, deprtment, lang_id, language } = data;


    var sql = `insert into job_application.personal_info values(${personId},'${fName}','${lName}','${designation}','${address1}','${address2}','${email}','${city}','${mobileNo}','${state}','${gender}','${zipcode}','${relationship_status}','${date_of_birth}');`;

    con.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(personId);
            console.log('Basic - Record Inserted');

        }

    });

    //   -----------------------------Educational Info---------------------------


    var deg = degree.filter(x => x);
    var board = board_OR_University.filter(x => x);
    var year = passingyear.filter(x => x);
    var per = percentage.filter(x => x);
    var course = courseName.filter(x => x);

    if (deg.length === board.length && deg.length === per.length && year.length === per.length && course.length === year.length) {

        for (let i = 0; i < deg.length; i++) {
            var sql1 = `insert into job_application.educational_info (degree, board_OR_University,passingyear, percentage,courseName,personId) VALUES('${degree[i]}','${board_OR_University[i]}',${passingyear[i]},${percentage[i]},'${courseName[i]}',${personId});`;

            con.query(sql1, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(personId);
                    console.log('edu - Record Inserted');

                }
            });
        }
    }
    else {
        console.log('Insert data in proper manner !');
    }

    //    ------------------------------Experience--------------------------
    var com = companyName.filter(x => x);
    var des = designation_exp.filter(x => x);
    var start = startDate.filter(x => x);
    var end = endDate.filter(x => x);


    if (com.length === des.length && com.length === start.length && start.length === end.length) {


        for (let i = 0; i < com.length; i++) {

            var sql2 = `insert into job_application.experience (personId, companyName, designation_exp, startDate, endDate) values(${personId},'${companyName[i]}','${designation_exp[i]}','${startDate[i]}','${endDate[i]}');`;

            con.query(sql2, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(personId);
                    console.log('exp - Record Inserted');

                }
            });
        }
    }
    else {
        console.log('Insert proper data');
    }

    //  -------------------------Langugae known------------------------
    var hindi = req.body.hindi;
    var english = req.body.english;
    var gujarati = req.body.gujarati;
    console.log(hindi);

    if (language[0]) {
        var sql3 = `insert into job_application.language_known (personId, language, ability) values`;
        for (let i = 0; i < hindi.length; i++) {
            sql3 += "(" + personId + "," + "'" + 'hindi' + "'" + "," + "'" + hindi[i] + "'" + ")";
            if (i < hindi.length - 1) {
                sql3 += ",";
            }
        }

        sql3 += ';';
    }
    if (language[1]) {
        var sql4 = `insert into job_application.language_known (personId, language, ability) values`;
        for (let i = 0; i < english.length; i++) {
            sql4 += "(" + personId + "," + "'" + 'english' + "'" + "," + "'" + english[i] + "'" + ")";
            if (i < english.length - 1) {
                sql4 += ",";
            }
        }
        sql4 += ';';
    }
    if (language[2]) {
        var sql5 = `insert into job_application.language_known (personId, language, ability) values`;
        for (let i = 0; i < gujarati.length; i++) {
            sql5 += "(" + personId + "," + "'" + 'gujarati' + "'" + "," + "'" + gujarati[i] + "'" + ")";
            if (i < gujarati.length - 1) {
                sql5 += ",";
            }
        }
        sql5 += ';';
    }

    con.query(`${sql3} ${sql4} ${sql5}`, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(personId);
            console.log('Lan-Record Inserted');
        }
    });


    // ---------------------------Technology known----------------------------
    var technology = req.body.technology;
    var java = req.body.java;
    var python = req.body.python;
    var ds = req.body.ds;
    var net = req.body.net;
    var mysql = req.body.mysql;

    for (let i = 0; i < technology.length; i++) {
        if (technology[0]) {
            var sqlt1 = `insert into job_application.technology (personId, technology, skill) values`;
            for (let i = 0; i < java.length; i++) {
                sqlt1 += "(" + personId + "," + "'" + 'java' + "'" + "," + "'" + java[i] + "'" + ")";
                if (i < java.length - 1) {
                    sqlt1 += ",";
                }
            }
            sqlt1 += ';';
        }
        if (technology[1]) {
            var sqlt2 = `insert into job_application.technology (personId, technology, skill) values`;
            for (let i = 0; i < python.length; i++) {
                sqlt2 += "(" + personId + "," + "'" + 'python' + "'" + "," + "'" + python[i] + "'" + ")";
                if (i < python.length - 1) {
                    sqlt2 += ",";
                }
            }
            sqlt2 += ';';
        }
        if (technology[2]) {
            var sqlt3 = `insert into job_application.technology (personId, technology, skill) values`;
            for (let i = 0; i < ds.length; i++) {
                sqlt3 += "(" + personId + "," + "'" + 'ds' + "'" + "," + "'" + ds[i] + "'" + ")";
                if (i < ds.length - 1) {
                    sqlt3 += ",";
                }
            }
            sqlt3 += ';';
        }
        if (technology[3]) {
            var sqlt4 = `insert into job_application.technology (personId, technology, skill) values`;
            for (let i = 0; i < net.length; i++) {
                sqlt4 += "(" + personId + "," + "'" + 'net' + "'" + "," + "'" + net[i] + "'" + ")";
                if (i < net.length - 1) {
                    sqlt4 += ",";
                }
            }
            sqlt4 += ';';
        }
        if (technology[4]) {
            var sqlt5 = `insert into job_application.technology (personId, technology, skill) values`;
            for (let i = 0; i < mysql.length; i++) {
                sqlt5 += "(" + personId + "," + "'" + 'mysql' + "'" + "," + "'" + mysql[i] + "'" + ")";
                if (i < mysql.length - 1) {
                    sqlt5 += ",";
                }
            }
            sqlt5 += ';';
        }

    }

    con.query(`${sqlt1} ${sqlt2} ${sqlt3} ${sqlt4} ${sqlt5}`, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(personId);
            console.log('Tec - Record Inserted');
        }
    });


    //    ---------------------------Reference-------------------------------
    var sql3 = `INSERT INTO job_application.reference (personId, reference_contactName, reference_mobileno, relation) VALUES (${personId} , '${reference_contactName}','${reference_mobileno}','${relation}');`;
    con.query(sql3, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(personId);
            console.log('Ref - Record Inserted');

        }

    });

    //   ------------------------------Preference----------------------------------
    var result = prefered_location.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
    console.log(result);
    
    if(current_CTC === ''){
        var sql4 = `INSERT INTO job_application. preference (prefered_location, notice_period, expected_CTC, current_CTC , deprtment , personId) VALUES ('${result}' , ${notice_period},${expected_CTC},0,'${deprtment}',${personId});`;
    }
    else{
        var sql4 = `INSERT INTO job_application. preference (prefered_location, notice_period, expected_CTC, current_CTC , deprtment , personId) VALUES ('${result}' , ${notice_period},${expected_CTC},${current_CTC},'${deprtment}',${personId});`;
    }
    con.query(sql4, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(personId);
            console.log('pref - Record Inserted');

        }

    });

    // res.send('Form submitted!');
    res.render('ans', { id: id });
};
function update(req, res){

    const id = req.query.id;
    console.log(id);
    var per = `SELECT * FROM job_application.personal_info WHERE personId=${id};`;
    var edu = `SELECT * FROM job_application.educational_info WHERE personId=${id};`;
    var exp = `SELECT * FROM job_application.experience WHERE personId=${id};`;
    var ref = `SELECT * FROM job_application.reference WHERE personId=${id};`;
    var pref = `SELECT * FROM job_application.preference WHERE personId=${id};`;
    // var lan = `select language from job_application.language_known where personId = 1001;`;

    // console.log(lan);

    con.query(`${per} ${edu} ${exp} ${ref} ${pref}`, (err, result) => {
        if (err) throw err;
        else {
            res.render('update', { result: result, id : id});
            console.log(result);
        }
    })

};

function fresult(req, res){
    var data = req.body;
    // var personId = req.query.id;
    // console.log(personId);
    console.log(data);
    // const err = validateForm(data);
    const { personId,fName, lName, designation, address1, address2, email, city, mobileNo, state,
        gender, zipcode, relationship_status, date_of_birth, degree, board_OR_University, passingyear,
        percentage, courseName, companyName, designation_exp, startDate, endDate, reference_contactName,
        reference_mobileno, relation, prefered_location, notice_period, expected_CTC, current_CTC,
        deprtment, lang_id, language, ability } = data;
    // --------------------------Personal Info-------------------
    var usql1 = `UPDATE job_application.personal_info SET fName = '${fName}',lName = '${lName}',designation = '${designation}',address1 = '${address1}',address2 = '${address2}',email = '${email}',city = '${city}',mobileNo = '${mobileNo}',state = '${state}',gender = '${gender}',zipcode = '${zipcode}',relationship_status = '${relationship_status}',date_of_birth = '${date_of_birth}' WHERE personId = '${personId}';`;

    con.query(usql1, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(usql1);
            console.log('record updated');

        }
    });


    //  -----------------------------Educational Info-------------------------

    console.log('hello');
    console.log(percentage);
    console.log(passingyear);
    var deg = degree.filter(x => x);
    var board = board_OR_University.filter(x => x);
    var year = passingyear.filter(x => x);
    var per = percentage.filter(x => x);
    var course = courseName.filter(x => x);


    if (deg.length === board.length && deg.length === per.length && year.length === per.length && course.length === year.length) {

        for (let i = 0; i < deg.length; i++) {
            var usql2 = `UPDATE job_application.educational_info SET board_OR_University = '${board_OR_University[i]}',passingyear = '${passingyear[i]}',percentage = '${percentage[i]}',courseName = '${courseName[i]}' where personId = ${personId} and degree = '${degree[i]}' `;
            con.query(usql2, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(personId);
                    console.log('Record Inserted');
                    console.log(usql2);
                }
            });
        }
    }
    else {
        console.log('Insert data in proper manner !');
    }

    // ----------------------------Work Experience----------------------------
    // var com = companyName.filter(x => x);
    // var des = designation_exp.filter(x => x);
    // var start = startDate.filter(x => x);
    // var end = endDate.filter(x => x);

   
    if (companyName.length === designation_exp.length && companyName.length === startDate.length && startDate.length === endDate.length) {


        for (let i = 0; i < companyName.length; i++) {

            var usql2 = `UPDATE job_application.experience SET  designation_exp = '${designation_exp[i]}', startDate = '${startDate[i]}', endDate = '${endDate[i]}' where personId = ${personId} and companyName = '${companyName[i]}';`;

            con.query(usql2, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(personId);
                    console.log('Record updated');

                }
                console.log(usql2);
            });
        }
    }
    else {
        console.log('Insert proper data');
    }
    // --------------------------------Language---------------------
    var hindi = req.body.hindi;
    var english = req.body.english;
    var gujarati = req.body.gujarati;
    console.log(language);
    var del = `delete from job_application.language_known where personId=2056;`;

    if (language[0]) {
        var sql3 = `insert into job_application.language_known (personId, language, ability) values`;
        for (let i = 0; i < hindi.length; i++) {
            sql3 += "(" + personId + "," + "'" + 'hindi' + "'" + "," + "'" + hindi[i] + "'" + ")";
            if (i < hindi.length - 1) {
                sql3 += ",";
            }
        }

        sql3 += ';';
    }
    if (language[1]) {
        var sql4 = `insert into job_application.language_known (personId, language, ability) values`;
        for (let i = 0; i < english.length; i++) {
            sql4 += "(" + personId + "," + "'" + 'english' + "'" + "," + "'" + english[i] + "'" + ")";
            if (i < english.length - 1) {
                sql4 += ",";
            }
        }
        sql4 += ';';
    }
    if (language[2]) {
        var sql5 = `insert into job_application.language_known (personId, language, ability) values`;
        for (let i = 0; i < gujarati.length; i++) {
            sql5 += "(" + personId + "," + "'" + 'gujarati' + "'" + "," + "'" + gujarati[i] + "'" + ")";
            if (i < gujarati.length - 1) {
                sql5 += ",";
            }
        }
        sql5 += ';';
    }

    con.query(`${del} ${sql3} ${sql4} ${sql5}`, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(personId);
            console.log('Lan-Record Inserted');
        }
    });

    // -------------------------------------Technology-----------------------
    var technology = req.body.technology;
    var java = req.body.java;
    var python = req.body.python;
    var ds = req.body.ds;
    var net = req.body.net;
    var mysql = req.body.mysql;

    var del1 = `delete from job_application.technology where personId=2056;`;
    for (let i = 0; i < technology.length; i++) {
        if (technology[0]) {
            var sqlt1 = `insert into job_application.technology (personId, technology, skill) values`;
            for (let i = 0; i < java.length; i++) {
                sqlt1 += "(" + personId + "," + "'" + 'java' + "'" + "," + "'" + java[i] + "'" + ")";
                if (i < java.length - 1) {
                    sqlt1 += ",";
                }
            }
            sqlt1 += ';';
        }
        if (technology[1]) {
            var sqlt2 = `insert into job_application.technology (personId, technology, skill) values`;
            for (let i = 0; i < python.length; i++) {
                sqlt2 += "(" + personId + "," + "'" + 'python' + "'" + "," + "'" + python[i] + "'" + ")";
                if (i < python.length - 1) {
                    sqlt2 += ",";
                }
            }
            sqlt2 += ';';
        }
        if (technology[2]) {
            var sqlt3 = `insert into job_application.technology (personId, technology, skill) values`;
            for (let i = 0; i < ds.length; i++) {
                sqlt3 += "(" + personId + "," + "'" + 'ds' + "'" + "," + "'" + ds[i] + "'" + ")";
                if (i < ds.length - 1) {
                    sqlt3 += ",";
                }
            }
            sqlt3 += ';';
        }
        if (technology[3]) {
            var sqlt4 = `insert into job_application.technology (personId, technology, skill) values`;
            for (let i = 0; i < net.length; i++) {
                sqlt4 += "(" + personId + "," + "'" + 'net' + "'" + "," + "'" + net[i] + "'" + ")";
                if (i < net.length - 1) {
                    sqlt4 += ",";
                }
            }
            sqlt4 += ';';
        }
        if (technology[4]) {
            var sqlt5 = `insert into job_application.technology (personId, technology, skill) values`;
            for (let i = 0; i < mysql.length; i++) {
                sqlt5 += "(" + personId + "," + "'" + 'mysql' + "'" + "," + "'" + mysql[i] + "'" + ")";
                if (i < mysql.length - 1) {
                    sqlt5 += ",";
                }
            }
            sqlt5 += ';';
        }

    }

    con.query(`${del1} ${sqlt1} ${sqlt2} ${sqlt3} ${sqlt4} ${sqlt5}`, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(personId);
            console.log('Tec - Record Inserted');
        }
    });


    // -------------------------reference--------------------------------

    var usql3 = `update job_application.preference set reference_contactName = '${reference_contactName}', relation = '${relation} ' where personId = ${personId};`;
    con.query(usql3, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(personId);
            console.log('Ref - Record Inserted');

        }

    });
    // --------------------------------Preference contact---------------------------

    // var result = prefered_location.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
    var result = prefered_location.filter(x => x);

    var usql5 = `update job_application.preference set prefered_location = '${result}', notice_period = ${notice_period} , expected_CTC = ${expected_CTC}, current_CTC = ${current_CTC}, deprtment = '${deprtment}' where personId = ${personId};`;
    con.query(usql5, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            // console.log(personId);
            console.log('Record Inserted');

        }

    });
    res.render('ans');
};

module.exports = {home , form , register , update , fresult};