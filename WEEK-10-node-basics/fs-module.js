
var fs = require('fs')

var readMe = fs.readFileSync('readMe.txt', 'utf8')
/* console.log(readMe) */

/* fs.writeFileSync('writeMe.txt', readMe) */

fs.readFileSync('readMe.txt','utf8',function(err,data){
    fs.writeFile('writeMe.txt', data)
})

/* console.log('test') */

/* fs.writeFileSync('writeMe.txt', readMe)  */
