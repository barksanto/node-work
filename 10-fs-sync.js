const {readFileSync, writeFileSync} = require('fs');
const { setTimeout } = require('timers/promises');
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf8');

// console.log(first, second)


//1st argument is the file path + name, second is what you want to add to it
writeFileSync('./content/result-sync.txt', 
`Here is the result: ${first}, ${second}`, 
{flag: 'a'}
);


console.log('done with this task');
console.log('starting the next one');


