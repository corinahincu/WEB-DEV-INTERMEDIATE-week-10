
const people = ['yoshi', 'ryu', 'chun-li', 'mario']
const ages = [20, 25, 30, 35]

console.log(people)

/* module.exports = people */ // to export one property

// or we can use an object and assign the properties as key value pairs in it , in that case we export more properties
module.exports = {
    people, ages
}