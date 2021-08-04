const { Writable } = require('stream');

const writableStream = new Writable({
    //chunk: pedazos de datos cuando estamos escribiendo
    //encoding: codificación UTF (opcional)
    //callback
    write(chunk,encoding, callback){
        debugger;
        console.log(chunk.toString());
        debugger;
        callback();
    }
});
debugger;
process.stdin.pipe(writableStream);