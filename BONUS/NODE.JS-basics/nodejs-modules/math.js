// HW1 : refactor code -> arrow functions (compact)
// HW2 : anonymous vs named functions ?

/* two ways of writing a functions
1:
module.exports.add = function (a,b){
  return a+b;
}
2:
function add(a,b){
  return a+b
}
module.exports.add = add

module.exports.sub = function (a, b) {
  return a - b;
}
module.exports.mul = function (a, b) {
  return a * b;
}
module.exports.div = function (a, b) {
  return a / b;
} */

// HW1 : refactor code -> arrow functions (compact)

module.exports = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => a / b,
};

// HW2 : anonymous vs named functions ?
/* 
ambele metode au acelasi rezultat, adica sa adauge functia "add" si sa o exporteze folosing module.exports. 
Diferentele sunt ca sunt definite in mod diferit. 
Functia anonima, este definita fara un function name, si este de obicei utilizata ca o function expression, de exemplu este assigned to a variable, sau este utilizat as a callback function. Sunt des utilizate cand este nevoie de ele immediately, fara intentie de a le refolosi
In schimb named functions,are function name si sunt utilizate cand functia poate fi reutilizata de mai multe ori, sau cand trebuie de facut o referinta la functie cu acest nume in diferite parti ale codului sau in acelasi scope.
*/