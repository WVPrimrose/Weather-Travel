const APIkey = "3fa84feb1f3c2594bd2063cc9c508894"
const error = "Please Enter Valid City"
const search = document.getElementById('submit');

// This function occurs after user searches the weather by city
function searchWeather(event) {
    event.preventDefault();

    const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
    fetch(weatherURL)

    .then(function (response) {
    return response.json();
    })

    .catch (function (error) {
    return('Error: $(error)')

    })   
}

// This function generates the 5-day forecast
function generateWeather() {
    for (let i = 0; i < 5; i++) {
        const weatherImg = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

       const forecastCard = document.createElement('div');
       const forecastCardBody = document.createElement('div');
       const day = document.createElement('h3');
       const description = document.createElement('h3');
       const img = document.createElement('img');
       img.setAttribute('src', weatherImg)
       const temp = document.createElement('p').textContent('Temperature: F');
       const windSpeed = document.createElement('p').textContent('Wind Speed: $');
       const humidity = document.createElement('p').textContent('Humidity: $');
       

        
    }
}
