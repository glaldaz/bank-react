var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js');

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// creaate user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    // else create user
    dal.create(req.params.name, req.params.email, req.params.password)
        .then((user) => {
            console.log(user);
            res.send(user);
        });
});

// log in
app.get('/account/one/:email', function (req, res) {
    dal.one(req.params.email)
        .then((doc) => {
            //console.log(doc);
            res.send(doc);
        });
});

//deposit
app.get('/account/deposit/:email/:deposit', function (req, res) {
    dal.deposit(req.params.email, req.params.deposit)
        .then((doc) => {
            //console.log(doc);
            res.send(doc);
        })
        .catch((error) => {
            res.send(null);
        });
});

//withdrawal
app.get('/account/withdrawal/:email/:withdrawal', function (req, res) {
    dal.withdrawal(req.params.email, req.params.withdrawal)
        .then((doc) => {
            //console.log(doc);
            res.send(doc);
        });
});

// all accounts
app.get('/account/all', function (req, res) {
    dal.all()
        .then((docs) => {
            //console.log(docs);
            res.send(docs);
        });
});

var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);