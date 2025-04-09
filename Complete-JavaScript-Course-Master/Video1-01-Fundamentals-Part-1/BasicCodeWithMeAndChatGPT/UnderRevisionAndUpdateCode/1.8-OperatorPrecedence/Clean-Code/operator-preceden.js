//  Ví dụ 1:
const now = 2112;
let ageTheAnh = now - 2004;
let ageGirlFriend = now - 2003;
console.log(ageTheAnh); //108
console.log(ageGirlFriend); //109
console.log(now - 2004 < now - 2003); //108 < 109

//  Ví dụ 2:
console.log(25 - 10 - 5); // 10

//  Ví dụ 3:
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

//  Ví dụ 4:

//  Đúng
const averageAgeTrue = (ageTheAnh + ageGirlFriend) / 2;
console.log(ageTheAnh); // 108
console.log(ageGirlFriend); // 109
console.log(averageAgeTrue); // 108.5

//  Sai
const averageAgeFalse = ageTheAnh + ageGirlFriend / 2;
console.log(averageAgeFalse); // 162.5
