// Ví dụ
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (đây là một lỗi lịch sử của JS)
console.log(typeof {}); // "object"
console.log(typeof function () {}); // "function"

// Có ngoặc
console.log(typeof 10); // Number
console.log(+10);
console.log(-10);
// Không ngoặc
console.log(typeof 10); // Number
console.log(+10);
console.log(+10);
console.log(-10);
