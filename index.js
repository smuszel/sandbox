const form = document.querySelector('form');
let ps;
let psc;

Array.from(document.querySelectorAll('input')).forEach(inp => {
    const err = inp.parentElement.querySelector('span.error');
    inp.addEventListener('input', ev => {
        if (inp.checkValidity()) {
            err.textContent = '';
        } else {
            err.textContent = 'err';
        }
    });

    inp.name === 'password' && (ps = inp);
    inp.name === 'passwordConfirmation' && (psc = inp);
});

psc.addEventListener('input', ev => {
    if (psc.value !== ps.value) {
        psc.setCustomValidity('non matching');
        ps.setCustomValidity('non matching');
    } else {
        psc.setCustomValidity('');
        ps.setCustomValidity('');
    }

    if (psc.checkValidity()) {
        err.textContent = '';
    } else {
        err.textContent = 'err';
    }
});

ps.addEventListener('input', ev => {
    if (psc.value !== ps.value) {
        psc.setCustomValidity('non matching');
        ps.setCustomValidity('non matching');
    } else {
        psc.setCustomValidity('');
        ps.setCustomValidity('');
    }

    if (ps.checkValidity()) {
        err.textContent = '';
    } else {
        err.textContent = 'err';
    }
});

form.addEventListener('submit', ev => {
    alert('Success!');
});
