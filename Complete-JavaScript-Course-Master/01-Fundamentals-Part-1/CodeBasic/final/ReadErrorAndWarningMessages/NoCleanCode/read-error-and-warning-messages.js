//  Lỗi cú pháp khi đặt tên biến
//  -   Uncaught SyntaxError: Invalid or unexpected token ... (at read-error-and-warning-messages.js:3:5)
//  -   3:5 là lỗi tại dòng 3, cột 5, đếm theo ký tự
//  -   Lỗi này được hiển thị trong bảng điều khiển, mặc dù ta không sử dụng console.log() để hiển thị lỗi.

//  Ví dụ 1:
// let 3years = 2025;   // Sai
let ThreeYears = 2025; // Đúng

//  Ví dụ 2:
// let year&month = 032025; // Sai vì tên biến không được chưa ký tự &
let yearAndMonth = 32025; // Đúng vì tên biến khôgn có ký tự & và viết theo kiểu camelCase
let YearAndMoth = 0o32025; // Đúng nếu có hậu tố o sau số 0
/**
 * (ChatGPT)
 * Octal literals are not allowed. Use the syntax '0o32025'
 * Thông báo lỗi này có nghĩa là bạn đang cố gắng sử dụng một số bát phân (octal literal) không hợp lệ trong JavaScript.
 * Trong JavaScript, nếu một số bắt đầu bằng 0 và không có hậu tố o, nó sẽ bị hiểu là một số bát phân (octal)
 * Tuy nhiên, từ ES5 trở đi, chế độ nghiêm ngặt (strict mode) không cho phép sử dụng cú pháp octal cũ.
 */

//  Ví dụ 3:
// let x = 100;
console.log(x);
let x = 100; //  Number
//  Lỗi tham chiếu khi không thể sử dụng một biến trước khi khai báo.
//  Uncaught ReferenceError: Cannot access 'x' before initialization
//  at files:row:column
//  Row là dòng, column là cột.

//  Ví dụ 4:
// let h = "string";
console.log(h);
//  -   Uncaught ReferenceError: h is not defined
//      at <anonymous>:1:13
//  -   Lỗi tham chiếu xảy ra khi biến chưa được khai báo hay định nghĩa trước khi sử dụng.
//  -   Lỗi này xảy ra vì nó đang tìm kiếm 1 biến không tồn tại hoặc chưa định nghĩa, nếu ta định nghĩa trước console.log(h) sẽ hết lỗi.
//  -   Nhớ là sau console.log() và gọi là định nghĩa trước rồi mới sử dụng biến đã khai báo trước đo, vì JS chạy từ trên xuống dưới.
//  -   Vì JS chạy từ trên xuống dưới nên nếu thằng trên sai là thằng dưới không chạy được.
/**
 * Phần at <anonymous>:1:13 trong thông báo lỗi có nghĩa là:
    <anonymous>: 
 * Lỗi xảy ra trong một đoạn mã không có tên hàm, thường là trong console hoặc một script không đặt tên.
    :1:13: Lỗi xảy ra ở dòng 1, cột 13 của mã nguồn.
 */

//    Ví dụ 5:
//    Uncaught ReferenceError: teacher is not defined
//    at string-and-template-literals.js:71:55
//    Tương tự ví dụ 4

//    Ví dụ 6:
// Uncaught ReferenceError: century is not defined
// at if-else-statements.js:140:13
// -   Lỗi này xảy ra vì nó đang tìm kiếm 1 biến không tồn tại hoặc chưa định nghĩa, hoặc do phạm vi truy cập của biến đó.
// if (birthYear3 <= 2000) {
//    let century = 20;
//    }

// else {
//    let century = 21;
// }
// console.log(century);
