const fs = require("fs");
const server = require("http").createServer();

server.on("request", (request, response) => {
    fs.readFile("./big", (err, data) => {
        if (err) {
            console.log("Error", err);
        }
        response.statusCode = 200;
        response.setHeader("Content-type", "text/plain");
        response.end(data);
    });
});

server.listen(3000);
console.log("Servidor en la url http://localhost:3000");
