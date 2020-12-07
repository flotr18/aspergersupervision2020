const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();
const dbname = "asperger";
const PORT = process.env.PORT || 5000;

server.use(cors());

const dbroute =
    process.env.MONGODB_URL ||
    "mongodb+srv://admin:root@cluster0.elh7n.mongodb.net/test?retryWrites=true&w=majority";

let db;

MongoClient.connect(dbroute, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    db = client.db(dbname);
    server.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
    console.log("Connected to mongo!");
});

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.post("/", (req, res) => {
    db.collection("contact").insertOne(req.body, (err, result) => {
        if (err) throw err;
        console.log("created in database");
        console.log(result);
        res.redirect("/");
    });
});
