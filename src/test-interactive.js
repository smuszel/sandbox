// @vanad
const t = require('vanad');
const f = require('./main');

const consoleMock = () => {
    const values = [];
    return {
        log: x => values.push(x),
        get values() {
            return values;
        },
    };
};

const stdinMock = () => {
    const handlers = {
        data: [],
    };
    return {
        on: (name, f) => {
            handlers[name].push(f);
        },
        _trigger: (name, value) => {
            handlers[name].forEach(f => f(value));
        },
    };
};

t('Can start in interactive mode by specifying argv flag', c => {
    const stdin = stdinMock();
    const process = { argv: ['', '', '-i'], stdin };
    const console = consoleMock();
    f({ process, console });

    c(console.values, ['awaiting input']);
});

t('Shows parsed value', c => {
    const stdin = stdinMock();
    const process = { argv: ['', '', '-i'], stdin };
    const console = consoleMock();
    f({ process, console });
    stdin._trigger('data', '1');

    c(console.values, ['awaiting input', 1]);
});

t('Shows sum of parsed all parsed values', c => {
    const stdin = stdinMock();
    const process = { argv: ['', '', '-i'], stdin };
    const console = consoleMock();
    f({ process, console });
    stdin._trigger('data', '1');
    stdin._trigger('data', '5');
    stdin._trigger('data', '11');

    c(console.values, ['awaiting input', 1, 6, 17]);
});

t('Shows sum of all parsed values', c => {
    const stdin = stdinMock();
    const process = { argv: ['', '', '-i'], stdin };
    const console = consoleMock();
    f({ process, console });
    stdin._trigger('data', '');
    stdin._trigger('data', '1');
    stdin._trigger('data', '');
    stdin._trigger('data', '11');

    c(console.values, ['awaiting input', 0, 1, 1, 12]);
});

t('Can accept aggregated number arrays', c => {
    const stdin = stdinMock();
    const process = { argv: ['', '', '-i'], stdin };
    const console = consoleMock();
    f({ process, console });
    stdin._trigger('data', '');
    stdin._trigger('data', '1,1');
    stdin._trigger('data', '1');
    stdin._trigger('data', '100,2,5');

    c(console.values, ['awaiting input', 0, 2, 3, 110]);
});

t('Informs of incorrect input and does not add in such case', c => {
    const stdin = stdinMock();
    const process = { argv: ['', '', '-i'], stdin };
    const console = consoleMock();
    f({ process, console });
    stdin._trigger('data', '1,1');
    stdin._trigger('data', '1,xyz');
    stdin._trigger('data', '1');

    c(console.values, ['awaiting input', 2, "value: '1,xyz' is incorrect input", 3]);
});
