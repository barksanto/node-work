// OS Module
const os = require('os');

//info about current user
const user = os.userInfo()

//method returns the system uptime in seconds
const uptime = os.uptime()

console.log(`The System Uptime is: ${uptime/60/60} hrs.`);

