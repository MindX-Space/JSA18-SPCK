/*General*/
const API_KEY = "6ab9ff8701516ad788b22be4fd93b362";
const DEFAULT_VALUE = "__";
/*Weather status*/
const searchInput = document.getElementById("search");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
/*Fetch data*/
searchInput.addEventListener("change", (event) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=RU&units=metric`)
    .then((response) => response.json())
    .then((data) => {
        cityName.innerHTML = data.name || DEFAULT_VALUE;
        weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
        temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
    })
})