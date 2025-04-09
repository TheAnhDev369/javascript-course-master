//  Ví dụ về cách đặt tên các biến
let myFullName = "Nguyễn Thế Anh";
let my_id = 1;
let MyAdress = "Hà Nội";

console.table({
  myFullName, // camelCase
  my_id, // kebab case
  MyAdress, // pascal case
});

//  Sử dụng console.table để
//  hiển thị dữ liệu dưới dạng bảng trong console của trình duyệt hoặc Node.js.

//  Ứng dụng
//  Dễ đọc hơn so với console.log()
//  khi làm việc với dữ liệu dạng mảng/object.
//  Hữu ích khi debug dữ liệu từ API.
//  Chỉ chấp nhận một đối số là một mảng hoặc một object.

//  Các quy tắc mềm
// 1. Sử dụng camelCase cho BIẾN VÀ HÀM(*)

// camelCase cho biến và hàm
let userID = 1;
function getUserId() {}

//  2.  Sử dụng camelCase cho CLASS và CONSTRUCTOR FUNCTION

//  Pascal Case cho class và constructor
class UserProfiles {
  //  Ở đây, UserProfiles được viết PascalCase, vì nó là CLASS
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old .`);
  }
}
//    Sử dụng class
const user = new UserProfiles("Anh", 21);
user.introduce();

function Car(brand, model, color) {
  //  Ở đây, Car được viết PascalCase, vì nó là constructor function
  this.brand = brand;
  this.model = model;
  this.color = color;
}
const myCar = new Car("Mercedes", "Benz", "BlackWhite");
console.log(myCar.brand);
console.log(myCar.model);
console.log(myCar.color);

// 3.   Sử dụng UPPER_CASE cho hằng số, const không thay đổi giá trị

const MAX_LENGHT = 100;
console.log(MAX_LENGHT);
const PI = 3.14;
console.log(PI);

// Các quy tắc cứng

// 1.  Không được bắt đầu bằng số
// let 1years = 2020; Sai
// let year-1 = 2021; Sai

let year_1 = 2021; // Đúng
let Year1 = 2023; // Đúng
let yearOne = 2024; // Đúng

console.table({
  year_1,
  Year1,
  yearOne,
});

let Year2025 = 2025;
console.table(Year2025);

// 2.  Chỉ được chứa các chữ cái (a-z,A-Z), số (0-9), dấu gạch dưới (\_) hoặc ký tự $

let a_z = "a-z"; // Đúng
let AZ = "A-Z"; // Đúng,
//  Quy ước đặt tên trong lập trình thường dùng biến viết hoa (UPPER_CASE) để đại diện cho hằng số (constants).
//  Có thể VSCode đang hiểu AZ như một constant và tô màu khác.
let Number1 = 1; //  Đúng, tuy nhiên không nên dùng để đặt tên biến, mà nên sử dụng chữ cái viết hoa này cho 1 trường hợp sử dụng cụ thể, đó là lập trình hướng đối tượng.
let $variables = "Variables"; // Đúng

//  Nên đặt tên biến bắt đầu bằng chữ thường,và sau đó là chữ hoa .
let userName = "Nguyen The Anh";
console.log(userName);

console.table({
  a_z,
  AZ,
  Number1,
  $variables,
});

// 3.  Không được trùng với từ khoá Js (Reserved Keywords)

// let let = 100;
// var var = "Variables";
// const const = "DEV";
// Trong JS, có 1 hoặc nhiều keywords khác đặc biệt như "name" có thể sử dụng đặt tên biến
// tuy nhiên, điều này có thể gây ra vấn đề vì chúng liên quan đến đối tượng toàn cục (window) .
let name = "The Anh"; // Hoạt động tốt, tuy nhiên vì là keywords của JS nên vẫn có 1 số trường hợp tạo ra các vấn đề.
//  Vì vậy, không nên đặt tên biến trùng với các từ khoá này, mà thay vào đó (Hãy sử dụng camelCase hoặc thêm tiền/hậu tố như _, $
//  để tránh xung đột không mong muốn (FixByMeAndChatGPT)
// name, length, event, top, self, status,.. các keywords phổ biến nên tránh dùng trong JS

//  Ví dụ:
console.log(name); //  "The Anh"
console.log(name.window); // underfined

// 4.   Có phân biệt chữ hoa và chữ thường (case-sensitive)

let myVar = 20;
let MyVar = 10;
console.log(myVar); // 20
console.log(MyVar); // 10

//  5.  Đặt tên biến không được chứa dấu cách

// let my variables = "Dev"; // Sai
let myVariables = "DEV"; // Đúng
console.log(myVariables);

//  6.  Đảm bảo tên biến là mô tả

//  Điều này quan trọng để viết mã sạch hơn.
//  Khi đặt tên cho các biến của mình, ta phải thực sự dễ dàng hiểu chính xác giá trị
//  mà biến đang giữu bằng cách đọc tên của biến .

//  Ví dụ 1:
let myFirstJob = "Programmer"; //  Tên biến có ý nghĩa là Công việc đầu tiên của tôi
let myCurerentJob = "Project Manager"; //  Công việc hiện tại của tôi
console.table({
  myFirstJob,
  myCurerentJob,
});

// VD2:
let job1 = "programmer"; // Đơn giản là công việc 1
let job2 = "pm"; //  Và công việc 2, nghĩa mô tả ít hơn, ta khôgn biết gì chi tiết hơn về chúng như vd1.

//  Ta có thể thấy cách đặt tên biến của ví dụ 1 nhiều mô tả hơn ví dụ 2
//  Nên cách đặt tên biến có ý nghĩa là cách tiếp cận tốt hơn rất nhiều so với đặt tên biến khô khan .
//  Bất cứ khi nào đặt tên biến, nên ghi nhớ tất cả các điều này
