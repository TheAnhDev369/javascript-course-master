//  Type conversion
//  Ví dụ 1:
const inputYear1 = "2004";
console.log(inputYear1 + 21);
console.log(Number(inputYear1) + 21); // 2004 + 21 = 2025

//  Ví dụ 2:
console.log(Number("The Anh")); //   NaN

//  Ví dụ 3:
console.log(typeof NaN); //number
const myName = Number("The Anh");
console.log(typeof myName); //   number

//  Ví dụ 4:
console.log(String(21)); // '21'

//  Type coercion

console.log("I'm " + 23 + " years old."); //(*)I'm 23 years old
console.log("I'm " + "23" + " years old."); // Tương tự
console.log("I'm " + String(23) + " years old."); //(*)I'm 23 years old

//  Ví dụ 5:
console.log("23" - "10" - 3); //10

//  Ví dụ 6:
console.log("23" * "2");
console.log("23" / "3");

//  Ví dụ 7:
let n = "1" + 1; // '11'
n = n - 1;
console.log(n); // 10

let y = "10" + 21 - 11; //1010
console.log(y);

//  ChatGPT: Ví dụ về NaN
//  Các tình huống tạo ra NaN:

//  Khi chgia cho 0:
let result = 0 / 0; //   NaN

//  Khi cố gắng chuyển đổi một giá trị không phải là số thành số:
let result1 = Number("Dev"); //  NaN

//  Khi thực hiện phép toán với giá trị không hợp lệ:
let result2 = Math.sqrt(-1); //  NaN
console.log(result, result1, result2);

isNaN(NaN); //  True
isNaN(result1); //  True
Number.isNaN(); //  False, nếu không truyền tham số, thì là undifined, mà undifined khác NaN=> false
Number.isNaN("Hello"); //  False, ""
console.log(isNaN(NaN), isNaN(result1), Number.isNaN(), Number.isNaN("Hello"));

//  Một số phép toán có thể trả về NaN:
let x1 = 0 / 0; // NaN
let y1 = Math.log(-1); // NaN
let z1 = "string" - 1; // NaN
