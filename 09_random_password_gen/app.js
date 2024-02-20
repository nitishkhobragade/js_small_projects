const passwordBox = document.getElementById("password");
let length = 6; // Initialize length variable with default value

const passwordLengthSlider = document.getElementById('passwordLength');
const lengthValue = document.getElementById('lengthValue');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$^&*()_+~}{[]<>?-=";

const allChars = upperCase + lowerCase + number + symbol;

///for password length
// Event listener for password length slider
passwordLengthSlider.addEventListener('input', function() {
    length = parseInt(this.value); // Update length variable
    lengthValue.textContent = length; // Update displayed value
});

////for creating password
function createPassword() {
    password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password+= allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;

}

////for copy the password
function copyPassword() {
    passwordBox.select();
    if(passwordBox.value === "") {
        alert("Password is Not Generated");
    }
    else{
        navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            console.log('Text copied to clipboard');
            showCopyMessage();
        })
        .catch((error) => {
            console.error('Could not copy text: ', error);
        });
    }
}

function showCopyMessage() {
    const copyMessage = document.getElementById("copyMessage");
    copyMessage.style.display = "block";
    setTimeout(() => {
        copyMessage.style.display = "none";
    }, 3000);
}

