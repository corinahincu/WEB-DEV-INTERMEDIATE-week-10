
const http = require('http')
const {HOST,PATH,KEY} = require('./config.json')

/* console.log(KEY) */

//prepare request
const req = http.request({
  host: HOST,
  path: PATH
})
req.end()

req.on("connect", () => {
  console.log('<<< got connected!')
})

req.on('information', () => {
  console.log(`>>> got some info!`)
})

// does this send a request?
// 1) node request built in
// 2) node -> npm
// 3) OS related (linux)

//  *) request LIFE CYCLE !!!