const EventEmitter = require('events');

const myEmitter = new EventEmitter();
// console.log(myEmitter)

//listner
let m =0
myEmitter.on('event',(a,b)=>{
    console.log('an event occured',a,b,this)
    // console.log(++m)
})

myEmitter.emit('event','a','b')

myEmitter.once('event',()=>{
    console.log(++m)
})

myEmitter.emit('event')
myEmitter.emit('event')
//error
myEmitter.on('error',(err)=>{
    console.log('whoops! there was an error');
})
//emit
