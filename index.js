const counter = {
    leftNext: 0,
    leftCurrent: 0,
    rightNext: 0,
    rightCurrent: 0,
};

const elements = {
    leftNext: document.querySelector('.left>.next'),
    leftCurrent: document.querySelector('.left>.current'),
    rightNext: document.querySelector('.right>.next'),
    rightCurrent: document.querySelector('.right>.current'),
};

const inc = () => {
    counter.rightCurrent = counter.rightNext;
    counter.leftCurrent = counter.leftNext;

    if (counter.rightNext === 9 && counter.leftNext === 5) {
        counter.rightNext = 0;
        counter.leftNext = 0;
    } else if (counter.rightNext === 9) {
        counter.rightNext = 0;
        counter.leftNext += 1;
    } else {
        counter.rightNext += 1;
    }
};

const render = () => {
    Object.keys(elements).forEach(k => {
        elements[k].textContent = counter[k];
        elements[k].classList.toggle('down');
    });
};

render();

setInterval(() => {
    inc();
    render();
}, 1000);
