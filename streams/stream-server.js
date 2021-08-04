const fs = require("fs");
const server = require("http").createServer();

server.on("request", (request, response) => {
   const src = fs.createReadStream('./big');
   src.pipe(response);
});

server.listen(3000);
console.log("Servidor en la url http://localhost:3000");
