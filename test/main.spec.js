const f = require('../src/main');

const assert = x => {
    if (!x) throw 'assertion failed';
};

module.exports = function*() {
    yield 'Adding nothing evaluates to zero';
    assert(f() === 0);
    //
    yield 'single value 1 evaluates to 1';
    assert(f(1) === 1);
    //
    yield 'end';
};
