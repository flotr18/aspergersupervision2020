const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

const server = express();
// the value for dbname should match your database name
const dbname = 'asperger';

// serve files from the dist directory
server.use(express.static('dist'));

// the URL to the DB will be loaded from an env variable or using the MongoDB Clour
const dbroute = process.env.MONGODB_URL || "mongodb+srv://admin:root@cluster0.elh7n.mongodb.net/test?retryWrites=true&w=majority";

let db;

// connect to the DB and then start the expres server
MongoClient.connect(dbroute, (err, client) => {
    if (err) throw err;

    db = client.db(dbname);
    // start the express web server listening
    server.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
});

// bodyParser, parses the request body to be a readable json format
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// DEFINE ENDPOINTS

// retrieve all user objects from DB
server.get('/', (req, res) => {
    db.collection('contact').find().toArray((err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

// create new user based on info supplied in request body
server.post('/', (req, res) => {


    const myData = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        mail : req.body.mail,
        message : req.body.message
    }

    db.collection('contact').insert(myData, (err, result) => {
        if (err) throw err;

        console.log('created in database');
        res.redirect('/');
    });
});

