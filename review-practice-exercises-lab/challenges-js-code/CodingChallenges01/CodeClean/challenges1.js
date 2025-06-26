/**
   Coding Challenge #1
   Mark and John are trying to compare their BMI (Body Mass Index), which is
   calculated using the formula:
   BMI = mass / height ** 2 = mass / (height * height) (mass in kg
   and height in meter).
   Your tasks:
   1. Store Mark's and John's mass and height in variables
   2. Calculate both their BMIs using the formula (you can even implement both
   versions)
   3. Create a Boolean variable 'markHigherBMI' containing information about
   whether Mark has a higher BMI than John.
   Test data:
   § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
   m tall.
   § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
   m tall.
   GOOD LUCK !
 */

// Data 1:
// C1
const masskMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
// C2
const BMIMark = masskMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
// C3:
const markHigherBMI = BMIMark > BMIJohn;//    True
console.log(markHigherBMI);

//  Data 2:
const masskMark2 = 95;      
const heightMark2 = 1.88;   
const massJohn2 = 85;
const heightJohn2 = 1.76;
const BMIMark2 = masskMark2 / heightMark2 **2;
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
const markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(BMIMark2, BMIJohn2, markHigherBMI2);
