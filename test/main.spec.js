const f = require('../src/main');

const assert = x => {
    if (!x) throw 'assertion failed';
};

module.exports = function*() {
    yield 'Adding nothing evaluates to zero';
    assert(f() === 0);
    //
    yield 'single value 1 evaluates to 1';
    assert(f('1') === 1);
    //
    yield 'single value 0 evaluates to 0';
    assert(f('0') === 0);
    //
    yield 'empty evaluates to 0';
    assert(f('') === 0);
    //
    yield 'adding 2 and 5 evaluates to 7';
    assert(f('2 5') === 7);
    //
    yield 'end';
};
