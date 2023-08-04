/* require('dummy-int')
let x = require("./dummy")

console.log(x) */

/* let menu = require('./food/index').menu */

/* let { menu } = require('./food/menu')
let { printMenu } = require("./food/helpers")
let { printMessage } = require("./food/helpers") */

/* import { menu, printMenu, printMessage } from "./food/index.mjs"

function mainLoop() {
  printMenu( menu, (option) => {
    console.log("You've chosen",option)
    if(option != ""){
      //HW4: !!! string input -> integer number
      //HW5: +check -> error -> inexistant option
      setTimeout(mainLoop, 500)
    }
    
  } )
}
mainLoop() */

/* let option = printMenu(menu, (option) => {
  console.log(option)
}) */

/* console.log(menu) */
/* printMenu( menu ) */
/* console.log(option) */
/* printMessage("Choose an option") */



import { menu, printMenu, printMessage } from "./food/index.mjs"

// user input este un string, to convert it in integer number, putem folosi functia parseInt()
function mainLoop() {
  printMenu( menu, (option) => {
    console.log("You've chosen",option)
    if(option != ""){
      //HW4: !!! string input -> integer number
      //HW5: +check -> error -> inexistant option
      const chosenOption = parseInt(option)
      if (!isNaN(chosenOption) && chosenOption >= 1 && chosenOption <= 3) {
        console.log("Chosen option number:", chosenOption)
      } else {
        console.log("Inexistant option! Please choose a valid option.")
      }
      setTimeout(mainLoop, 500)
    }
    
  } )
}
mainLoop() 

printMenu(menu)
printMessage("Choose an option")
