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
const allCheckBox = document.querySelector("input[type=checkbox]");
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
    return getRndInteger(0 , 9);
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
        copyMsg.innertext = "Copied";
    }
    catch(e) {
        copyMsg.innerText = "failed";
    }
    
}