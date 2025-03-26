//  Ví dụ về cáh đặt tên các biến
let myFullName = "Nguyễn Thế Anh";
let my_id = 1;
let MyAdress = "Hà Nội";

console.table({
  myFullName, // camelCase
  my_id, // kebab case
  MyAdress, // pascal case
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

//  HẰNG SỐ
const MAX_LENGHT = 100;
console.log(MAX_LENGHT);

//  Đặt tên biến không được có dấu - hoặc số ở đầu
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

//  Đúng các cú pháp quy chuẩn khi đặt tên biến
let a_z = "a-z"; // Đúng
let AZ = "A-Z"; // Đúng,
let Number1 = 1; //  Đúng
let $variables = "Variables"; // Đúng
console.table({
  a_z,
  AZ,
  Number1,
  $variables,
});

// Biến sai do trùng Reserved Keywords (Từ khoá JS)
// let let = 100;
// var var = "Variables";
// const const = "DEV";

//  Có phân biệt chữ hoa, chữ thường ở biến
let myVar = 20;
let MyVar = 10;
console.log(myVar); // 20
console.log(MyVar); // 10

//  Đặt tên biến không được chứa dấu cách
// let my variables = "Dev"; // Sai
let myVariables = "DEV"; // Đúng
console.log(myVariables);
