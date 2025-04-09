/**
 *  Giá trị trung thực và giá trị giả dối trong JS.
 *  Về cơ bản các giá trị Falsy không chính xác là False,
 *  nhưng sẽ chuyển thành False khi chúng ta cố gắng chuyển đổi chúng thành 1 Boolean.
 *
 *  Và trong JS, chỉ có 5 giá trị sai (5 falsy values):
 *  0, '', undifined, null, NaN, false(hiển nhiên).
 *  Khi ta cố gắng chuyển đổi chúng thành Boolean, chúng sẽ được chuyển đổi thành False.
 *  Ban đầu không chính xác là là False, nhưng khi được chuyển đổi sang Boolean, chúng chắc chắn sẽ thành False.
 *  Tóm lại, đó là định nghĩa của các giá trị giả.
 *
 *  Ngoài 5 giá trị gải này, mọi thứ khác đầu là cái gọi là giá trị trung thực.
 *  Các giá trị sẽ được chuyển đổi thành True.
 *  Ví dụ:  Bất kỳ số nào không phải số 0 hoặc bất kỳ chuỗi nào không phải chuỗi rỗng sẽ được chuyển đổi thành True
 *  Khi cố gắng chuyển đổi chúng thành Boolean, chúng sẽ được chuyển đổi thành True.
 */
//  Giống với String và Number, ta cũng có thể sử dụng sẵn hàm Boolean
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
// =>  False

console.log(Boolean("True"));
console.log(Boolean({}));
console.log(Boolean(1));
console.log(Boolean(2));
console.log(Boolean([1]));
// => True

//  Trong thực tế, ít khi dùng đến cái này, và việc chuyển đổi sang boolean luôn tiềm ẩn, không rõ ràng
//  Hay nói cách khác là luôn được máy đánh kiểu mà JS thực hiện tự động sau hậu trường.

//  Chính xác là khi nào JS thực hiện việc nhập lệnh ép buộc vào Boolean ?
/**
 *  Có 2 tình huống:
 *  Sử dụng toán tử logic
 *  Trong ngữ cảnh logic(chẳng hạn như câu điều kiện if-else)
 */

//  Ví dụ 1:
//  Giả sử rằng ta đang có 1 biến tiền và ban đầu ta không có tiền.
const money = 0; //  Tiền là 1 con số, và type của nó là number, giá trị là 0
if (money) {
  console.log("Don't spend it all");
} else {
  console.log(`You should get a job !`);
}
//  Trong ngữ cảnh của if-else, JS sẽ cố gắng ép buộc bất kỳ giá trị nào vào 1 boolean
//  Vì vậy, bất kỳ khi nào ta đặt giá trị hay biến gì vào điều kiện if-else mà không phải Boolean,
//  JS sẽ cố gắng chuyển nó thành Boolean.
//  =>  Điều đó xảy ra bằng cách sử dụng các quy tắc giá trị trung thực và giả dối.
//  Ta biết rằng ở ví dụ trên, tiền (money) là số 0, và số 0 là 1 giá trị giả.
//  Vì vậy, trong môi trường logic ở đây trong điều kiện này, số 0 sẽ được chuyển thành sai(False).
//  Giống như khi ta chuyển đổi nó bằng 0 thành Boolean với hàm Boolean theo cách thủ công.
//  Vì vậy mà ở điều kiện if, chuyển đổi này thành Boolean và trả về False
//  Tiền cũng tương tự khi mà bằng 0, và số 0 chuyển thành False vì đó là 1 giá trị giả.
//  Và kết quả là khối else được thực thi thay vì khối if.

//  Ví dụ 1:
//  Giả sử rằng ta đang có 1 biến tiền và ban đầu ta không có tiền.
const money1 = 2; //  Tiền là 1 con số, và type của nó là number, giá trị là 0
if (money1) {
  console.log("Don't spend it all !");
} else {
  console.log(`You should get a job !`);
}
//  Nếu ta chuyển đổi số 0 thành 1 thứ gì đó và không quan trọng con số (2 chẳng hạn)
//  2 là 1 giá trị trung thực, và vì vậy, điều kiện này sẽ đúng
//  Và khối if được thực thi.

//  Ví dụ 3:
let height = 0; //   Undifined (falsy => false) ở điều kiện của if => chạy khối else.
// height = "1.90"; //  1.90 (truthly => true) ở điều kiện của if => chạy khối if .
if (height) {
  console.log("YAY, height is defined");
} else {
  console.log("Height is UNDIFINED");
}
