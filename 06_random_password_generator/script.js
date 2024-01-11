const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateBtn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~!@#$%^&*()_-{[]}<,>?/';

let password = "";
let passwordLength = 10;
let checkCount = 1;
//set strength circle color grey

handleSlider();

//setting password Length
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    //shadow
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// generating Random Number 
function generateRandomNumber() {
    return String(getRndInteger(0, 9));
}

//generating random lowercase
function generateLowerCase() {
    return String.fromCharCode(getRndInteger(97, 123));
}

//generating random UPPERCASE
function generateUpperCase() {
    return String.fromCharCode(getRndInteger(65, 91));
}

//generate Symbol
function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

//calculating strength
function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if(upperCaseCheck.checked) hasUpper = true;
    if (lowerCaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = false;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >=8) {
        setIndicator("#0f0");
    } else if (
        (hasLower|| hasUpper) &&
        (hasNum || hasSym) &&
        passwordLength >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

async function copyContent() {
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied";
        console.log("copy success");
    }
    catch(e) {
        copyMsg.innerText = "failed";
        console.log("copy failed");
    }
    //to make copy span visible
    copyMsg.classList.add("active");

    //making this class disappear after 2 seconds
    setTimeout( () => {
        copyMsg.classList.remove("active");
    }, 2000);

}

////shuffling the password
function shufflePassword(array) {
    ////Fisher Yates Method
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let str = "";
    array.forEach((el) => (str += el));
    return str;

}

////checking count of checkbox
function handleCheckBoxChange()  {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked)
        checkCount++;
    })
}
    //specioal condtion for checkbox
    if(passwordLength < checkCount ){
        passwordLength = checkCount;
        handleSlider();
    };


allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
});

//change password length dynamically by user
inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
}) ;

////giving functionality to copy button
copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
    copyContent();
});

////generating password
generateBtn.addEventListener('click', () => {
    ////if no checkbox selected 
    if(checkCount <= 0) return;

    if(passwordLength <checkCount) {
        passwordLength = checkCount; 
    }

    ////lets start new password
    console.log("started mega project dunia ka best project");
    //remove old password 
    password = "";

    ////include checkbox content for password generation
    
    // if(upperCaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    // if(lowerCaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    let funArr = [];

    if(upperCaseCheck.checked) {
        funArr.push(generateUpperCase);
    }

    if(lowerCaseCheck.checked) {
        funArr.push(generateLowerCase);
    }

    if(numbersCheck.checked) {
        funArr.push(generateRandomNumber);
    }

    if(symbolsCheck.checked) {
        funArr.push(generateSymbol);
    }

    ////compulsory addition 
    for(let i=0; i<funArr.length; i++) {
        password += funArr[i]();
    }

    console.log("compulsory addition done");

    ////remaining addition
    for(let i=0; i<passwordLength-funArr.length; i++) {
        let randIndex = getRndInteger(0, funArr.length);
        password += funArr[randIndex]();
    }

    console.log("remainingg addition done");
    ////shuffle the password
    password = shufflePassword(Array.from(password));
    console.log("shuffling done");

    ////show in UI
    passwordDisplay.value = password;
    console.log("UI addition done");

    ////calculate strength
    calcStrength();



});