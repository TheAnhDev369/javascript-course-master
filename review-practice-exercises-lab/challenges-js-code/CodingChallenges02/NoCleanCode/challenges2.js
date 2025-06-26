/**
 * Thử thách lập trình số 2
 * Sử dụng ví dụ BMI từ Thử thách số 1 và mã bạn đã viết, và cải thiện nó.
 * Nhiệm vụ của bạn:
 * 1. In một đầu ra đẹp mắt vào bảng điều khiển, cho biết ai có BMI cao hơn.
 * Thông báo là "BMI của Mark cao hơn John!" hoặc "BMI của John cao hơn Mark!"
 * 2. Sử dụng một mẫu theo nghĩa đen để đưa các giá trị BMI vào đầu ra.
 * Ví dụ: "BMI của Mark (28,3) cao hơn John (23,9)!"
 * Gợi ý: Sử dụng câu lệnh if/else 😉
 * CHÚC MAY MẮN 😀
 */
//  Lần 1:  Nên viết trực tiếp điều kiện vào if thay vì để nó trong biến
//  Data 1:
const masskMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = masskMark / heightMark ** 2; // 27.309968138370508
const BMIJohn = massJohn / heightJohn ** 2; // 24.194608809993426
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

const whoBMIHigher = BMIMark < BMIJohn;
//  nghĩa là kiểm tra nếu Mark thấp hơn John, dẫn đến sai kết quả => false và code trong if sẽ không chạy, chạy khối else.
//  Nếu dùng dấu > thì logic sẽ đúng => true và in ra if
if (whoBMIHigher) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log(
    `Mark's BMI (28.3) is higher than John's (23.9)
    Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})
  `
  );
}

//  Lần 2
//  Data 2
const masskMark1 = 95;
const heightMark1 = 1.88;
const massJohn1 = 85;
const heightJohn1 = 1.76;

const BMIMark1 = masskMark1 / (heightMark1 * heightMark1); //    Công thức 2: BMI = cân nặng / (chiều cao x chiều cao);
const BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);
console.log(BMIMark1, BMIJohn1);

const markHigherBMI1 = BMIMark1 < BMIJohn1;
console.log(markHigherBMI1); //   True

//  26.87867813490267 27.44059917355372

//  TH1: Do BMIMark1 < BMIJohn1 => True => log ra khối if
//  TH2: Nếu BMIMark1 > BMIJohn1 => False => log ra khôi else
if (BMIMark1 > BMIJohn1) {
  console.log(`John's BMI is higher than Mark's!`);
} else {
  console.log(
    `Mark's BMI (${BMIMark1.toFixed(1)}) is higher than John's (${BMIJohn1})!`
  );
}

//  Lần 3:
const masskMark3 = 78;
const heightMark3 = 1.69;
const massJohn3 = 92;
const heightJohn3 = 1.95;

const BMIMark3 = masskMark3 / heightMark3 ** 2; // 27.309968138370508
const BMIJohn3 = massJohn3 / heightJohn3 ** 2; // 24.194608809993426
console.table({ BMIMark3, BMIJohn3 });

const markHigherBMI3 = BMIMark3 > BMIJohn3;
console.log(markHigherBMI3); //  27.3 > 24.1 => True

const johnHigherBMI3 = BMIMark3 < BMIJohn3; // 27.3 > 24.1 => 27.3 < 24.1 => false
console.log(johnHigherBMI3);

//  TH1: Do BMIMark3 > BMIJohn3 => True => log ra khối if
//  TH2: Nếu BMIMark3 < BMIJohn3 => False => log ra khối else

if (BMIMark3 < BMIJohn3) {
  console.log(`John's BMI is higher than Mark's!`);
} else {
  console.log(
    `Mark's BMI (${BMIMark3.toFixed(
      1
    )}) is higher than John's (${BMIJohn3.toFixed(1)})!`
  );
}

/**
 * ChatGPT
 * So sánh trong if (không cần biến trung gian)
 * if (BMIMark3 > BMIJohn3) {
 * console.log(`Mark's BMI is higher than John's!`);
 * } else {
 * console.log(`John's BMI is higher than Mark's!`);
 * }
 * ✅ Ngắn gọn, không cần thêm biến.
 * ❌ Nhược điểm: Nếu cần dùng lại kết quả so sánh nhiều lần, bạn phải lặp lại điều kiện BMIMark3 > BMIJohn3, gây dư thừa.
 *
 * Dùng biến so sánh trước rồi kiểm tra trong if
 * const markHigherBMI3 = BMIMark3 > BMIJohn3;
 * if (markHigherBMI3) {
 * console.log(`Mark's BMI is higher than John's!`);
 * } else {
 * console.log(`John's BMI is higher than Mark's!`);
 * }
 * ✅ Gọn hơn nếu cần dùng lại giá trị markHigherBMI3 nhiều lần.
 * ✅ Đọc code dễ hiểu hơn: Biến markHigherBMI3 mô tả rõ ràng điều kiện.
 * ✅ Dễ bảo trì: Nếu công thức so sánh thay đổi, chỉ cần sửa một chỗ (khai báo biến).
 *
 * Khi nào nên dùng biến so sánh?
 * ✔ Khi cần dùng lại giá trị so sánh nhiều lần trong code.
 * ✔ Khi muốn code rõ ràng hơn cho người đọc.
 * ✔ Khi điều kiện so sánh phức tạp.
 *
 * ⚠ Nếu chỉ dùng một lần duy nhất, thì so sánh trực tiếp trong if là đủ!
 *
 * Tóm lại:
 * Nếu chỉ kiểm tra một lần → Dùng trực tiếp trong if.
 * Nếu cần dùng nhiều lần hoặc muốn code dễ đọc hơn → Dùng biến so sánh. 🚀
 */
