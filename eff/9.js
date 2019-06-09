const f = (l, p) => {
    const x = p.argv.slice(2)[0];

    if (x) {
        const _x = +x;
        if (x.length > 1) {
            l(_x);
        }

        const xi = _x + 1;

        l(xi);
    }
};

f(console.log, process);
