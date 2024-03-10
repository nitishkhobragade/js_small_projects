// Function to display a confirmation message when navigating away or refreshing the page
function confirmExit(e) {
    var confirmationMessage = 'Are you sure you want to leave? Your changes may not be saved.';
    // For modern browsers
    e.returnValue = confirmationMessage;
    // For older browsers
    return confirmationMessage;
};

// Attach the event listener to the window
window.addEventListener('beforeunload', confirmExit);


document.querySelector('#push').onclick = function() {
    if(document.querySelector('#newtask input').value.length == 0){ //validation input field
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML 
        += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
        `;

        var current_tasks = document.querySelectorAll(".delete"); ////deleting task
        for(i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i = 0; i < tasks.length; i++){
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            }
        }

        ////clearing the input field
        document.querySelector("#newtask input").value = "";
    }  

}

// Add event listener to the "Add" button
// document.querySelector('#push').onclick = addTask;

// Add event listeners to existing delete buttons and task items when the page loads
window.onload = function () {
    var current_tasks = document.querySelectorAll(".delete");
    for (i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            this.parentNode.remove();
        }
    }

    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function () {
            this.classList.toggle('completed');
        }
    }
};

