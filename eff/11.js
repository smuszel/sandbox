const g = l => x => {
    if (x > 9) {
        l(x);
    }
};

const f = (l, p, h) => {
    const x = p.argv.slice(2)[0];

    if (x) {
        const _x = +x;
        h(_x);

        const xi = _x + 1;

        l(xi);
    }
};

f(console.log, process, g(console.log));

// No using side effects
// No using functions that are subject to test
