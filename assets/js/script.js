const APIkey = "3fa84feb1f3c2594bd2063cc9c508894"
const error = "Please Enter Valid City"
const search = document.getElementById('search');
const forecast = document.getElementById('weather-container')


// This function occurs after user clicks search
function searchWeather(event) {
    event.preventDefault();
    let city = document.getElementById('City-Input').value;

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
    fetch(weatherURL)

    .then(function (response) {
    return response.json()
    })

    .catch (function (error) {
    return('Error: $(error)')

    }); 
    console.log(searchWeather);  
}
searchWeather()

// This function generates the 5-day forecast
function generateWeather() {
    for (let i = 0; i < 5; i++) {
        const weatherImg = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

       const forecastCard = document.createElement('div');
       const forecastCardBody = document.createElement('div');
       const day = document.createElement('h3').textContent()
       const description = document.createElement('h3');
       const img = document.createElement('img');
       img.setAttribute('src', weatherImg)
       const temp = document.createElement('p').textContent('Temperature: F');
       const windSpeed = document.createElement('p').textContent('Wind Speed: $');
       const humidity = document.createElement('p').textContent('Humidity: $');
       
        forecastCardBody.appendChild(day, description, img, temp, windSpeed, humidity);
        forecastCard.appendChild(forecastCardBody);
        forecast.appendChild(forecastCard);
        
    }
}
generateWeather()

// Adds event listener when user clicks the search button
search.addEventListener('click', searchWeather);