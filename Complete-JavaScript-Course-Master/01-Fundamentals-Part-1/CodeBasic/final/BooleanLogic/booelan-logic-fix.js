// Ví dụ thực tế
// Giả sử bạn có một biến age = 16, và bạn muốn kiểm tra điều kiện sau:

// A: Tuổi lớn hơn hoặc bằng 20 => age >= 20

// B: Tuổi nhỏ hơn 30 => age < 30
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
