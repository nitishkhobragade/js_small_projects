console.log("Hello ji");

const API_KEY = "6ccd8f24913d9b18f2facc7a2337add5";

async function showWeather() {
    // let latitude = 15.3333;
    // let longitude = 74.0833;
    let city = "goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const data = await response.json();
    console.log("Weather data:-> " + data);

    let newPara = document.createElement('p');
    newPara.textContent = data
}