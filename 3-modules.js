// CommonJS, every file is a module by default
// Modules- Encapsulated Code (Only share minimum)

// get the module from 4-names.js file
const names = require('./4-names')

// can also destructure like ... const {sayHi} = s
const functions = require('./5-utils')
const data = require('./6-alternate-flavor')
const thing = require('./7-mind-grenade')
// sayHi('barkley');
// sayHi(peter);
// sayHi(john);

// console.log(functions.sayHi(names.john))
