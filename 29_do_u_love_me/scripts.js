function clickYesButton() {
    alert("Yay! 💖 I love you too! 😊");
}

// Function to move the NO button randomly
function moveNoButton() {
    let btn = document.getElementById("no-button");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

// Event for desktop (hover)
document.getElementById("no-button").onmouseover = moveNoButton;

// Event for mobile (touch)
document.getElementById("no-button").ontouchstart = function (event) {
    event.preventDefault(); // Prevents weird touch behaviors
    moveNoButton();
};
