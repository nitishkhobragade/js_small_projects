// Function to encode the password in Base64
function encodePassword() {
    const passwordInput = document.getElementById("passwordInput").value;

    // Check if input is empty
    if (!passwordInput) {
        alert("Please enter a password to encode.");
        return;
    }

    // Encode password using btoa
    try {
        const encodedPassword = btoa(passwordInput);
        document.getElementById("result").textContent = encodedPassword;
    } catch (error) {
        alert("Encoding failed. Make sure your input is valid.");
    }
}

// Function to decode the password from Base64
function decodePassword() {
    const encodedInput = document.getElementById("passwordInput").value;

    // Check if input is empty
    if (!encodedInput) {
        alert("Please enter a Base64 encoded password to decode.");
        return;
    }

    // Decode password using atob
    try {
        const decodedPassword = atob(encodedInput);
        document.getElementById("result").textContent = decodedPassword;
    } catch (error) {
        alert("Decoding failed. Make sure your input is a valid Base64 encoded string.");
    }
}

// Function to copy the result to clipboard
function copyToClipboard() {
    const resultText = document.getElementById("result").textContent;

    // Check if there is text to copy
    if (!resultText) {
        alert("Nothing to copy! Please encode or decode a password first.");
        return;
    }

    // Use the Clipboard API to copy the result
    navigator.clipboard.writeText(resultText)
        .then(() => {
            alert("Result copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}
