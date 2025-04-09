//  1.  Toán tử Số Học
//  Sử dụng toán tử Trừ để tính tuổi dựa trên năm sinh của 1 người.
const ageTheAnh = 2112 - 2004;
const ageMyGirlfriendsFutures = 2112 - 2004;

console.log(ageTheAnh); //  108
console.log(ageMyGirlfriendsFutures); // 108
console.log(ageTheAnh, ageMyGirlfriendsFutures);

//  Ví dụ 2:
const now = 2112;
const ageTheAnh1 = now - 2004; // 108
const ageMyGirlfriendsFutures1 = now - 2004; // 108
console.table({
  ageTheAnh1,
  ageMyGirlfriendsFutures1,
});

//  Ví dụ 3:
console.log(ageTheAnh * 2, ageTheAnh1 / 2, ageMyGirlfriendsFutures + 1, 2 ** 3);

//  Ví dụ 4:
//  Nối chuỗi tên của tôi
const firstName = "Thế Anh";
const lastName = "Nguyễn";
console.log(lastName + " " + firstName); // Nguyễn Thế Anh

//  2.  Toán tử Gán (Assignment Operators)
//  =, +=, -=, *=, /=, %=, **=

//  Ví dụ 5:
let x = 10 + 5; // 15
console.log(x);

//  Ví dụ 6:
x += 10; //  25
console.log(x);

//  Ví dụ 7:
x -= 5; //  20
console.log(x);
x *= 4; //  80;
console.log(x);
x /= 2; //  40;
console.log(x);
x %= 3; //   1;
console.log(x);
x **= 3; //  1;
console.log(x);

//  Toán tử x++
x++;
console.log(x); // 2
x--;
console.log(x); // 1

//  3.  Toán tử So sánh      (Comparison Operators)
//  ==, ===, !=, >, <, >=, <=

//  Ví dụ 8:
console.log(ageTheAnh > ageMyGirlfriendsFutures + 1); //  False
console.log(ageTheAnh1 < ageMyGirlfriendsFutures + 1); // True

//  Ví dụ 9:
console.log(ageMyGirlfriendsFutures >= 18); //   True
console.log(ageMyGirlfriendsFutures1 <= 18); //  False

//  Ví dụ:  Chỉ in ra console (không lưu lại):
console.log(5 + 3);
//  Ví dụ:  Lưu vào biến và để dùng sau:
let sum = 5 + 3;
console.log(sum);
console.log(sum * 3);

//  Ví dụ 10:
const isFullAge = ageMyGirlfriendsFutures >= 18;
console.log(isFullAge);

//  Ví dụ 11:
// Rút gọn
console.log(now - 2004 > now - 2004);

//  Chưa rút gọn
//  const now = 2112;.
//  const ageTheAnh1 = now - 2004;
//  const ageMyGirlfriendsFutures1 = now - 2004;
//  console.log(ageTheAnh1 > ageMyGirlfriendsFutures1);
