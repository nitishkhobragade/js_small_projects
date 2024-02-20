const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$^&*()_+~}{[]<>?-=";

const allChars = upperCase + lowerCase + number + symbol;

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