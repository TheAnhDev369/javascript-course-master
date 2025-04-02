/**
 * Trong JavaScript, typeof là một toán tử dùng để
 * kiểm tra kiểu dữ liệu của một biến hoặc giá trị.
 * Nó trả về một chuỗi (string) biểu thị kiểu dữ liệu của toán hạng.
 */
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
