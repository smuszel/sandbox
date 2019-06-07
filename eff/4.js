const eff = x => {
    return {
        map: f => eff(f(x)),
        run: () => x,
    };
};

const extract = p => {
    return p.argv.slice(2)[0];
};

eff(process)
    .map(extract)
    .map(console.log);
