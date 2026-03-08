
function playGame(rounds = 5) {
    let computerScore = 0;
    let humanScore = 0;

    let name = prompt('What is your name? ', 'Player')

    for (let i=0; i<rounds; i++){
        let round = i+1;
        let humanSelection = getHumanChoice(round);
        let computerSelection = getComputerChoice();
        let score = playRound(humanSelection, computerSelection, round)
        if (score){humanScore += 1}else if (score == false){computerScore += 1}
        alert (`Computer = ${computerScore}, ${name} = ${humanScore}`)
    }
    let winner;
    if (computerScore > humanScore){
        winner = "Computer";
    }else if (humanScore > computerScore) {
        winner = name;
    }else { 
        alert('It is a draw. Play again')
        return;
    }
    console.log(`The winner is ${winner}`)
    alert(`The winner is ${winner}`)
}

function playRound(humanSelection, computerSelection, round){
    if (humanSelection == "Rock" && computerSelection == "Scissors" || humanSelection == "Paper" && computerSelection == "Rock" || humanSelection == "Scissors" && computerSelection == "Paper") {
        alert(`${humanSelection} beats ${computerSelection}. You win Round ${round}!`)
        return true;
    }else if (humanSelection == "Scissors" && computerSelection == "Rock" || humanSelection == "Rock" && computerSelection == "Paper" || humanSelection == "Paper" && computerSelection == "Scissors") {
        alert(` ${computerSelection} beats ${humanSelection}. You lose Round ${round}!`)
        return false;
    }else {
        alert("It's a draw.")
        return;
    }
}

function getHumanChoice(round) {
    let input = prompt(`Round ${round}.\nMake a choice (Rock, Paper, Scissors): `, "Rock");
    input = input.toUpperCase();
    input = input.replace(input.slice(1, input.length), input.slice(1, input.length).toLowerCase())
    return input;
}
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    if (num == 1) {
        return "Rock";
    } else if (num == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

