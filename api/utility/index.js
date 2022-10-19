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

module.exports = {
    pool
}