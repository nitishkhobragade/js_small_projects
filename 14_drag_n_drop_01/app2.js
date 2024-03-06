if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // Mobile device
    // Selecting the left and right boxes
    let leftBox = document.getElementById("left");
    let rightBox = document.getElementById("right");

    // Adding touch event listeners to list items in left box
    leftBox.querySelectorAll('.list').forEach(function(listItem) {
        listItem.addEventListener("touchstart", handleTouchStart);
        listItem.addEventListener("touchmove", handleTouchMove);
        listItem.addEventListener("touchend", handleTouchEnd);
    });

    // Adding touch event listeners to list items in right box
    rightBox.querySelectorAll('.list').forEach(function(listItem) {
        listItem.addEventListener("touchstart", handleTouchStart);
        listItem.addEventListener("touchmove", handleTouchMove);
        listItem.addEventListener("touchend", handleTouchEnd);
    });

    // Function to handle touch start event
    function handleTouchStart(e) {
        let selectedItem = e.target.closest('.list');
        let touch = e.touches[0];
        selectedItem.startX = touch.clientX;
        selectedItem.startY = touch.clientY;
        e.preventDefault();
    }

    // Function to handle touch move event
    function handleTouchMove(e) {
        let selectedItem = e.target.closest('.list');
        let touch = e.touches[0];
        selectedItem.dx = touch.clientX - selectedItem.startX;
        selectedItem.dy = touch.clientY - selectedItem.startY;
        selectedItem.style.transform = `translate(${selectedItem.dx}px, ${selectedItem.dy}px)`;
        e.preventDefault();
    }

    // Function to handle touch end event
    function handleTouchEnd(e) {
        let selectedItem = e.target.closest('.list');

        if (selectedItem.dx > 100 && selectedItem.parentNode === leftBox) {
            rightBox.appendChild(selectedItem);
        } else if (selectedItem.dx < -100 && selectedItem.parentNode === rightBox) {
            leftBox.appendChild(selectedItem);
        }

        selectedItem.style.transform = "translate(0px, 0px)";
        selectedItem.dx = 0;
        selectedItem.dy = 0;
        e.preventDefault();
    }
} else {
    // Desktop/laptop with mouse
    // Place your existing code for desktop/laptop here
    let lists = document.getElementsByClassName("list"); //This line selects all elements with the class name "list" and stores them in the variable lists.
    let rightBox = document.getElementById("right"); //This line selects the element with the id "right" and stores it in the variable rightBox.
    let leftBox = document.getElementById("left"); //This line selects the element with the id "left" and stores it in the variable leftBox.

    for(list of lists) { //This line starts a loop iterating over each element in the lists variable.
        list.addEventListener("dragstart", function(e){  //This line adds an event listener to each list item for the "dragstart" event. When a drag operation starts on a list item, the function specified in the second argument will be executed.
            let selected = e.target; //This line retrieves the element that is being dragged and stores it in the selected variable.

            rightBox.addEventListener("dragover", function(e){ //This line adds an event listener to the rightBox element for the "dragover" event. This event is triggered when a dragged item is being dragged over the rightBox element.
                e.preventDefault(); //This line prevents the default action from occurring during the "dragover" event. This is necessary to allow a drop operation.
            });
            rightBox.addEventListener("drop", function(e){  //This line adds an event listener to the rightBox element for the "drop" event. This event is triggered when a dragged item is dropped onto the rightBox element.
                rightBox.appendChild(selected); //This line appends the dragged element (selected) to the rightBox element.
                selected = null; //This line clears the selected variable after the drop operation.
            });

            leftBox.addEventListener("dragover", function(e){ //Similar to lines 7-8, this line adds an event listener to the leftBox element for the "dragover" event.
                e.preventDefault();
            });
            leftBox.addEventListener("drop", function(e){ //Similar to lines 9-10, this line adds an event listener to the leftBox element for the "drop" event.
                leftBox.appendChild(selected); //Similar to line 10, this line appends the dragged element (selected) to the leftBox element.
                selected = null; //Similar to line 11, this line clears the selected variable after the drop operation.
            });
        }) //This line closes the event listener function for the "dragstart" event.
    }; //This line closes the loop that iterates over each list item.

};
