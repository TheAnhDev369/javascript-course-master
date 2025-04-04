//  Ví dụ 1:
const age = 18;
const age1 = 17;
if (age === 18) console.log("Bạn vừa đủ tuổi thành người lớn (Strict)");
if (age1 === 17) console.log("Bạn chưa đủ tuổi thành người lớn (Strict)");

//  Ví dụ 2:
if (age == "18") console.log("Bạn vừa đủ tuổi thành người lớn (loose)");
if (age1 == "17") console.log("Bạn chưa đủ tuổi thành người lớn (loose)");

//  Ví dụ 3:
const favouriteNumber3 = prompt(`What is your favourite number ?
    (Loose)`);
console.log(typeof favouriteNumber3);
if (favouriteNumber3 == 9) {
  console.log("Đây là chuỗi số 9");
} else {
  console.log("Đây không phải chuỗi (String) số 9");
}
//  Ví dụ 4:
const favouriteNumber4 = Number(
  prompt(`What is your favourite number ?
    (Strict)`)
);
if (favouriteNumber4 === 9) {
  console.log("Đây là số 9 (Number)");
} else {
  console.log(`Đây không phải số 9`);
}

//  Ví dụ 5:
const favouriteNumber5 = Number(prompt("What is your favourite number ?"));
if (favouriteNumber5 === 21) {
  console.log("Cool! 21 is an amazing number");
} else if (favouriteNumber5 === 7) {
  console.log("7 is also cool number!");
} else if (favouriteNumber5 === 9) {
  console.log(`9 is absolute cool number`);
} else {
  console.log(`Number is not 21 or 7 or 9`);
}

//  Ví dụ 6:
const favouriteNumber6 = prompt("Difference number (Strict): ");
if (favouriteNumber6 !== "5") {
  console.log("The number you entered is definitely not equal to 5.");
} else {
  console.log("The number you entered is 5.");
}
//  Ví dụ 7:
const favouriteNumber7 = prompt("Choose diference number (Loose): ");
if (favouriteNumber7 != 6) {
  console.log("The number you entered is definitely not equal to 6");
} else {
  console.log("The number you entered is 6");
}

//  Ví dụ 8:
const favouriteNumber8 = prompt("Difference number: ");

if (favouriteNumber5 !== 5) {
  console.log("Why not 5?");
} else if (favouriteNumber5 !== "6") {
  console.log("Why not 6");
} else {
  console.log("Why not 100");
}
