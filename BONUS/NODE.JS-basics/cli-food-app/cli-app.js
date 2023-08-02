/* require('dummy-int')
let x = require("./dummy")

console.log(x) */

/* let menu = require('./food/index').menu */

/* let { menu } = require('./food/menu')
let { printMenu } = require("./food/helpers")
let { printMessage } = require("./food/helpers") */

let {menu,printMenu,printMessage} = require ('./food')

/* console.log(menu) */
printMenu( menu )
printMessage("Choose an option")