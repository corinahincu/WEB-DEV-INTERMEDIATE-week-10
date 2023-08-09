
class A {}
class B {}

// ------------------
let a = new A()
let b = new B()

console.log(a,b)
console.log(typeof a, typeof b)
// reflection
console.log(a.__proto__,b.__proto__)
console.log(a.cpnstructor.name, b.constructor.name)