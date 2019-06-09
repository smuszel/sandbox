const parse = str =>
    str
        .replace(/\n/g, ',')
        .split(',')
        .map(Number);

const guard = (value, predicate, right) => {
    const ok = predicate(value);
    const f = ok ? right : () => undefined;
    const res = f(value);
    return res;
};
const erf = str => `value: '${str}' is incorrect input`;
const sum = nums => nums.reduce((acc, n) => acc + n, 0);
const selfEq = x => x === x;
const hasNoNan = xs => xs.every(selfEq);
const run = str => {
    const nums = parse(str);
    const result = guard(nums, hasNoNan, nums => sum(nums));
    return result;
};

module.exports = ({ process, console }) => {
    if (process.argv.includes('-i')) {
        let accum = 0;
        const initMsg = 'awaiting input';
        process.stdin.on('data', k => {
            const currStr = k.toString();
            const result = run(currStr);

            if (result !== undefined) {
                accum += result;
                console.log(accum);
            } else {
                console.log(erf(currStr));
            }
        });

        console.log(initMsg);
    } else {
        const str = process.argv.slice(2)[0] || '';
        const result = run(str);

        if (result !== undefined) {
            console.log(result);
        } else {
            console.log(erf(str));
        }
    }
};
