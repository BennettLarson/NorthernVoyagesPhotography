const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');



// Google Drive API stuff
// -------------------------------------------------------------------------
const readline = require('readline');
const {google} = require('googleapis');
// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';
// -------------------------------------------------------------------------


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

app.use(express.static(path.join(__dirname, '/public/dist/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/getFiles', (req,res) => {
    console.log('get files!');

    // Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Drive API.
    authorize(JSON.parse(content), listFiles);
  });
  
  /**
   * Create an OAuth2 client with the given credentials, and then execute the
   * given callback function.
   * @param {Object} credentials The authorization client credentials.
   * @param {function} callback The callback to call with the authorized client.
   */
  function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);
  
    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getAccessToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
  }
  
  /**
   * Get and store new token after prompting for user authorization, and then
   * execute the given callback with the authorized OAuth2 client.
   * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
   * @param {getEventsCallback} callback The callback for the authorized client.
   */
  function getAccessToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client);
      });
    });
  }
  
  /**
   * Lists the names and IDs of up to 10 files.
   * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
   */
    function listFiles(auth) {
        const drive = google.drive({version: 'v3', auth});
        let allFiles = [];
        drive.files.list({
            pageSize: 10,
            q: "parents='1oWY5wtWeaSMcHbxOt7M6q0HwucXc_TFP'",
            fields: 'nextPageToken, files(webContentLink)',
        }, (err, resp) => {
            if (err) return console.log('The API returned an error: ' + err);
            const files = resp.data.files;
            if (files.length) {
                console.log('Files:');
                files.map((file) => {
                    console.log('filename & id: ' + file.webContentLink);
                    allFiles.push(file.webContentLink);
                });
                console.log('number of files: ' + allFiles.length);
                res.status(200).send(allFiles);
            } else {
                console.log('No files found.');
            }
        });
        
    }
});
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
        from: 'Tom Jones <test@gmail.com>',
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

    // transporter.sendMail(mailOptions, (error, info) => {
    //     if(error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: ' + info.messageId);
    // });
    res.sendStatus(204);
    return;
});

app.get('*', (req,res) => {
    fs.createReadStream(__dirname + '/public/dist/public/index.html').pipe(res);
})

app.listen(3000, () => console.log('Gator app listening on port 3000!'));