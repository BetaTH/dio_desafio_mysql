const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'admin',
    password: '',
    database: 'movies_controll'
})

module.exports = Connection;
