let colorButtons = [document.getElementById('button1'), document.getElementById('button2'), document.getElementById('button3'), document.getElementById('button4'), document.getElementById('button5'), document.getElementById('button6')];
let reset = document.getElementById('reset');
let question = document.getElementById('question');
let par = document.createElement('p');
let status = document.createElement('p');
let winner;
question.appendChild(par);

document.getElementById('status').appendChild(status)

reset.addEventListener('click', generate);

colorButtons.map(item => item.addEventListener('click', function() {
    colorButtons.map(item => item.disabled = 'false');
    if (item.style.background == winner) {
        status.textContent = `Congratulations!You found correct color!`;
    } else {
        status.textContent = `Wrong! Try again!`;
    }

}));

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