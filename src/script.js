let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let reset = document.getElementById('reset');
let question = document.getElementById('question');
let par = document.createElement('p');
let status = document.createElement('p');
let winner;
question.appendChild(par);

document.getElementById('status').appendChild(status)


reset.addEventListener('click', generate);
button1.addEventListener('click', button1Check);
button2.addEventListener('click', button2Check);
button3.addEventListener('click', button3Check);
button4.addEventListener('click', button4Check);
button5.addEventListener('click', button5Check);
button6.addEventListener('click', button6Check);


function randomRgb() {
    return Math.round(Math.random() * (255 - 1) + 1);
}



function dynamicColor() {
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`button${i}`).style.background = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`
    }
}
dynamicColor()

function chooseWinner() {
    winner = document.getElementById(`button${Math.round(Math.random() * (6 - 1) + 1)}`).style.background;
    return winner;
}

//generate new game after triggered function
function generate() {
    dynamicColor();
    par.textContent = `Can you find ${chooseWinner()} ?`;
}

par.textContent = `Can you find ${chooseWinner()} ?`;




//list of functions for checking winners
function button1Check() {
    if (document.getElementById(`button${1}`).style.background == winner) {
        status.textContent = `Congratulations!Your found correct color!`;
    } else {
        status.textContent = `Wrong! Try again!`;
    }
}

function button2Check() {
    if (document.getElementById(`button${2}`).style.background == winner) {
        status.textContent = `Congratulations!Your found correct color!`;
    } else {
        status.textContent = `Wrong! Try again!`;
    }
}

function button3Check() {
    if (document.getElementById(`button${3}`).style.background == winner) {
        status.textContent = `Congratulations!Your found correct color!`;
    } else {
        status.textContent = `Wrong! Try again!`;
    }
}

function button4Check() {
    if (document.getElementById(`button${4}`).style.background == winner) {
        status.textContent = `Congratulations!Your found correct color!`;
    } else {
        status.textContent = `Wrong! Try again!`;
    }
}

function button5Check() {
    if (document.getElementById(`button${5}`).style.background == winner) {
        status.textContent = `Congratulations!Your found correct color!`;
    } else {
        status.textContent = `Wrong! Try again!`;
    }
}

function button6Check() {
    if (document.getElementById(`button${6}`).style.background == winner) {
        status.textContent = `Congratulations!Your found correct color!`;
    } else {
        status.textContent = `Wrong! Try again!`;
    }
}