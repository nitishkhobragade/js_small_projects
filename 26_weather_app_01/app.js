// console.log("Hello ji");

// const API_KEY = "6ccd8f24913d9b18f2facc7a2337add5";

// function renderWeatherInfo(data) {
//     let newPara = document.createElement('p');
//     newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
//     document.body.appendChild(newPara);
// }

// async function fetchWeatherDetails() {

//     try {

//     let city = "goa";

//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

//     const data = await response.json();

//     console.log("Weather data:-> ", data);
    
//     renderWeatherInfo(data);

//     }
//     catch (err) {
//         // handle the errors here 
       
//     }
//     // https://fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

// }

// async function getCustomWeatherDetails() {
//     try {
//         let latitude = 15.3333;
//         let longitude = 74.0833;
    
//         let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
//         let data = await result.json();
    
//         console.log(data);
//     } 
//     catch(err) {
//         console.log("Error Found" + err);
//     }
// }

// function switchTab(clickedTab) {
//     apiErrorContainer.classList.remove("active");

//     if (clickedTab !== currentTab) {
//         currentTab.classList.remove("current-tab");
//         currentTab = clickedTab;
//         currentTab.classList.add("current-tab");

//         if(!searchForm.classList.contains("active")) {
//             userInfoContainer.clasList.remove("active");
//             grantAccessContainer.classList.remove("active");
//             searchForm.classList.add("active");
//         }
//         else {
//             searchForm.classList.remove("active");
//             userInfoContainer.classList.remove("active");
//             //getFormSessionStorage
//         }

//         //console.log("currentTab", currentTab)
//     }
// }

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else {
//         console.log("No geolocation Support")
//     }
// }

// function showPosition(position) {
//     let lat = position.coords.latitude;
//     let longi = position.coords.longitude;

//     console.log(lat);
//     console.log(longi);
// }