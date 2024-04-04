const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");
const addBtn = document.querySelector(".addBtn");

// Function to add task
function addTask() {
    if(item.value == "") {
        alert("Please write task before enter...");
    } else {
        addToDo(item.value);
        item.value = "";
    }
}

// Event listener for Enter key press
item.addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        addTask();
    }
});

// Event listener for button click
addBtn.addEventListener("click", addTask);

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item}
    <i class="fa fa-times"></i>
    `;

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    );

    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove();
        }
    )

    toDoBox.appendChild(listItem);
}


////to prevent from accidental refresh
window.addEventListener('beforeunload', function(event) {
    event.preventDefault();
    event.returnValue = '';

    const message = 'Are you sure you want to leave? Your changes may not be saved.';
    event.returnValue = message; // For older browsers
    return message;
});

window.addEventListener('unload', function(event) {
    alert('Are you sure you want to leave? Your changes may not be saved.');
    // You can also perform additional actions here if needed
});