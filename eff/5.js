const eff = x => {
    return {
        map: f => eff(f(x)),
        run: () => x,
    };
};

const inc = x => x + 1;

const extract = p => {
    return p.argv.slice(2)[0];
};

const parse = str => {
    return +str;
};

eff(process)
    .map(extract)
    .map(parse)
    .map(inc)
    .map(console.log);
