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

// eff(() => process)
//     .map(extract)
//     .map(guard(console.log))
//     .map(parse)
//     .map(inc)
//     .map(console.log)
//     .join();

const m = function*(_c, _p) {
    const c = yield _c;
    const p = yield _p;
    yield extract;
    yield guard(c);
    yield parse;
    yield inc;
};

const it = m(console.log, () => process);

const a = it.next();
console.log(a);

const b = it.next();
console.log(b);

const c = it.next();
console.log(c);

const d = it.next();
console.log(d);

const e = it.next();
console.log(e);

const f = it.next();
console.log(f);

const g = it.next();
console.log(g);
