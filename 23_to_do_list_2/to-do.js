const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function(event){
        if (event.key == "Enter") {
            // console.log(this.value);
            if(item.value == "") {
                alert("Please write task before enter...");
            } else {
                addToDo(this.value);
                this.value = "";
            }
        }
    }
)

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