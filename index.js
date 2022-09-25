const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result"); 
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; // or 3
    
    if(randomNumber === 1){
        computerChoice = "rock"
    }

    if(randomNumber === 2){
        computerChoice = "scissors"
    }

    if(randomNumber === 3){
        computerChoice = "paper"
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

getResult = () => {
    if (computerChoice === userChoice){
        result = "Its A draw"
    }

    if (computerChoice === "rock" && userChoice === "paper"){
        result = "You Win!"
    }

    if (computerChoice === "rock" && userChoice === "scissors"){
        result = "You Lost!"
    }

    if (computerChoice === "paper" && userChoice === "scissors"){
        result = "You won!"
    }

    if (computerChoice === "paper" && userChoice === "rock"){
        result = "You Lost!"
    }

    if (computerChoice === "scissors" && userChoice === "rock"){
        result = "You Won!"
    }

    if (computerChoice === "scissors" && userChoice === "paper"){
        result = "You Lost!"
    }

    resultDisplay.innerHTML = result;

}