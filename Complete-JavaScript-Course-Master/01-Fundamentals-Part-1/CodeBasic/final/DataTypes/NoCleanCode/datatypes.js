let happyBirthDay =
  "Chúc mừng sinh nhật lần thứ 21 của tôi, chúc cho tôi kiếm được nhiều tiền và nhiều sức khỏe, gia đình hạnh phúc, tốt nghiệp cao đẳng và  học đại học . kiếm được công việc lương cao, thu nhập ổn định để thoả mãn đam mê.";
console.log(happyBirthDay);

//  Trong mọi ngôn ngữ lập trình, các giá trị  có thể có nhiều kiểu khác nhau,
//  tuỳ thuộc vào loại dữ liệu mà chúng ta muốn chúng lưu giữ .
//  Ngoài số và chuỗi như đã học ở những bài học trước, thực tế chúng ta còn có nhiều kiểu dữ liệu hơn.
//  Trong JS, mọi giá trị đều là 1 đối tượng (Object) hoặc giá trị nguyên thuỷ (Primitive).
//  VD1:
let me = {
  name: "The Anh",
}; //  Object
// console.log(typeof me);

//  VD2:
let firstName = "The Anh";
let age = 21;
console.log(firstName);
console.log(age);

//  Một giá trị là nguyên thuỷ khi nó KHÔNG PHẢI là một ĐỐI TƯỢNG
//  The 7 Primitive Data Types
//  Có 7 kiểu dữ liệu nguyên thuỷ:

//  1.  Number
//  Các số luôn được gọi là số dấu phẩy động, có nghĩa là chúng luôn có số thập phân ngay cả khi chúng ta không nhìn thấy chúng
//  hoặc không xác định chúng
//  Ví dụ 1:
let myAge = 21; //    Happy BirthDay !
console.log(
  "Happy 21st birthday, lots of money and health, happy family, graduation and promotion." +
    myAge
);
//  Giá trị 21 ở đây giống như việc có 21.0 chẳng hạn , cả 2 đều đơn giản là kiểu số .

//  Ví dụ 2:
let firstNumber = 1;
console.log(typeof firstNumber); // Number

//  Trong nhiều ngôn ngữ lập trình khác, ta có thể tìm thấy các kiểu dữ liệu khác nhau cho số nguyên và số thập phân nhưng không có trong JavaScript .
//  Tất cả các số đều đơn giảm là kiểu số .

//  2.  String
//  Tiếp theo, chúng ta có kiểu String, hiểu đơn giản là 1 chuỗi các ký tự,
//  và vì vậy nên chúng chỉ được sử dụng cho các văn bản .
//  Luôn đặt chúng trong ngoặc kép, bất kể là dấu ngoặc kép "" hay dấu nháy đơn '' .
//  Luôn cần sử dụng dấu ngoặc kép để tạo chuỗi .
//  Nếu không JS sẽ thực sự nhầm chúng với tên biến .
//  Nếu dùng lẫn lộn dấu ngoặc kép và dấu ngoặc đơn, thì điều này có thể gây ra lỗi.
//  Không có dấu ngoặc kép nào, JS sẽ coi đó là 1 biến.
//  Đây là lỗi cơ bản những người mới học đều mắc phải, nên CHÚ Ý.
//  Ví dụ 1:
let useParenthesesCorrectly = "use parentheses correctly";
// let useParenthesesIncorrect = 'use parentheses incorrect";
// let useParenthesesIncorrect = "use parentheses incorrect';
console.log(useParenthesesCorrectly);

//  Ví dụ 2:
let stringValue = "Đây là một chuỗi";
let string_value = "Chuỗi";
console.log(typeof stringValue);
console.log(typeof string_value);

//  3.  Boolean
//  Kiểu dữ liệu Boolean về cơ bản là kiểu logic chỉ có thể nhận 1 trong các giá trị logic đúng hoặc sai.
//  Nói cách khác, 1 Boolean luôn đúng hoặc sai (True and false).
//  Chúng ta sử dụng các giá trị Boolean để đưa ra quyết định với mã.
//  =>  Đây là 3 kiểu dữ liệu mà chúng ta sẽ xử lý nhiều nhất, tuy nhiên vẫn còn bốn kiểu nữa có thể hơi khó hiểu .

//  Ví dụ 1 và 2:
let javascriptsIsFun = true;
let javascriptsIsNotFun = false;
console.log(typeof javascriptsIsFun);
console.log(typeof javascriptsIsNotFun);

// Cả 2 đều là kiểu Boolean
/**
 * Việc khai báo biến cần phải diễn ra trước khi log ra.
 * ĐÓ LÀ BỞI VÌ CÁC CHƯƠNG TRÌNH JAVASCRIPT ĐƯỢC THỰC THI TỪ TRÊN XUỐNG DƯỚI.
 * Điều quan trong đó là VALUE CHỨA KIỂU DỮ LIỆU (TYPE), chứ không phải BIẾN (VARIABLE).
 */

//  4.  Undifined
//  Undifined (Không xác định) là giá trị được nhận bởi một biến chưa xác định (empty value).
//  Và biến chưa được định nghĩa chỉ đơn giản là là một biến mà chúng ta đã khai báo ra nhưng không, chưa gán giá trị cho biến đó.
//  Undifided về cơ bản có nghĩa là 1 giá trị trống.
//  Điều này có nghĩa là bất cứ khi nào chúng tab khai báo 1 biến rỗng, giá trị của biến sẽ không được xác định, và kiểu nhập của biến cũng không được xác định.
//  Undifined là cả Giá Trị và Kiểu của Giá Trị,  Undifined khác với kiểu khác theo cách này.
//  Và chúng ta chúng có thể sử dụng nhập động để linh hoạt thay đổi giá trị cho biến undifined sang các kiểu khác.

//  Ví dụ 1:
let garden; // Underfined
console.log(garden);
//  UNDIFINED // Khai báo biến children nhưng chưa gán cho nó giá trị kiểu string, number,..., thì nó sẽ là undifined
//  Về cơ bản chúng ta có thể nói rằng không xác định, không rõ (undifined) có nghĩa là giá trị trống hay trống giá trị .

// Ví dụ 2:
garden = "Rose"; // String

//  5.  Null
//  Khá tương tự Undifined vì nó cũng có nghĩa là giá trị trống, nhưng nó được sử dụng trong các trường hợp khác nhau.
//  Cả giá trị và kiểu của giá trị đều là null.
//  JS nói rằng null là 1 đối tượng và điều này không có ý nghĩa gi cả, vì vậy đây được coi là 1 lỗi trong JS, lloxi này cũng chauw bao giờ được sửa vì lý do di sản.
//  Nhưng bây giờ, tất nhiên nó không phải là 1 đối tượng, nó sẽ trả về null giống như cách undifined trả về undifined vậy.

let tree = null;
console.log(typeof tree); //  Object thay vì Null như đã nghĩ
console.log(tree === null); //  True

/** ChatGPT
 * Đây là một lỗi trong JavaScript từ thời sơ khai nhưng không thể sửa
 * vì lý do tương thích ngược (backward compatibility).
 * Theo đặc tả ECMAScript, typeof lẽ ra phải trả về "null" cho null,
 * nhưng do cách bộ nhớ được quản lý, nó lại trả về "object".
 */

//  6.  Symbol (ES2015)
//  Kiểu dữ liệu này không thực sự hữu ích cho chúng ta.
//  Nó chỉ đơn giản là xác định một giá trị duy nhất và không thể thay đổi.
//  Symbol không bao giờ trùng lặp, trừ khi bạn dùng Symbol.for().

//  Ta có thể dùng Symbol bằng cách gọi hàm Symbol() với 1 mô tả tuỳ chọn
//  Chỉ dùng để debug, không ảnh hưởng đến giá trị.

//  Ví dụ 1:
let _symbol1 = Symbol();
let _symbol2 = Symbol("Description");
let _symbol3 = Symbol("Description");
console.log(typeof _symbol1); //  Symbol
console.log(typeof _symbol1 === "symbol"); //  True
console.log(_symbol1 === _symbol2); //  False
console.log(_symbol2 === _symbol3); //  False (mặc dù cùng mô tả đúng nhưng chúng vẫn khác nhau)
// => Mỗi Symbol là duy nhất, kể cả khi mô tả giống nhau.

//  7.  Bigint
//  Bắt đầu từ ES2020, còn có Bigint dành cho các số nguyên QUÁ LỚN để có thể biểu diễn 1 cách thông thường bằng kiểu số.
//  Về cơ bản thì nó là một kiểu, loại khác dành cho số.
//  Vì vậy, đây là bảy kiểu dữ liệu nguyên thuỷ trong JS.

// (ChatGPT):
// BigInt là kiểu dữ liệu mới được giới thiệu từ ES11 (ES2020),
// giúp JavaScript xử lý các số nguyên cực lớn, vượt quá giới hạn của Number
// (2⁵³ - 1).

let bigInt1 = 1238797848912471287471249271471287n; //  Thêm n vào cuối số
console.log(bigInt1); // 1238797848912471287471249271471287n
console.log(typeof bigInt1); //  "bigInt"

/**
 *  Có một điều cơ bản khác mà chúng ra cần biết về các kiểu, đó là thực tế JS sẽ có một tính năng gọi là Nhập Động (Dynamic Typing)
 * Điều này có nghĩa là khi bạn tạo 1 biến mới, bạn không cần phải xác định thủ công kiểu dữ liệu của dữ liệu mà nó chứa.
 * Trong nhiều ngôn ngữ lập trình, chúng ta thực sự phải làm điều đó, nhưng không phải trong JS.
 */

/**
 * Thay vào đó, tập lệnh JavaScript tự động xác định kiểu dữ liệu của 1 giá trị khi nó được lưu trữ vào 1 biến.
 * Sự phân biệt giữa giá trị và biến này khá là quan trọng vì trong JS, giá trị(VALUE) có 1 kiểu (type), chứ không phải BIẾN (VARIABLE).
 * Vì vậy, các biến chỉ đơn giản là lưu trữ các giá trị có kiểu.
 * Nhiều người không biết về chi tiết này hoặc chỉ không quan tâm nhưng đây là cách nó thực sự hoạt động.
 */

/**
 * Một ứng dụng quan trọng khác của Nhập Động (Dynamic Typing) là sau này trong mã của chúng ta, 
  ta có thể gán một giá trị mới với kiểu dữ liệu khác cho cùng 1 biến
  mà không gặp vấn đề gì.
  * Viết tên biến và sau đó sử dụng dấu = để gán với 1 biến mới, điều quan trong là ta không viết lại thay đổi cho biến đã khởi tạo với giá trị được gán đầu tiên.
  * Lần đầu tiên, chúng ta khai báo 1 biến mới, chúng ta cần thực hiện bằng cách sử dụng let, nhưng sau đó, muốn thay đổi giá trị
  * chúng ta chỉ cần viết lại bằng cách sử dụng gán nhưng khôgn khai báo lại biến let nữa.
  * Sử dụng phép so sánh với thế giới thực như chiếc hộp lần trước, nó giống như ban đầu bạn đặt 1 quyển sách vào 1 cái hộp, sau đó lấy quyển sách ra khỏi cái hộp và 
  * thay vào đó đặt vào cái hộp đó 1 chiếc điện thoại chẳng hạn, như vậy là chúng ta đã thay đổi nội dung của hộp
*/

//  Ví dụ:
let x = 100; //  Number
console.log(x); // 100 và kiểu là Number

x = "Hello";
console.log(x); // Hello và kiểu là String

x = true;
console.log(x); // True và kiểu là Boolean

//  Biến x ban đầu có thể là 1 số, và sau đó là một chuỗi, đó không phải vấn đề.

/** ChatGPT
 * Trong JavaScript, biến có thể thay đổi kiểu dữ liệu một cách linh hoạt vì JavaScript là ngôn ngữ có kiểu động (dynamically typed).
 * Điều này có nghĩa là bạn có thể gán một giá trị có kiểu dữ liệu khác cho cùng một biến mà không gặp lỗi.
 */
/**
 * Lưu ý:
 * Mặc dù việc thay đổi kiểu dữ liệu của biến là hợp lệ trong JavaScript, nhưng trong thực tế, 
   điều này có thể gây lỗi hoặc làm code khó hiểu hơn. 
 * Do đó, trong các dự án lớn, bạn nên duy trì kiểu dữ liệu nhất quán hoặc 
   sử dụng TypeScript để kiểm soát kiểu dữ liệu chặt chẽ hơn.
 */
//  Điều này rất hữu ích, nhưng cũng có thể là nguyên nhân, nguồn gốc của 1 số lỗi khó tìm trong mã code của chúng ta .
