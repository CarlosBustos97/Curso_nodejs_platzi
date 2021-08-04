const http = require('http');
const moment = require('moment'); // require
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
            let fecha = moment(body, 'MM-DD-YYYY');
            let dia = fecha.date();
            console.log(dia);
            let semana = dia/7;
            semana = Math.trunc(semana);            
            response.end(semana.toString());
        })        
    }else{
        response.statusCode = 400;
        response.end();
    }
})

server.listen(8001);
console.log("Servidor en la url http://localhost:8001");
// let fecha =moment("10-12-1997", "MM-DD-YYYY");
// console.log(fecha);
// let dia =  fecha.date();
// let semana = dia /7;
// semana = Math.trunc(semana);
// console.log(semana);
// console.log(semana.toString());


