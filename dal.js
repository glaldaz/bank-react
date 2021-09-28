const MongoClient = require('mongodb').MongoClient;
//const url         = 'mongodb://localhost:27017';
const url         = 'mongodb+srv://glaldaz:q1xNB0iomAdask5896c3@cluster0.9od8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
let   db          = null;
const project     = 'myFirstDatabase';

// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log("Connected successfully to db server");

    // connect to myproject database
    db = client.db(project);
});

// create user account
function create(name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    });
}

// one user
function one(passedEmail) {
    return new Promise((resolve, reject) => {
        const customer = db
            .collection('users')
            .find({ email: (passedEmail) })
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs[0]);
            });
    });
}

// deposit
function deposit(passedEmail, passedDeposit) {
    return new Promise((resolve, reject) => {
        passedDeposit = Number(passedDeposit);
        const customer = db
            .collection('users')
            .findOneAndUpdate({ email: (passedEmail) }, { $inc: {balance: (passedDeposit) }}, { upsert: true, returnDocument: 'after' },
                function (err, doc) {
                    err ? reject(err) : resolve(doc.value);
                });
    });
}

// withdrawal
function withdrawal(passedEmail, passedWithdrawal) {
    return new Promise((resolve, reject) => {
        passedWithdrawal = -1 * Number(passedWithdrawal);
        const customer = db
            .collection('users')
            .findOneAndUpdate({ email: (passedEmail) }, { $inc: {balance: (passedWithdrawal) }}, { upsert: true, returnDocument: 'after' },
                function (err, doc) {
                    err ? reject(err) : resolve(doc.value);
                });
    });
}

// all users
function all() {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
            });
    });
}

module.exports = {create, one, deposit, withdrawal, all};