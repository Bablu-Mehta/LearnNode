const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    port:3307,
    user:'root',
    database:'node-complete',
    password:'root@123',
});

module.exports = pool.promise();