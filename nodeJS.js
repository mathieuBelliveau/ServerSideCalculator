const http = require('http');
var temp;

const requestListener = function(req,res) {
    res.writeHead(200);
    res.end('Bonjour');
    temp = res.headers;
}

console.log('Bonjour');

const server = http.createServer(requestListener);
server.listen(69);