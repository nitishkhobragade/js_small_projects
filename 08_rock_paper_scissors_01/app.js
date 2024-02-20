let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let userWinCount = 0;
let compWinCount = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


//for generating computer choices
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock paper scissors
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

////playing game, selecting user and computer choices
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);
    winCheck(userChoice, compChoice);
};

const gameDraw = () => {
    console.log("Game was Draw");
        ////displaying game draw in html
        msg.innerText = "Game Was Draw";
}

////for checking win conditions
const winCheck = (userChoice, compChoice) => {
    if(userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scisssors" ? false : true;
        } else {
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

////for showing who is winner
showWinner = (userWin) => {
    if(userWin) {
        console.log("you win!");
        msg.innerText = "You Win";
        userWinCount++;
        userScore.innerText = userWinCount;
        
    } else {
        console.log("you lose!");
        msg.innerText = "You lose";
        compWinCount++;
        compScore.innerText = compWinCount;
    }
};

////for tracking which option is clicked
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

//function for reset game
resetGame = () => {
    userWinCount = 0;
    userScore.innerText = userWinCount;
    compWinCount = 0;
    compScore.innerText = compWinCount;
};



// The Basic Rules of RPS

// Despite its underlying complexity, the game’s rules are straightforward. Players deliver hand signals representing rock, paper, or scissors, with the outcome determined by these three rules:

// 1. Rock wins against scissors.
// 2. Scissors win against paper.
// 3. Paper wins against rock.