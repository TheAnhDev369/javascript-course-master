//  Tạo 1 chuỗi chứa thông tin chi tiết về tôi.
const firstName = "Nguyen The Anh";
const myJob = "Project Manager and Developer";
const birthYear = 2004;
const myAge = 2025 - birthYear;
const year = 2025;

//  myInfo1
const myInfo =
  "I'm " +
  firstName +
  " ,a " +
  (year - birthYear) +
  " years old." +
  "I'm a " +
  myJob +
  ".";

//  myInfo1
const myInfo1 =
  "I'm " +
  firstName +
  ", a " +
  "I'm " +
  firstName +
  "." +
  "My first Job is " +
  myJob +
  "." +
  "I'm " +
  myAge +
  " years old";
console.log(myInfo, myInfo1);

const myNewInfo = `I'm ${firstName}. I'm ${myAge} years old. I'm a ${myJob}.`;
console.log(myNewInfo);
//  I'm Nguyen The Anh. I'm 21 years old. I'm a Project Manager and Developer.

const nameJob = "Developer";
const message = `Hello, I'm a ${nameJob}. Welcome  ${firstName} !`;
console.log(message);

console.log(`Just a regular string`);
//  Nhiều nhà phát triển đã bắt đầu sử dụng dấu ngoặc kép ngược cho tất cả các chuỗi, vì sau đó ta không cần phải nghĩ xem ta nên dùng dấu ngoặc hay ngoặc kép.
//  Ta chỉ cần luôn luôn dùng dấu ngoặc kép ngược cho cá chuỗi thay vì suy nghĩ nên dùng "" hay ''

//  Ví dụ 2:  Tạo các chuỗi nhiều dòng với Template Strings
console.log("String with \n "); // Trước ES6
console.log(
  "String 1 with \n\
  lines \n\
  multi lines \n\
"
);

console.log(`String 2 with
JavaScript
and
HTML-CSS
`); // Từ ES6 trở đi
