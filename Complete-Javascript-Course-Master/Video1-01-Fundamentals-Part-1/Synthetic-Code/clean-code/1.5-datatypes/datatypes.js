//  Object
let me = {
  name: "The Anh",
};
//  Primitive
let firstName = "Nguyễn Thế Anh";
let myAge = 21;
console.log(typeof firstName); //  String
console.log(typeof myAge); //  Number

//  Number
let firstNumber = 1;
console.log(firstNumber); // Number

//  String
let stringValue = "Đây là một chuỗi";
let string_value = "Chuỗi";
console.log(typeof stringValue);
console.log(typeof string_value);

//  Boolean
true;
console.log(typeof true);
false;
console.log(typeof false);
let boolTrue = true;
let boolFalse = false;
console.log(boolTrue);
console.log(boolFalse);

//  Undifined
let children;
console.log(typeof children); //  Undifined

//  Null
let tree = null;
console.log(typeof tree); //  Object thay vì null
console.log(tree === null); //  True

//  Symbol
let _symbol1 = Symbol();
let _symbol2 = Symbol("Description");
let _symbol3 = Symbol("Description");
console.log(typeof _symbol1);
console.log(typeof _symbol2);
console.log(typeof _symbol3);

console.log(typeof _symbol1 === "symbol");
console.log(typeof _symbol2 === "symbol");
console.log(typeof _symbol3 === "symbol");

console.log(_symbol1 === _symbol2);
console.log(_symbol2 === _symbol3);

//  Bigint
let bigInt1 = 1238797848912471287471249271471287n;
console.log(bigInt1);
console.log(typeof bigInt1);
