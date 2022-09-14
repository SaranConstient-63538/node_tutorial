const process = require('process')

process.on('exit', (code)=>{
    console.log(`About to exit with code ${code}`)
    setTimeout(() => {
        console.log('This will not run');
    }, 100);
})