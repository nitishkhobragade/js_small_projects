const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    getMessage();
})

function getMessage() {
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value = "";
}


//addEventListener syntax

//document.addEventListener(event, function, Capture)

// document.addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });