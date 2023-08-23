
import { request } from "http"
import { createInterface } from "readline"
import { HOST, PATH, KEY } from "./config.mjs"


const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2) + "°C"

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const fetchWeatherData = async (city) => {
  return new Promise( (resolve, reject) => {
    const req = request({
      hostname : HOST ,
      path     : `${PATH}?q=${encodeURIComponent(city)}&appid=${KEY}`,
      port: 80,
      method: 'GET',
    },
    (res) => {
      let data = ''

      res.on("data", (chunk) => {
        data += chunk.toString();
        
      })

      res.on("end", () => {
        const weatherData = JSON.parse(data);

        const minTempCelsius = kelvinToCelsius(weatherData.main.temp_min);
        const maxTempCelsius = kelvinToCelsius(weatherData.main.temp_max);
        const feelsLikeCelsius = kelvinToCelsius(weatherData.main.feels_like);
        const windSpeed = weatherData.wind.speed;
        const humidity = weatherData.main.humidity;
        
        resolve({
          minTempCelsius,
          maxTempCelsius,
          windSpeed,
          humidity,
          feelsLikeCelsius
        })
      })

      res.on('error', (error) => {
        reject(`API response error: ${error}`)
      })
    })
    req.end()
  })
}

const main = async() => {
  try {
    const city = await new Promise( (resolve) => {
      rl.question('Enter a city name: ', resolve)
    })
    rl.close()

    const weatherInfo = await fetchWeatherData(city)

    console.log(`Minimum Temperature: ${weatherInfo.minTempCelsius}`);
    console.log(`Maximum Temperature: ${weatherInfo.maxTempCelsius}`);
    console.log(`Wind Speed: ${weatherInfo.windSpeed} m/s`);
    console.log(`Humidity: ${weatherInfo.humidity}%`);
    console.log(`Feels Like Temperature: ${weatherInfo.feelsLikeCelsius}`);
  } catch(error){
    console.error(error)
  }
}

main()


