// menu functionality

/* module.exports.printMenu = (menu) => {
  menu.forEach( (item) => console.log(item.print())
  )
}

module.exports.printMessage = (message) => {
  console.log(` ${message} >> `)
} */

module.exports.printMenu = ( menu ) => {
menu.forEach(item => console.log(item.print()) )
}
module.exports.printMessage = (message) => {
console.log(`${message} >>`)
}