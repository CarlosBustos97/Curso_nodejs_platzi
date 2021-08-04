const EventEmmitter = require('events');

class Logger extends EventEmmitter{
    execute(cb){
        console.log('before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('after');
    }
}
const logger = new Logger();

logger.on('start',() => console.log('Starting'));
// logger.on('finish',() => console.log('Finishing'));
// logger.on('finish',() => console.log('It\'s Done'));
logger.execute(()=> console.log('Hello World'));
