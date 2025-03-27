//  Lỗi cú pháp khi đặt tên biến
//  Uncaught SyntaxError: Invalid or unexpected token ...

//  Ví dụ 1:
// let 3years = 2025;
let ThreeYears = 2025;

//  Ví dụ 2:
// let year&month = 032025;
let yearAndMonth = 32025;
let YearAndMoth = 0o32025;

//  Ví dụ 3:
// let x = 100;
console.log(x);
let x = 100; //  Number
//  Lỗi tham chiếu khi không thể sử dụng một biến trước khi khai báo.
//  Uncaught ReferenceError: Cannot access 'x' before initialization

//  Ví dụ 4:
// let h = "string";
console.log(h);
//  -   Uncaught ReferenceError: h is not defined
//  -   Lỗi tham chiếu xảy ra khi biến chưa được khai báo hay định nghĩa trước khi sử dụng.
