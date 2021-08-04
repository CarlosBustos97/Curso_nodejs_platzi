const http = require('http');
const server = http.createServer();

server.on('request',(request,response) => {
    response.statusCode = 200;
    response.setHeader('Content-type','text/plain');

    response.end('Hello World');
})

server.listen(8000);
console.log("Servidor en la url http://localhost:8000");