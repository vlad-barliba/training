var http = require('http');//modul http pt server

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World Cosmin!!');
}).listen(8080); 

