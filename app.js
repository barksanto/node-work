const path = require('path');

const filePath = path.join('/content', 'subfolder', 'test.txt') 
console.log(filePath)

// returns the last thing in that file path
const base = path.basename(filePath);
console.log(base)

// resolve- returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)