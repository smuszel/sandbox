const eff = f => {
    return {
        map: g => eff(x => g(f(x))),
        chain: x => f(x),
        join: x => f(x),
        value: f,
    };
};

const inc = x => x + 1;

const extract = p => {
    return p.argv.slice(2)[0];
};

const parse = str => {
    return +str;
};

const guard = l => x => {
    x.length > 1 && l(x);
    return x;
};

const id = x => x;

const f = (log, p) => {
    return log(inc(parse(guard(log)(extract(p)))));
};

f(console.log, process);
