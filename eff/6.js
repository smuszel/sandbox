const maybe = x => {
    return {
        map: f => (x === undefined ? maybe(undefined) : maybe(f(x))),
        run: () => x,
    };
};

const eff = x => {
    return {
        map: f => eff(f(x)),
        run: () => x,
    };
};

const inc = x => x + 1;

const extract = p => {
    return maybe(p.argv.slice(2)[0]);
};

const parse = str => {
    return +str;
};

eff(process)
    .map(extract)
    .map(v => v.map(parse))
    .map(v => v.map(inc))
    .map(v => v.map(console.log));
