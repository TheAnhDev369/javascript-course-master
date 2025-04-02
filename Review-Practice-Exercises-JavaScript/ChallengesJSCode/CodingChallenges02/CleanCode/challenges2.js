/**
 * Coding Challenge #2
 * Use the BMI example from Challenge #1, and the code you already wrote,
 * and improve it.
 *
 * Your tasks:
 * 1. Print a nice output to the console, saying who has the higher BMI.
 * The message is either "Mark's BMI is higher than John's!" or
 * "John's BMI is higher than Mark's!"
 *
 * 2. Use a template literal to include the BMI values in the outputs.
 * Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
 * Hint: Use an if/else statement 😉
 * GOOD LUCK 😀
 */

//  Data 1:
//  Mark mass and height
const masskMark1 = 78;
const heightMark1 = 1.69;

//  John mass and height
const massJohn1 = 92;
const heightJohn1 = 1.95;

//  Both BMIs Mark and John
const BMIMark1 = masskMark1 / heightMark1 ** 2; // Value: 27.309968138370508
const BMIJohn1 = massJohn1 / heightJohn1 ** 2; // Value: 24.194608809993426

//  Table value BMIs Mark and John
console.table({ BMIMark1, BMIJohn1 });

//  Mark Higher BMI
const markHigherBMI1 = BMIMark1 > BMIJohn1; //(BMIJohn1 < BMIMark1)
console.log(markHigherBMI1); //  True

/**
 * Nếu ta đã kiểm tra mark1 (BMIMark1 có cao hơn không ?)
 * thì kết quả của mark1 là true, vậy thì john chắc chắn sẽ là false
 * Vậy thì Mark có bmi cao hơn, nên việc kiểm tra John là không cần thiết
 */
//  John Higher BMI
// const johnHigherBMI1 = BMIJohn1 < BMIMark1; //(BMIJohn1 > BMIMark1)
// console.log(johnHigherBMI1); //  False
//  If Mark > John (BMIJohn1 < BMIMark1) or Else BMIMark1 < BMIJohn1 (BMIJohn1 > BMIMark1)

if (BMIMark1 > BMIJohn1) {
  //    27.3 > 24.1
  //    27.3 < 24.1
  console.log(
    `Mark's BMI ${BMIMark1.toFixed(1)} is higher than John's ${BMIJohn1.toFixed(
      1
    )}!`
  );
} else {
  console.log(
    `John's BMI (${BMIJohn1.toFixed(
      1
    )}) is higher than Mark's (${BMIMark1.toFixed(1)})!`
  );
}

// //  If John > Mark (BMIMark1 < BMIJohn1) or Else BMIJohn1 < BMIMark1 (BMIMark1 > BMIJohn1)
// if (BMIJohn1 < BMIMark1) {
//   //  24.1 > 27.3 => False
//   //  24.1 < 27.3 => True
//   console.log(`John's BMI is lower than Mark's!`);
// } else {
//   console.log(
//     `Mark's BMI (${BMIMark1.toFixed(
//       1
//     )}) is higher than John's (${BMIJohn1.toFixed(1)})!`
//   );
// }

//  Data 2
const masskMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark2 = masskMark2 / (heightMark2 * heightMark2);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log(
  `Mark's BMI: ${BMIMark2.toFixed(1)}, John's BMI: ${BMIJohn2.toFixed(1)}`
);
//  26.87867813490267 27.44059917355372

//  Kiểm tra xem ai có BMI cao hơn
const markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(markHigherBMI2); //   False

// const johnHigherBMI2 = BMIMark2 < BMIJohn2;
// console.log(johnHigherBMI2); //   True
/**
 * Nếu bạn đã kiểm tra markHigherBMI2 (BMI của Mark có cao hơn không?),
 * kết quả của markHigherBMI2 là false,
 * vậy thì John phải có BMI cao hơn,
 * nên việc kiểm tra johnHigherBMI2 là không cần thiết nữa.
 */
//  Kiểm tra điều kiện xem ai cao hơn
if (BMIMark2 > BMIJohn2) {
  console.log(`Mark's BMI ${BMIMark2} is higher than John's ${BMIJohn2}!`);
} else {
  console.log(
    `John's BMI (${BMIJohn2.toFixed(
      1
    )}) is higher than Mark's (${BMIMark2.toFixed(1)})!`
  );
}
