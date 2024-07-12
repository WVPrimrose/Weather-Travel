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

    $('#weather-container').empty();
    
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
       day.textContent = dayjs().format('MM DD')
       const description = document.createElement('h3');
       description.textContent = `${searchWeather[i].weather[0].description}`
       const img = document.createElement('img');
       img.setAttribute('src', weatherImg)
       const temp = document.createElement('p')
       temp.textContent=`Temperture: ${searchWeather[i].main.temp}`;
       const windSpeed = document.createElement('p')
       windSpeed.textContent= `Wind Speed: ${searchWeather[i].wind.speed}`
       const humidity = document.createElement('p')
       humidity.textContent=`Humidity: ${searchWeather[i].main.humidity}`;
       
        forecastCardBody.append(day, description, img, temp, windSpeed, humidity);
        forecastCard.append(forecastCardBody);
        forecast.append(forecastCard);
    }
}

function savePreviousCity(){
    localStorage.setItem('city', JSON.stringify(city))
}

function renderPreviousCity() {
    const previousCity = JSON.parse(localStorage.getItem('city'))
}

// Adds event listener when user clicks the search button
search.addEventListener('click', searchWeather);
savePreviousCity()
renderPreviousCity()