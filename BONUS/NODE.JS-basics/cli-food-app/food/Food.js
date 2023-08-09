// HW1: add field "id"
// HW2: make price -> {value:1.00, currency:"USD"}
// HW3: remake print() -> align

//1. salad         15.00MDL
//2. soup          25.00MDL
module.exports = class Item {
  constructor( name, price ){
    this.name = name
    this.price = price
  }

  print() { 
    return  `------------------------- \n` + 
            `${this.name}: ${this.price}MDL\n` +
            `------------------------- \n` 
  }
}