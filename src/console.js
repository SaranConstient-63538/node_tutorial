const {Console} = require('console');


console.log('hello world')
const nam = 'will Robertson'
console.warn(`Danger ${nam}! Danger!`)
// console.error(new Error('Something error'))

const myConsole = new Console()
myConsole.log('Hello World!')
myConsole.error(new Error('something bad happened'));
myConsole.warn('warning happened')



console.timeStamp()
