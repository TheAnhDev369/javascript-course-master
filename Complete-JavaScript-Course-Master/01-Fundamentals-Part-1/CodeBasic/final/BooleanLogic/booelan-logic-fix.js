const age = 16;

const A = age >= 20; // false, vì 16 < 20
const B = age < 30; // true, vì 16 < 30

console.log("A (age >= 20):", A); // false
console.log("B (age < 30):", B); // true

console.log("!A:", !A); // true
console.log("A && B:", A && B); // false
console.log("A || B:", A || B); // true
console.log("!A && B:", !A && B); // true
console.log("A || !B:", A || !B); // false
