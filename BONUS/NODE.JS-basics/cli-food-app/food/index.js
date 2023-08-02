
/* module.exports = {
  menu: [
    "salad",
    "burger",
    "pizza"
  ]
} */
/* module.exports.menu  [
  "salad", 
  "burger", 
  "pizza"
] */

module.exports.menu = require("./menu").menu
let helpers = require("./helpers")

module.exports.printMenu = helpers.printMenu
module.exports.printMessage = helpers.printMessage

