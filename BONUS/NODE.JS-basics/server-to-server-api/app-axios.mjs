
import readline from 'readline'
import axios from 'axios'
import { HOST, PATH, KEY } from "./config.mjs"


const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2) + "°C"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const fetchWeatherData = async (city) => {

  try {
    const response = await axios(`${HOST}${PATH}?q=${city}&appid=${KEY}`)
    const weatherData = response.data

    const minTempCelsius = kelvinToCelsius(weatherData.main.temp_min)
    const maxTempCelsius = kelvinToCelsius(weatherData.main.temp_max)
    const feelsLikeCelsius = kelvinToCelsius(weatherData.main.feels_like)
    const windSpeed = weatherData.wind.speed
    const humidity  = weatherData.main.humidity
    

    console.log(`Minimum Temperature: ${minTempCelsius}`);
    console.log(`Maximum Temperature: ${maxTempCelsius}`);
    console.log(`Wind Speed: ${windSpeed} m/s`);
    console.log(`Humidity: ${humidity}%`);
    console.log(`Feels Like Temperature: ${feelsLikeCelsius}`);
  } catch(error){
    console.error('API request error', error)
  }
};

rl.question("Enter a city name: ", (city)=> {
  rl.close();
  fetchWeatherData(city)
})


