const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');


// MySQL Stuff
// -------------------------------------------------------------------------
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "test_database"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log('connected!');
//     var sql = "SELECT * FROM test_table1";
//     con.query(sql, function(err, result) {
//         if (err) throw err;
//         console.log("Result", result);
//     });
// });
// -------------------------------------------------------------------------
const port = 8080;
console.log("hello world");
app.use(express.static(path.join(__dirname, '/public/dist/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/sendEmail', (req,res) => {
    console.log("received!");
    body = req.body;
    body.date = [body.date.slice(-5), body.date.slice(0,4)].join('-');
    transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'bennettlarson94@gmail.com',
            pass: 'pkrpwwsqembpvmyu'
            
        }
    });

    let mailOptions = {
        from: body.name,
        to: 'lars4652@umn.edu',
        subject: 'New Inquiry',
        html: `
                 <p>
                    Name: ` + body.name  + ` <br><br>
                    Email: ` + body.email + ` <br><br>
                    Phone: ` + body.phone + ` <br><br>
                    Requested Service: ` + body.service + ` <br><br>
                    Date: ` + body.date + `<br><br>
                    Additional Info: ` + body.additionalInfo + ` <br><br>
                </p>
            `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.messageId);
    });
    res.sendStatus(204);
    return;
});

app.get('*', (req,res) => {
    fs.createReadStream(__dirname + '/public/dist/public/index.html').pipe(res);
})

app.listen(port, () => console.log('Gator app listening on port: ' + port));