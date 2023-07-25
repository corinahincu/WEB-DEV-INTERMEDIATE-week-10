
const { people, ages } = require('./people')

console.log(people, ages)

const os = require('os')

console.log(os.platform(), os.homedir()) 
// that is useful if you want to find info about operation system

/* console.log(people) */
// people is not defined
// so we can only access it from the file people, but if we want to access them from the modules file, we have to manually export them , which we can do by writting in the people's file : module.exports = people
// but we can export manually more properties