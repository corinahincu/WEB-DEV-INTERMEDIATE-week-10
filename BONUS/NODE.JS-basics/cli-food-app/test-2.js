
const Food = require("./food/Food")
const {save,load} = require('./persistance')
/* save(new Food("Salad"),"./data/food.json" ) */
let data = load("./data/food.json")
console.log(data)
/* let data = load()
console.log(data.print()); */