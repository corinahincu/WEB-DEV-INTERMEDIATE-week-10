
// MODULE MAIN

console.log("App starting ...")
/* let config = require("./config.json") */
 /* json e folosit pentru data storage */

/* let config = require("./config.js"); */

/* console.log(config) */

/* console.log( config.__proto__) */

/* part 3
const File = require("./File") */ // daca avem doar un file cu un anumit nume, putem sa nu specifam ce e, js sau json, in caz ca avem mai multe file-uri cu acelasi nume, trebuie sa specifam ce e, js, sau json s.a
/* console.log(File) */

/* let f = new File("Fresh.hit.2023", "mp3")
f.info() 

console.log( " Supported formats: ")
config.forEach( 
  option => console.log(" --> ",option)
) */

// part4
/* const math = require("./math"); */
const { div, mul, add, sub } = require("./math"); // ES destructurization
/* const add = math.add */
console.log(mul,div,add)
/* let result= math.add(5,6); // call add function from module and pass
console.log(result) */

console.log("App finished.")