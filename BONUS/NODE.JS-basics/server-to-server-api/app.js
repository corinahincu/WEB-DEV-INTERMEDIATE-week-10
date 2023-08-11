
const http = require('http')
const {HOST,PATH,KEY} = require('./config.json')


// HW1: 
//    - read city name from console (readline)
//    - print to console (temp+min+max,wind ...)
//    - make it interactive (cycle)
//    * debug/prevent errors
let city = "Chisinau"

/* console.log(KEY) */



const callback = (res) => {
  // <<< res - readable stream
  /* console.log(res); */

  // BIND EVENT HANDLERS

  res.on("data", (chunk) => {
    //console.log("API response with data")
    //console.log(chunk.toString())
    const data = JSON.parse(chunk.toString())
    console.log(data)
  })
  res.on("end", () => {
    //console.log("API response ended");
  });
  res.on("error", () => {
    console.log("API response error")
  });
}

//prepare request
const req = http.request({
  host: HOST,
  path: PATH + `?q=${city}&appid=${KEY}`,
  port: 80,
  method:'GET'
},callback)

// req - writable stream ----> 
req.end()




/* setTimeout(function(){
  req.write("1234567890")
},500) */



/* req.on("connect", () => {
  console.log('<<< got connected!')
})

req.on('information', () => {
  console.log(`>>> got some info!`)
}) */

// does this send a request?
// 1) node request built in
// 2) node -> npm
// 3) OS related (linux)

//  *) request LIFE CYCLE !!!