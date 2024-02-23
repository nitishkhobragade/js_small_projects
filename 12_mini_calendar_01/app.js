const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
// day.innerHTML = today.getDay();
day.innerHTML = weekDays[today.getDay()];
// month.innerHTML = today.getMonth();
month.innerHTML = monthNames[today.getMonth()];
year.innerHTML = today.getFullYear();
