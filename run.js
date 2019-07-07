const fs = require('fs');
const solution = require('./solution');

const str = fs.readFileSync('inp').toString();
const inp = str
    .split('\n')
    .map(s => s + ',')
    .join('');
eval('global.xs = [' + inp + ']');

const x = [];
const y = [];
const z = [];

console.log(x, solution(x));
console.log(y, solution(y));
console.log(z, solution(z));

xs.forEach(x => {
    console.log(x, solution(x));
});
