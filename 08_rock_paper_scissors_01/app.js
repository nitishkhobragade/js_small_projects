let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let userWinCount = 0;
let compWinCount = 0;
let userDiv = document.querySelector("#user-div");
let compDiv = document.querySelector("#comp-div");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


////for generating computer choices
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    ////rock paper scissors
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

////playing game, selecting user and computer choices
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    ////Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);
    winCheck(userChoice, compChoice);
};

const gameDraw = () => {
    console.log("Game was Draw");
        ////displaying game draw in html
        msg.innerText = "Game Was Draw";
        msg.style.backgroundColor = "#081b31";

        userDiv.innerText = "";
        compDiv.innerText = "";
}

////for checking win conditions
const winCheck = (userChoice, compChoice) => {
    if(userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            ////scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            ////rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            ////rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

////for showing who is winner
showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log("you win!"); // win display in console
        userDiv.innerText = `User: ${userChoice}`; //display the slection
        
        compDiv.innerText = `Computer: ${compChoice}`; //display the slection
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`; //display result
        msg.style.backgroundColor = "green"; //setting backgroind style color of winning
        // compDiv.style.backgroundColor = "red";
        // userDivstyle.backgroundColor = "green";
        userWinCount++;
        userScore.innerText = userWinCount;
        if(msg.style.backgroundColor === "green"){
            compDiv.style.backgroundColor = "red";
            userDiv.style.backgroundColor = "green";
        };
        
    } else {
        console.log("you lose!"); // loose display in console
        userDiv.innerText = `User: ${userChoice}`; //display the slection
        compDiv.innerText = `Computer: ${compChoice}`; //display the slection
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`; //display result
        msg.style.backgroundColor = "red"; //setting backgroind style color of loosing
        // compDiv.style.backgroundColor = "green";
        // userDiv.style.backgroundColor = "red";
        compWinCount++;
        compScore.innerText = compWinCount;
        if(msg.style.backgroundColor === "red"){
            compDiv.style.backgroundColor = "green";
            userDiv.style.backgroundColor = "red";
        };
    };
    
};

////for tracking which option is clicked
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

////function for reset game
resetGame = () => {
    userDiv.innerText = "";
    compDiv.innerText = "";
    userWinCount = 0;
    userScore.innerText = userWinCount;
    compWinCount = 0;
    compScore.innerText = compWinCount;
    console.clear();
    console.log("Game Reset");
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Select Your Choice";

};



// The Basic Rules of RPS

// Despite its underlying complexity, the game’s rules are straightforward. Players deliver hand signals representing rock, paper, or scissors, with the outcome determined by these three rules:

// 1. Rock wins against scissors.
// 2. Scissors win against paper.
// 3. Paper wins against rock.