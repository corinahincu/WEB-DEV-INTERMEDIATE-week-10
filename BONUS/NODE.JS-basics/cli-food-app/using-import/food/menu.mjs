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

import Item from "./Item.mjs";

export const menu = [
  new Item("salad", 15.0),
  new Item("soup", 25.0),
  new Item("pizza", 40.0),
  // Add more items here if needed
];


