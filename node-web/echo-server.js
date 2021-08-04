const http = require('http');
const server = http.createServer();

server.on('request',(request,response) => {
    if(request.method == 'POST' && request.url == '/echo'){
        let body = [];
        request.on('data', chunk => {
            body.push(chunk);
        })
        .on('end',() => {
            response.writeHead(200, {'Content-Type': 'text/plain'});
            //Es necesario para convertir la respues a texto
            body = Buffer.concat(body).toString();             
            response.end(body);
        })

        
    }else{
        response.statusCode = 400;
        response.end();
    }
})

server.listen(8001);
console.log("Servidor en la url http://localhost:8001");