
import { Food } from "./food/Food.mjs"
import { save, load } from './persistance/index.mjs'
let data = await load("./data/food.json")
console.log(data)
