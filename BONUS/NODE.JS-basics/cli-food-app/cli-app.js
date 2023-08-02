/* require('dummy-int')
let x = require("./dummy")

console.log(x) */

/* let menu = require('./food/index').menu */

/* let { menu } = require('./food/menu')
let { printMenu } = require("./food/helpers")
let { printMessage } = require("./food/helpers") */

let {menu,printMenu,printMessage} = require('./food')

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
mainLoop()

/* let option = printMenu(menu, (option) => {
  console.log(option)
}) */

/* console.log(menu) */
printMenu( menu )
/* console.log(option) */
/* printMessage("Choose an option") */