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

t('Starts with zero', c => {
    const process = { argv: ['', '', ''] };
    const console = consoleMock();
    f({ process, console });

    c(console.values, [0]);
});

t('Starts with zero', c => {
    const process = { argv: ['', '', undefined] };
    const console = consoleMock();
    f({ process, console });

    c(console.values, [0]);
});

t('Parses single values', c => {
    const process = { argv: ['', '', '1'] };
    const console = consoleMock();
    f({ process, console });

    c(console.values, [1]);
});

t('Parses single values', c => {
    const process = { argv: ['', '', '821'] };
    const console = consoleMock();
    f({ process, console });

    c(console.values, [821]);
});

t('Adds multiple values', c => {
    const process = { argv: ['', '', '1,3'] };
    const console = consoleMock();
    f({ process, console });

    c(console.values, [4]);
});

t('Adds multiple values', c => {
    const process = { argv: ['', '', '10,100,20'] };
    const console = consoleMock();
    f({ process, console });

    c(console.values, [130]);
});

t('Can use other delimiters', c => {
    const process = { argv: ['', '', '10\n100\n20'] };
    const console = consoleMock();
    f({ process, console });

    c(console.values, [130]);
});
