// Define an array containing the types of candies available in the game.
var candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];

// Initialize an empty board array.
var board = [];

// Define the number of rows and columns for the game board.
var rows = 9;
var columns = 9;

// Initialize the score variable to keep track of the player's score.
var score = 0;

// Execute the startGame function when the window loads.
window.onload = function() {
    startGame();

    window.setInterval(function() {
        crushCandy();
    }, 100)
};

// Define a function to randomly select a candy type from the candies array.
function randomCandy() {
    return candies[Math.floor(Math.random() * candies.length)]; //0-5.99
};

// Define the startGame function responsible for initializing the game board.
function startGame() {
    // Iterate through each row.
    for (let r = 0; r < rows; r++) {
        let row = []; // Create an empty array to represent the current row.

        // Iterate through each column.
        for (let c = 0; c < columns; c++) {
            // Create a new image element representing a candy tile.
            let tile = document.createElement("img");

            // Set the id of the tile based on its position in the grid (row and column).
            tile.id = r.toString() + "-" + c.toString();

            // Set the source of the tile's image to a randomly selected candy type.
            tile.src = "./images/" + randomCandy() + ".png";

            //Drag Functionality
            tile.addEventListener("dragstart", dragStart); //click on a candy, intialize drag process
            tile.addEventListener("dragover", dragOver); //clicking on candy, moving mouse to drag the candy
            tile.addEventListener("dragenter", dragEnter); //dragging candy into another candy
            tile.addEventListener("dragleave", dragLeave); // leaving a candy over another candy
            tile.addEventListener("drop", dragDrop); //dropping a candy over another candy
            tile.addEventListener("dragend", dragEnd); //after drag process completed, we swap candies

            // Append the tile to the HTML element with the id "board".
            document.getElementById("board").append(tile);

            // Add the tile to the current row array.
            row.push(tile);
        }

        // Add the current row array to the board array.
        board.push(row);
    }
    // Output the populated board array to the console for debugging purposes.
    console.log(board);
};

// Variables to hold reference of tiles involved in drag and drop
let currTile = null;
let otherTile = null;

function dragStart() {
    //this refers to tile that was clicked for dragging
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragLeave() {

}


function dragDrop() {
    //this refers target tile that was dropped on
    otherTile = this;
}

function dragEnter() {
    e.preventDefault();
}

function dragEnd() {

    let currCoords = currTile.id.split("-"); //id="0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);
    
    let otherCoords = otherTile.id.split("-"); //id="0-0" -> ["0", "0"]
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = c2 == c-1 && r == r2;
    let moveRight = c2 == c+1 && r == r2;

    let moveUp = r2 == r-1 && c == c2;
    let moveDown = r2 == r+1 && c == c2;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if(isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;
    }
};

function crushCandy() {
    crushThree();
    // crushFour();
    // crushFive()
}

function crushThree() {
    // check rows 
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns-2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];

            if(candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png"
                candy2.src = "./images/blank.png"
                candy3.src = "./images/blank.png"
            }
        }
    }

    //check columns
    for (let c = 0; c < columns; c++) {
        for(let r = 0; r < rows - 2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];

            if(candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png"
                candy2.src = "./images/blank.png"
                candy3.src = "./images/blank.png"
            }
        }
    }
}