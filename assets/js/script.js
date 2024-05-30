const APIkey = "3fa84feb1f3c2594bd2063cc9c508894"
const error = "Please Enter Valid City"
const search = document.getElementById('search');
const forecast = document.getElementById('weather-container')


// This function occurs after user clicks search
function searchWeather(event) {
    event.preventDefault();
    let city = document.getElementById('City-Input').value;
    console.log(city)
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`;
    fetch(weatherURL)

    .then(function (response) {
        console.log(response)
    return response.json()
    })
    .then(function (data){
        console.log(data)
        generateWeather(data.list)
    })
    .catch (function (error) {
    return(`Error: ${error}`)

    });     
}

// This function generates the 5-day forecast
function generateWeather(searchWeather) {
    console.log(searchWeather.length);
    for (let i = 0; i < searchWeather.length; i+=8) {
        console.log(searchWeather[i])
        const weatherImg = `https://openweathermap.org/img/wn/${searchWeather[i].weather[0].icon}.png`;
       const forecastCard = document.createElement('div');
       const forecastCardBody = document.createElement('div');
       const day = document.createElement('h3')
       day.textContent=""
       const description = document.createElement('h3');
       const img = document.createElement('img');
       img.setAttribute('src', weatherImg)
       const temp = document.createElement('p')
       temp.textContent='Temperature: F';
       const windSpeed = document.createElement('p')
       windSpeed.textContent= 'Wind Speed:'
       const humidity = document.createElement('p')
       humidity.textContent='Humidity: ';
       
        forecastCardBody.appendChild(day, description, img, temp, windSpeed, humidity);
        forecastCard.appendChild(forecastCardBody);
        forecast.appendChild(forecastCard);
        
    }
}

// Adds event listener when user clicks the search button
search.addEventListener('click', searchWeather);