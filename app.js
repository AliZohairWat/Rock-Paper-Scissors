let userScore = 0
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerchoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    // console.log(Math.floor(Math.random() * 3))
}

function converttoWord(letter) {
    switch (letter) {
        case 'r':
            return 'Rock'
        case 'p':
            return 'Paper'
        case 's':
            return 'Scissors'
    }
}


function game(userChoice) {
    const computerChoice = getComputerchoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;

    }
}

function win(user, comp) {
    console.log('WIN');
    userScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = converttoWord(user) + " beats " + converttoWord(comp) + '! You win!'
    document.getElementById(user).classList.add('greenglow')
    setTimeout(function() {document.getElementById(user).classList.remove('greenglow')}, 250);
    console.log(userScore);
}

function lose(user, comp) {
    console.log('LOSE');
    computerScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = converttoWord(comp) + ' beats ' + converttoWord(user) + '! You lose..'
    document.getElementById(user).classList.add('redglow')
    setTimeout(function() {document.getElementById(user).classList.remove('redglow')}, 250);
    console.log(userScore);
}

function draw(user, comp) {
    console.log('DRAW');
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = 'Its a draw!'
    document.getElementById(user).classList.add('orangeglow')
    setTimeout(function() {document.getElementById(user).classList.remove('orangeglow')}, 250);
    console.log(userScore);
}



function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    })
    paper_div.addEventListener('click', function() {
        game('p');
    })
    scissors_div.addEventListener('click', function() {
        game('s');
    })
}

main()