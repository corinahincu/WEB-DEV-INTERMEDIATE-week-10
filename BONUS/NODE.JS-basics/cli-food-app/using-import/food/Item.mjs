// HW1: add field "id" - done
// HW2: make price -> {value:1.00, currency:"USD"} - done
// HW3: remake print() -> align - done

//1. salad         15.00MDL
//2. soup          25.00MDL
/* export default class Item {
  constructor( name, price ){
    this.name = name
    this.price = price
  }

  print() { 
    return  `------------------------- \n` + 
            `${this.name}: ${this.price}MDL\n` +
            `------------------------- \n` 
  }
} */

export default class Item {
  constructor(id, name, priceValue, currency = "USD") {
    this.id = id;
    this.name = name;
    this.price = { value: priceValue, currency: currency };
  }

  // to align putem sa folosim string formatting techniques, folosing metoda padEnd(), aceasta metoda face in asa mod ca fiecare sectiune are un fixed width
  print() {
    const idWidth = `ID: ${this.id}`.padEnd(15)
    const nameWidth = `${this.name}`.padEnd(30)
    const priceWidth = `${this.price.value.toFixed(2)} ${this.price.currency}`

    return (
      `------------------------------------------- \n` +
      `${idWidth}${nameWidth}${priceWidth}\n` +
      `------------------------------------------- \n`
    )
  }
}
