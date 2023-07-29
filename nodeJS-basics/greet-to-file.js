const fs = require("fs");
const readline = require("readline");

/* fs.writeFile("greeting.txt", 'Hello World!', err =>{
    if(err){
        console.log("Error occured when writing to file")
    }
    
}) */

const writeGreetingToFile = (name) => {
    fs.writeFile("greeting.txt", `Hello ${name}!`, (err) => {
        if (err) {
            console.log("Error occured when writing to file");
        }
    });
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What is your name?", (name) => {

    rl.close();
    writeGreetingToFile(name)
});
