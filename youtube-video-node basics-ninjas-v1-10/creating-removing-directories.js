
var fs = require('fs')

/* fs.unlink('writeMe.txt') */
//deletes the file if it exists, otherwise throws an error

// creating directories , sincronic

/* fs.mkdirSync('stuff') */
//adds directory and its contents

/* fs.rmdirSync('stuff')  */
//removes directory and its contents 

// creating directories asincronic

fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data, () =>{
            console.log("file created")
        })
    })
})



/* fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff')
})
 */