let colorButtons = document.getElementsByClassName('buttons');
let reset = document.getElementById('reset');
let question = document.getElementById('question');
let par = document.createElement('p');
let status = document.createElement('p');
let winner;
question.appendChild(par);

document.getElementById('status').appendChild(status)

reset.addEventListener('click', generate);

for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', function() {
        if (colorButtons[i].style.background == winner) {
            status.textContent = `Congratulations!You found correct color!`;
            disabledButtons()
        } else {
            status.textContent = `Wrong! Try again!`;
            disabledButtons()
        }
    });
}


function disabledButtons() {
    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].disabled = 'false';
    }
}

function randomRgb() {
    return Math.round(Math.random() * (255 - 1) + 1);
}

function dynamicColor() {
    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].style.background = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`;
    }
};

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
    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].removeAttribute('disabled');
    }
}

par.textContent = `Can you find ${chooseWinner()} ?`;