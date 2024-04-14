let cal_btn = document.querySelector(".calculator");
let getDate, dobDate, dobMonth, dobYear;
let year, month, date;

cal_btn.addEventListener('click', () => {
    let dob = document.querySelector("#date").value;
    getDate = new Date(dob);
    dobDate = getDate.getDate();
    dobMonth = getDate.getMonth() + 1;
    dobYear = getDate.getFullYear();

    // You can log the variables here if you want to see them every time the button is clicked
    console.log(getDate, dobDate, dobMonth, dobYear);

    let currentDate = new Date();
    let currDate = currentDate.getDate();
    let currYear = currentDate.getFullYear();
    let currMonth = currentDate.getMonth();

    // Calculate the age
    year = currYear - dobYear;
    console.log(year);
    if (currMonth >= dobMonth) {
        month = currMonth - dobMonth;
    } else {
        year--;
        date = new Date(year, month, 0).getDate() + currDate - dobDate;
    }
    console.log(year, date, month);
});

// Now you can access getDate, dobDate, dobMonth, dobYear, year, date, and month outside the event listener function
