const APIkey = "3fa84feb1f3c2594bd2063cc9c508894"
const error = "Please Enter Valid City"

preventDefault

let city;

const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';

fetch(weatherURL)

.then(function (response) {
    return response.json();
})

.catch (function (error) {
    return('Error $(error)')

})