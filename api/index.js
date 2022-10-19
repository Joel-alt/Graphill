var express = require('express');
var app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);