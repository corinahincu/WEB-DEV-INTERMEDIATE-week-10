
import { request } from 'http'
import { createInterface } from "readline"
import { HOST, PATH, KEY } from "./config.mjs"


// HW1: 
//    - read city name from console (readline) - done
//    - print to console (temp+min+max,wind ...) - done
//    - make it interactive (cycle)
//    * debug/prevent errors

const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2) + "°C"


// HW1:
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

// HW3


const callback = (res) => {
  let data = ""
  // <<< res - readable stream

  // BIND EVENT HANDLERS

  res.on("data", (chunk) => {
    data += chunk.toString()
    /* console.log(data); */
  });
  res.on("end", () => {
    const weatherData = JSON.parse(data)

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
  });
  res.on("error", () => {
    console.log("API response error", error);
  });
};

rl.question("Enter a city name: ", (city)=> {
  rl.close();

  //prepare request
  const req = request(
    {
      host: HOST,
      path: PATH + `?q=${city}&appid=${KEY}`,
      port: 80,
      method: "GET",
    },
    callback
  );

  // req - writable stream ---->
  req.end();
})












// does this send a request?
// 1) node request built in
// 2) node -> npm
// 3) OS related (linux)

//  *) request LIFE CYCLE !!!  