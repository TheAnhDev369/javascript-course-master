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

// Ví dụ 5:
// Năm sinh của tôi là 2004
const birthDay = 2004;
//  Nếu sau đó chúng ta cố gắng gán lại cho cái biến đó giá trị khác (giả sử như 2003)
//  thì nó sẽ không hoạt động.
//  Lỗi : Uncaught TypeError: Assignment to constant variable. at ...
//  Lỗi này xảy ra vì birthDay được khai báo bằng const,
//  tức là nó là một hằng số (constant) và không thể thay đổi sau khi đã được gán giá trị ban đầu.

//  Ví dụ 6:
// const job;
// Uncaught SyntaxError: Missing initializer in const declaration ...
