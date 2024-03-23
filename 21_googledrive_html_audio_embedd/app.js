document.addEventListener('DOMContentLoaded', function() {
    //template for audio
    var template = "https://docs.google.com/uc?export=open&id=YOURGOOGLEMP3ID";
    // template for image 
    // var imgTemplate = "http://drive.google.com/uc?export=view&id=URLIDHere";
    var imgTemplate = "https://drive.google.com/thumbnail?id=URLIDHere";

    document.getElementById('generateBtn').addEventListener('click', generateUrl);

    function generateUrl() {
        // this code for the audio 
        // Get the main URL from the audio link input field
        const mainUrl = document.getElementById('mainUrl').value;

        // Regular expression to extract the center part of the string
        const regex = /file\/d\/([^/]+)\/view\?usp=drive_link/;

        // Extract the center part from the main URL using regular expression
        const match = mainUrl.match(regex);

        // Get the main URL from the image link input field
        const imgUrl = document.getElementById('imgUrl').value;

        // Regular expression to extract the center part of the string
        const regexImg = /file\/d\/([^/]+)\/view\?usp=drive_link/;

        // Extract the center part from the main URL using regular expression
        const matchImg = imgUrl.match(regexImg);

        // Check if the match is found
        if (match || matchImg) {
            // Extracted center part of the string audio part
            const centerPart = match[1];

            // Replace "YOURGOOGLEMP3ID" with the extracted URL ID
            const newUrl = template.replace("YOURGOOGLEMP3ID", centerPart);

            // Display the center part in the result div
            document.getElementById('result').innerText = newUrl;    


             // Extracted center part of the string audio part
             const centerPartImg = matchImg[1];

             // Replace "YOURGOOGLEMP3ID" with the extracted URL ID
             const newImgUrl = imgTemplate.replace("URLIDHere", centerPartImg);
     
             // Display the center part in the result div
             document.getElementById('imgResult').innerText = newImgUrl;

        } else {
            // If no match is found, display an error message
            document.getElementById('result').innerText = "Invalid URL format";

            // Display the center part in the result div
            document.getElementById('imgResult').innerText = "Invalid URL format";
        }
    }
});

// for image 
let first = document.getElementById("imgResult");

// for audio  
let second = document.getElementById("result");

// for copy the audio link 
function copyAudioUrl() {
    if (second.innerText === "") {
        alert("It's Empty. No Link Present");
    } else {
        navigator.clipboard.writeText(second.innerText)
            .then(() => {
                console.log('Text copied to clipboard');
                showCopyMessage();
                console.log(second.innerText);
            })
            .catch((error) => {
                console.error('Could not copy text: ', error);
            });
    }
}

////for copy the image link
function copyImgUrl() {
    if (first.innerText === "") {
        alert("It's Empty. No Link Present");
    } else {
        navigator.clipboard.writeText(first.innerText)
            .then(() => {
                console.log('Text copied to clipboard');
                console.log(first.innerText);
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


// copy audio url 
document.getElementById('copyAudio').addEventListener('click', copyAudioUrl);
// copy img url 
document.getElementById('copyImg').addEventListener('click', copyImgUrl);

function resetAll() {
    // make empty audio link input box 
    document.getElementById("mainUrl").value = "";

    // make empty img link input box 
    document.getElementById("imgUrl").value = "";

    // make empty audio link output box 
    document.getElementById('result').innerText = ""; 

    // make empty image link output box
    document.getElementById('imgResult').innerText = "";

    // clear the console 
    console.clear();
}

// resetting all links
document.getElementById('resetBtn').addEventListener('click', resetAll);

// https://drive.google.com/file/d/1_WxtpuyXrXt8f_q-DfHBga-qdovNkvvV/view?usp=drive_link