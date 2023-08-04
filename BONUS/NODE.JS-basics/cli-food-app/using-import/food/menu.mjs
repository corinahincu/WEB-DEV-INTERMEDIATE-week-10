// this module DEPENDS on Item
/* const Item = require("./Item")

module.exports.menu = 
[
  new Item("salad", 15.00),
  new Item("soup", 25.00),
  new Item("pizza", 40.00)
] */

/* import Item from "./Item"; */

/* export const menu = [
  new Item("salad", 15.00),
  new Item("soup", 25.00),
  new Item("pizza", 40.00)
] */

import Item from "./Item.mjs"

export const menu = [
  new Item(1,"salad", 15.00),
  new Item(2,"soup", 25.00),
  new Item(3,"pizza", 40.00)
]


