var mysql = require('mysql');
var path = require('path');
var bcrypt = require('bcrypt');
var multer = require('multer');
var upload = multer({ dest: 'public/data' });
var formidable = require('formidable');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'amey',
    database: 'dropbox1'
});

conn.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
});

module.exports.loginGetView = function(req, res) {
    console.log('get login');
    //console.log(path.join(__dirname,'..','..','views','login.html'));
    res.sendFile(path.join(__dirname,'..','..','views','login.html'));
};

module.exports.loginGetCred = function(req, res) {
    console.log('get login Cred ' + req.body.email);
    var sql = 'SELECT * FROM info WHERE email = ?';
    var query = conn.query(sql, [req.body.email]); 
    query.on('error', function(err) {
        throw err;
    });
    query.on('result', function(row) {
        console.log('result ' + row.userid);
        if(bcrypt.compareSync(req.body.password, row.password)) {
            console.log('Password match!!!');
            res.sendFile(path.join(__dirname,'..','..','views','home.html'));
        }
        else    
            console.log('Password not match!!!');
    });
};

module.exports.signupGetView = function(req, res) {
    console.log('get signup');
    res.sendFile(path.join(__dirname,'..','..','views','signup.html'));
};

module.exports.signupGetCred = function(req, res) {
    console.log('set login Cred');
    var values = [
        req.body.fname, req.body.lname, req.body.email, 'abc'
    ];
    var hash = bcrypt.hashSync(req.body.password, 10, function(err, hash) {
        if(err) throw err;
        return hash;
    });
    values.push(hash);
    var sql = 'INSERT INTO info (fname, lname, email, salt, password) VALUES (?,?,?,?,?)';
    console.log(values);

    console.log(values);
    conn.query(sql, values, function(err, result) {
        if(err) throw err;
        console.log('Inserted ' + result.affectedRows + ' row');
    }); 
    //res.sendFile(path.join(__dirname,'views','login.html'));
};

module.exports.uploadFile = function(req, res) {
    console.log('upload file \n');
    //var f = new FormData()
    //var file = new FormData();
    
    console.log(req);
    //upload.single(file.name);

    // var form = new formidable.IncomingForm();
    
    // form.parse(req);

    // form.on('fileBegin', function (name, file){
    //     file.path = __dirname + '/public/' + 'data/' + file.name;
    //     upload.single(file.name);
    //     //console.log(file.path);
    // });

    // form.on('file', function (name, file){
    //     console.log('Uploaded ' + file.name);
    // });
};
