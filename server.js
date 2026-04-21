const http = require('http');
const os = require('os');
const fs = require('fs');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '192.168.7.6',
    user: 'root',
    password: '1234',
    database: 'testdb'
});

connection.connect();

http.createServer((req, res) => {
    if (req.url === "/data") {
        connection.query("SELECT 'Hello from MySQL 🚀' AS msg", (err, results) => {
            res.end(results[0].msg);
        });
    } else if (req.url === "/hostname") {
        res.end(os.hostname());
    } else {
        fs.readFile("index.html", (err, data) => {
            res.end(data);
        });
    }
}).listen(3000);