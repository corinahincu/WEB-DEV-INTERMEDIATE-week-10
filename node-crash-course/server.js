
const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {
    /* console.log(req.url, req.method) */

    // lodash
    const num = _.random(0,20)
    console.log(num)

    const greet = _.once(() =>{
        console.log('hello')
    })

    greet()
    greet()

    // set header content type
    res.setHeader('Content-Type','text/html')
    
    let path = './views/'
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-me':
            res.statusCode = 301
            res.setHeader("Location", "/about")
            break
        default:
            path += '404.html'
            res.statusCode = 404
            break
    }
/*     res.write('<p>hello,ninjas</p>')
    res.write('<p>hello again,ninjas</p>')
    res.end() */

    // send and html file
    fs.readFile(/* './views/index.html' */ path, (err,data) => {
        if(err){
            console.log(err)
            res.end()
        } else {
            //res.write(data)
            res.end(data)
        }
    })
});
// this code is loaded on a server, not on a browser, so nu il vom vedea in console.log

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});

// localhost is like a domain name on the web, like google.com , but localhost takes us to a very specific ip address, called a loopback, which is 127.0.0.1 . And it points directly back to your own computer, so that means that when we are connecting to the localhost domain in a browser, the browser is actually connecting back to our own computer, which is then acting as a host to our website. 

// port numbers, are like doors into a computer, through which internet communication can be made to different programs 
// when we use localhost we also type the port number, which is 3000, so : localhost:3000. The browser then knows to connect to our own computer via this particular port number

// control + C - to stop a request in terminal

// IMPORTANT 
// cand adaugam pe github noi nu adaugam si node modules, fiindca e un file mare. In caz ca cineva vrea sa descarce proiectul facut, din cauza ca node modules nu este, el nu va functiona, fiindca nu este. In asa caz, din cauza ca el totusi este nominat si adaugat in setarile in package json, in terminal e necesar doar sa scriem npm install, si se va crea automat si node modules