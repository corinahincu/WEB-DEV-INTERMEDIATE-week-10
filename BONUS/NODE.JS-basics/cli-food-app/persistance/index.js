
const fs = require('fs')
/* const Food = require('../food/Food') */
const map = require('./map')
/* const Food = require('../food/Food') */

// save to "name.txt"
/* let name = "Salad"
fs.writeFileSync("./data/name.txt", name) */

// plain object - nu are structura
/* let data = { name: "Salad"} */

/* let data = new Food("Salad") */

// SAVE TO FILE
module.exports.save = (object, path) => {
  object.type = object.constructor.name
  fs.writeFileSync(path, JSON.stringify(object));
}

// LOAD FROM FILE
module.exports.load = (path) => {
  let data = JSON.parse(fs.readFileSync(path).toString());
  const Clazz = require(map[data["type"]]);
  // pass all the properties
  let obj = new Clazz(data.name);
  return obj;
}
// read -> Buffer -> String -> {} - > Food {}

//load from "name. txt"
/* let name = fs.readFileSync("./data/name.txt")
console.log(name.toString()) */