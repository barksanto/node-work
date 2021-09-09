//  this is a dependency we NEED TO INSTALL - 
//others like http and fs are already a part of Node.
const _ = require('lodash');

const items = [1,[2,[3, [4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems);