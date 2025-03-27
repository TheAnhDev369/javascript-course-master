// ChatGPT

// Sử dụng toán tử typeof
// Sử dụng để kiểm tra dữ liệu của một giá trị hay hiển thị loại giá trị.
// Nó không phải là toán tử đặc biệt mà chỉ là 1 loại toán tử đơn giản như + hoặc -.
// typeof có thể đứng trước 1 giá trị mà không cần ngoặc đơn, giống như + hoặc - .
// typeof không hoạt động như một toán tử số học mà chỉ trả về chuỗi chứa kiểu dữ liệu của giá trị.
// typeof có thể đứng trước một giá trị mà không cần ngoặc đơn, tương tự như + hoặc -, nhưng trong một số trường hợp, dùng ngoặc đơn giúp đọc code dễ hơn.

// Ví dụ
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (đây là một lỗi lịch sử của JS)
console.log(typeof {}); // "object"
console.log(typeof function () {}); // "function"

// typeof không hoạt động như một toán tử số học mà chỉ trả về chuỗi chứa kiểu dữ liệu của giá trị.
// thể hiện qua ví dụ sau:

// Có ngoặc
console.log(typeof 10); // Number
console.log(+10);
console.log(-10);
// Không cần ngoặc
console.log(typeof 10); // Number
console.log(+10);
console.log(+10);
console.log(-10);
