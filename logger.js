
//const url = "http://mylogger.io";
const os = require('os');
var FreeMemory = os.freemem();
var TotalMemory = os.totalmem();



function log() {
    console.log('Your free memory is:' + FreeMemory);
    console.log('Your total memory is:' + TotalMemory);
}


 module.exports = log;
