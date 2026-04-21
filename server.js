const http = require('http');
const os = require('os');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === "/hostname") {
        res.end(os.hostname());
    } else {
        fs.readFile("index.html", (err, data) => {
            res.end(data);
        });
    }
}).listen(3000);