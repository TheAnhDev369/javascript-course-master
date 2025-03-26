//  Ví dụ về cáh đặt tên các biến
let myFullName = "Nguyễn Thế Anh";
let my_id = 1;
let MyAdress = "Hà Nội";

console.table({
  myFullName, // camelCase
  my_id, // kebab case
  MyAdress, // pascal case
});

//  Sử dụng console.table để hiển thị dữ liệu dưới dạng bảng trong console của trình duyệt hoặc Node.js.
//  Ứng dụng
//  Dễ đọc hơn so với console.log() khi làm việc với dữ liệu dạng mảng/object.
//  Hữu ích khi debug dữ liệu từ API.
//  Chỉ chấp nhận một đối số là một mảng hoặc một object.

//  Các quy tắc mềm
// 1. Sử dụng camelCase cho BIẾN VÀ HÀM(*)

// camelCase cho biến và hàm
let userID = 1;
function getUserId() {}

//  Pascal Case cho class và constructor
class UserProfiles {
  //    Ở đây, UserProfiles được viết PascalCase, vì nó là CLASS
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old .`);
  }
}
//  Sử dụng class
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

// Quy tắc cứng

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
let Number1 = 1; //  Đúng
let $variables = "Variables"; // Đúng

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

// 4.   Có phân biệt chữ hoa và chữ thường (case-sensitive)
let myVar = 20;
let MyVar = 10;
console.log(myVar); // 20
console.log(MyVar); // 10

// 5.  Không sử dụng dấu cách
// let my variables = "Dev"; // Sai
let myVariables = "DEV"; // Đúng
console.log(myVariables);
