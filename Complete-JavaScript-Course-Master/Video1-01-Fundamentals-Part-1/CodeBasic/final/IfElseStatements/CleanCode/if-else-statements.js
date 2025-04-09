//  Ví dụ 1:
/**
 *  Viết 1 chương trình kiểm tra xem một người
    có được phép thi lấy bằng lái xe hay không.
 *  Đúng => In ra bảng điều khiển
 *  Sai  => In ra bao nhiêu năm còn lại cho đến khi người đó bắt đầu thi lấy bằng lái xe !
 */
//  isOldEnough là đủ tuổi
const age1 = 19;
const age2 = 17;
const isOldEnough1 = age1 >= 18;
const isOldEnough2 = age2 >= 18;

if (isOldEnough1) {
  console.log(`Thế Anh đủ tuổi lấy bằng lái xe 🚗
The Anh can start driving license 😎`);
}
//  Vì 19 > 18 => Đúng điều kiện => log ra

if (isOldEnough2) {
  console.log(`Thế Anh đủ tuổi lấy bằng lái xe 🚗
  The Anh can start driving license 😎`);
} //  Do 17 < 19 => sai điều kiện => không log ra.

//  Ví dụ 2:
const age3 = 21;
const age4 = 12;

if (age4 >= 18) {
  console.log(`Đủ tuổi lái xe`);
} //  Log

if (age4 >= 18) {
  console.log("Đủ tuổi");
} else {
  console.log("Chưa đủ tuổi");
}
//  Do 12 < 18 => bỏ qua khối if và chạy tuỳ chọn khối else => log

//  Ví dụ 3:
//  Tính toán xem còn bao nhiêu năm nữa để theanhC2 bắt đùa lấy được bằng lái xe.
//  yearLeft là năm còn lại
const age5 = 17;
if (age5 >= 18) {
  console.log("Thế anh đủ tuổi lái xe"); //  Do 17 < 18 => False, bỏ qua khối if, chạy khối else
} else {
  const yearLeft = 18 - age5;
  console.log(`Còn ${yearLeft} nằm còn lại để đến tuổi có thể lấy bằng lái xe :) 
    theanhC2 is too young. Wait another ${yearLeft} years :) `);
}

//  Ví dụ 4:
const age6 = 10;
if (age6 >= 18) {
  console.log(`Đủ tuổi lái xe 🚗`);
}
console.log("Chưa đủ tuổi lái xe 😊");

//  Ví dụ 5:
//  Tạo 1 biến có điều kiện và khôgn sử dụng console.log() trong khôi điều kiện;
const birthYear2 = 1997;
const birthYear3 = 2004;

if (birthYear2 <= 1999) {
  console.log(`Đây là những năm thuộc thế kỷ 20`);
} else {
  console.log(`Đây là những năm thuộc thế kỷ 21`);
}
// Do 1997 < 1999 thay vì >= 1999 => Output: 20, nếu sửa birthYear2 thành 2003 => Output là 21
//  Lỗi
if (birthYear3 <= 2000) {
  let century = 20; //   century = thế kỷ, thế kỷ 20
} else {
  let century = 21; //   Thế kỷ 21
}
console.log(century);
// Lỗi biến chưa được khai báo hoặc định nghĩa hay do phạm vi truy cập.

//  Cách sửa lỗi
let century;
if (birthYear2 <= 2000) {
  century = 20; //   century = thế kỷ, thế kỷ 20
} else {
  century = 21; //   Thế kỷ 21
}
console.log(century);
// Output: Thế kỷ 20
