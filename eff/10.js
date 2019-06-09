const g = l => x => {
    if (x > 9) {
        l(x);
    }
};

const f = (l, p) => {
    const x = p.argv.slice(2)[0];

    if (x) {
        const _x = +x;
        g(l)(_x);

        const xi = _x + 1;

        l(xi);
    }
};

f(console.log, process);
