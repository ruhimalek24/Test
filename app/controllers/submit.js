const con = require('../connection');


function reg_submit(req,res){
const data = req.body;
    const { user_name, email, pswrd1, pswrd } = data;
    var err = '';
    const ans = [...Object.values(data)];
    console.log(ans[0]);

    if (pswrd === pswrd1) {
        const saltDigit = Math.floor(1000 + Math.random() * 9000);
        const salt = pswrd + saltDigit.toString();
        const token = Math.random().toString(36).slice(2);

        
        var currentdate = new Date();
        var date = + currentdate.getFullYear() + "/"
            + currentdate.getMonth() + "/"
            + currentdate.getDay() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        console.log(date);
        console.log(token);

        const sql = `insert into registration.users_table (user_name,email,pswrd,salt,activate_token,time) values ('${user_name}','${email}','${pswrd}','${salt}','${token}', '${date}');`;
        con.query(sql, (err, result) => {
            if (err) throw err;
            else {
                console.log('done');
                res.render('result', { result: result, token: token, err: err, email: email});
            }
        });
    }
    else {
        res.send('Insert password properly!');
    }
};

module.exports = { reg_submit };