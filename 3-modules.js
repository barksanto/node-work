// CommonJS, every file is a module by default
// Modules- Encapsulated Code (Only share minimum)

// get the module from 4-names.js file
const names = require('./4-names')

// can also destructure like ... const {sayHi} = s
const functions = require('./5-utils')


// sayHi('barkley');
// sayHi(peter);
// sayHi(john);

console.log(functions.sayHi(names.john))