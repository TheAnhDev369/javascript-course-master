// QUY TẮC MỀM //

let myFullName = "Nguyễn Thế Anh";
let my_id = 1;
let MyAdress = "Hà Nội";
console.table({
  myFullName,
  my_id,
  MyAdress,
});

//  1.  Sử dụng camelCase cho BIẾN VÀ HÀM(*)
let userID = 1;
function getUserId() {}

//  2.  Sử dụng camelCase cho CLASS và CONSTRUCTOR FUNCTION
//  CLASS
class UserProfiles {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old .`);
  }
}
const user = new UserProfiles("Anh", 21);
user.introduce();

//  CONSTRUCTOR FUNCTION
function Car(brand, model, color) {
  this.brand = brand;
  this.model = model;
  this.color = color;
}
const myCar = new Car("Mercedes", "Benz", "BlackWhite");
console.log(myCar.brand);
console.log(myCar.model);
console.log(myCar.color);

// 3.   Sử dụng UPPER_CASE cho hằng số
const MAX_LENGHT = 100;
console.log(MAX_LENGHT);

// QUY TẮC CỨNG //
// 1.  Không được bắt đầu bằng số hoặc có dấu -
// let 1years = 2020;
// let year-1 = 2021;
let year_1 = 2021;
let Year1 = 2023;
let yearOne = 2024;

console.table({
  year_1,
  Year1,
  yearOne,
});

let Year2025 = 2025;
console.table(Year2025);

// 2.  Chỉ được chứa các chữ cái (a-z,A-Z), số (0-9), dấu gạch dưới _ hoặc ký tự $.
let a_z = "a-z";
let AZ = "A-Z";
let Number1 = 1;
let $variables = "Variables";
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
// let new = 27;
// let function = 27;

//  Khắc phục
let _let = 100;
var $var = "Variables";
const _const = "DEV";
let $new = 27;
let _function = 27;
console.table({
  _let,
  $var,
  _const,
  $new,
  _function,
});
// 4.   Có phân biệt chữ hoa và chữ thường (case-sensitive)
let myVar = 20;
let MyVar = 10;
console.log(myVar);
console.log(MyVar);

//  5.  Không sử dụng dấu cách
// let my variables = "Dev"; // Sai
let myVariables = "DEV"; // Đúng
console.log(myVariables);
