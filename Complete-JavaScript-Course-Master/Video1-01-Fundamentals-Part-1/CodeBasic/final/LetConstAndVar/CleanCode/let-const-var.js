//  Ví dụ 1:
let age = 20; // Sử dụng let để khai báo biến
age = 21; // Biến có thể thay đổi (Dynamic typing)
console.log(age);

//  Ví dụ 2:
const birthDay = 2004; //    const là bất biến
// birthDay = 2003;//   Khôgn hoạt động
console.log(birthDay); //    2004

//  Ví dụ 3:
//  const job;// const cần có giá trị khởi tạo mới dùng được
const type = "Human";
//  console.log(job);
console.log(type);

//  Ví dụ 4:
const myBirthDay = 2004;
const myAgeNow = 21;
console.table({
  myBirthDay,
  myAgeNow,
});

//  Ví dụ 5:
var job = "programmer";
job = "teacher";
console.log(job);

//  Ví dụ 6:
lastName = "Nguyễn";
console.log(lastName);
//  Đúng nhưng không nên

const myFullName = "Nguyễn Thế Anh";
console.log(myFullName);
//  Đúng và có khai báo đầy đủ biến với từ khoá + tên biến = giá trị;
