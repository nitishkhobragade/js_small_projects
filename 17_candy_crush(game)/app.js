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

    //1/10th of a second
    window.setInterval(function() {
        crushCandy();
        slideCandy();
        generateCandy();
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

    // Check if the device is a touch-enabled device
    if (isTouchDevice()) {
        // Touch Event Listeners
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                let tile = board[r][c];
                tile.addEventListener("touchstart", touchStart); // Tap on a candy, initialize touch process
                tile.addEventListener("touchmove", touchMove); // Moving finger while touching the candy
                tile.addEventListener("touchend", touchEnd); // After touch process completed, handle the result
            }
        }
    } else {
        // Drag Event Listeners
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                let tile = board[r][c];
                tile.draggable = true;
                tile.addEventListener("dragstart", dragStart); // Click on a candy, initialize drag process
                tile.addEventListener("dragover", dragOver); // Clicking on candy, moving mouse to drag the candy
                tile.addEventListener("dragenter", dragEnter); // Dragging candy into another candy
                tile.addEventListener("dragleave", dragLeave); // Leaving a candy over another candy
                tile.addEventListener("drop", dragDrop); // Dropping a candy over another candy
                tile.addEventListener("dragend", dragEnd); // After drag process completed, swap candies
            }
        }
    }
}

// Function to check if the device is touch-enabled
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
}

// Touch event functions
function touchStart(event) {
    currTile = this;
}

function touchMove(event) {
    event.preventDefault();
}

function touchEnd(event) {
    otherTile = this;
    performSwap();
}

// Drag event functions
function dragStart(event) {
    currTile = this;
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
}

function dragLeave(event) {
    // Leave empty or add any desired behavior
}

function dragDrop(event) {
    otherTile = this;
    performSwap();
}

function dragEnd(event) {
    // Leave empty or add any desired behavior
}

// Function to perform the swap of candies after touch or drag events
function performSwap() {
    if (currTile.src.includes("blank") || otherTile.src.includes("blank")) {
        return;
    }

    let currCoords = currTile.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = c2 == c - 1 && r == r2;
    let moveRight = c2 == c + 1 && r == r2;
    let moveUp = r2 == r - 1 && c == c2;
    let moveDown = r2 == r + 1 && c == c2;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;

        let validMove = checkValid();
        if (!validMove) {
            currTile.src = currImg;
            otherTile.src = otherImg;
        }
    }
}


// Function to crush candies
function crushCandy() {
    crushThree();
    // CrushFour(); // Uncomment if you have this function
    // CrushFive(); // Uncomment if you have this function
    document.getElementById("score").innerText = score;
}

// Function to crush candies in sets of three
function crushThree() {
    // Check rows 
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c + 1];
            let candy3 = board[r][c + 2];

            if (candy1.src === candy2.src && candy2.src === candy3.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                score += 3;
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
                score += 3;
            }
        }
    }
}

function checkValid() {
    // check rows 
    for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns-2; c++) {
        let candy1 = board[r][c];
        let candy2 = board[r][c+1];
        let candy3 = board[r][c+2];

        if(candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
            return true;
        }
    }
}

    // Check columns
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r + 1][c];
            let candy3 = board[r + 2][c];

            if (candy1.src === candy2.src && candy2.src === candy3.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                score += 3;
            }
        }
    }
}

// Function to slide candies
function slideCandy() {
    for (let c = 0; c < columns; c++) {
        let ind = rows - 1;
        for (let r = rows - 1; r >= 0; r--) {
            if (!board[r][c].src.includes("blank")) {
                board[ind][c].src = board[r][c].src;
                ind--;
            }
        }

        // Fill the remaining top rows with new candies
        for (let r = ind; r >= 0; r--) {
            board[r][c].src = "./images/" + randomCandy() + ".png";
        }
    }
}

// Function to generate new candies at the top
function generateCandy() {
    for (let c = 0; c < columns; c++) {
        if (board[0][c].src.includes("blank")) {
            board[0][c].src = "./images/" + randomCandy() + ".png";
        }
    }
}