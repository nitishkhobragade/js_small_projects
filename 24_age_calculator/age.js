let cal_btn = document.querySelector(".calculator");
let year, month, date;

cal_btn.addEventListener('click', () => {
    let dob = document.querySelector("#date").value;
    let getDate = new Date(dob);
    let dobDate = getDate.getDate();
    let dobMonth = getDate.getMonth() + 1;
    let dobYear = getDate.getFullYear();

    // You can log the variables here if you want to see them every time the button is clicked
    console.log(getDate, dobDate, dobMonth, dobYear);

    let currentDate = new Date();
    let currDate = currentDate.getDate();
    let currYear = currentDate.getFullYear();
    let currMonth = currentDate.getMonth() + 1;

    // Set variables
    let setYear = document.querySelector(".set-year");
    let setMonth = document.querySelector(".set-month");
    let setDate = document.querySelector(".set-day");

    // Calculate the age
    year = currYear - dobYear;
    if (currMonth >= dobMonth) {
        month = currMonth - dobMonth;
        if (currDate < dobDate) {
            month--;
            let daysInLastMonth = new Date(currYear, currMonth - 1, 0).getDate();
            date = daysInLastMonth - dobDate + currDate;
        } else {
            date = currDate - dobDate;
        }
    } else {
        year--;
        let monthsUntilNextBirthday = dobMonth - currMonth;
        if (currDate < dobDate) {
            monthsUntilNextBirthday--;
            let daysInLastMonth = new Date(currYear, currMonth - 1, 0).getDate();
            date = daysInLastMonth - dobDate + currDate;
        } else {
            date = currDate - dobDate;
        }
        month = 12 - monthsUntilNextBirthday;
    }

    // Output the age
    console.log(year, date, month);
    setYear.textContent = year;
    setMonth.textContent = month;
    setDate.textContent = date;
});
