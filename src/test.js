// @vanad
const t = require('vanad');
const f = require('./main');

const consoleMock = { log: x => x };

const emptyUndef = { argv: ['', '', undefined], console: consoleMock };
const emptyStr = { argv: ['', '', ''] };

const single1 = { argv: ['', '', '1'] };
const single101 = { argv: ['', '', '101'] };

const multiple1_3 = { argv: ['', '', '1,3'] };
const multiple10_20_100 = { argv: ['', '', '10,20,100'] };

const delimNewLine = { argv: ['', '', '10\n20\n100'] };

t('Starts with zero', c => {
    c(f({ process: emptyStr }), 0);
    c(f({ process: emptyUndef }), 0);
});

t('Parses single values', c => {
    c(f({ process: single1 }), 1);
    c(f({ process: single101 }), 101);
});

t('Adds multiple values', c => {
    c(f({ process: multiple1_3 }), 4);
    c(f({ process: multiple10_20_100 }), 130);
});

t('Can use other delimiters', c => {
    c(f({ process: delimNewLine }), 130);
});
