let colorButtons = [document.getElementById('button1'), document.getElementById('button2'), document.getElementById('button3'), document.getElementById('button4'), document.getElementById('button5'), document.getElementById('button6')];
let reset = document.getElementById('reset');
let question = document.getElementById('question');
let par = document.createElement('p');
let status = document.createElement('p');
let winner;
question.appendChild(par);

document.getElementById('status').appendChild(status)

reset.addEventListener('click', generate);
colorButtons[0].addEventListener('click', button1Check);
colorButtons[1].addEventListener('click', button2Check);
colorButtons[2].addEventListener('click', button3Check);
colorButtons[3].addEventListener('click', button4Check);
colorButtons[4].addEventListener('click', button5Check);
colorButtons[5].addEventListener('click', button6Check);

function randomRgb() {
    return Math.round(Math.random() * (255 - 1) + 1);
}

function dynamicColor() {
    colorButtons.map(item => item.style.background = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`);
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
    status.textContent = ``;
    colorButtons.map(item => item.removeAttribute('disabled'))
}

par.textContent = `Can you find ${chooseWinner()} ?`;

//list of functions for checking winners
function button1Check() {
    if (colorButtons[0].style.background == winner) {
        status.textContent = `Congratulations!You found correct color!`;
    } else {
        status.textContent = `Wrong! Try again!`;
    }
    colorButtons.map(item => item.disabled = 'false');
}

function button2Check() {
    if (colorButtons[1].style.background == winner) {
        status.textContent = `Congratulations!You found correct color!`;
    } else {
        status.textContent = `Wrong! Try again!`;
    }
    colorButtons.map(item => item.disabled = 'false');
}

function button3Check() {
    if (colorButtons[2].style.background == winner) {
        status.textContent = `Congratulations!You found correct color!`;
    } else {
        status.textContent = `Wrong! Try again!`;
    }
    colorButtons.map(item => item.disabled = 'false');
}

function button4Check() {
    if (colorButtons[3].style.background == winner) {
        status.textContent = `Congratulations!You found correct color!`;
    } else {
        status.textContent = `Wrong! Try again!`;
    }
    colorButtons.map(item => item.disabled = 'false');
}

function button5Check() {
    if (colorButtons[4].style.background == winner) {
        status.textContent = `Congratulations!You found correct color!`;
    } else {
        status.textContent = `Wrong! Try again!`;
    }
    colorButtons.map(item => item.disabled = 'false');
}

function button6Check() {
    if (colorButtons[5].style.background == winner) {
        status.textContent = `Congratulations!You found correct color!`;
    } else {
        status.textContent = `Wrong! Try again!`;
    }
    colorButtons.map(item => item.disabled = 'false');
}