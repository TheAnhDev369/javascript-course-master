//  Chuỗi là 1 phần rất quan trọng trong JavaScript
//  Cách dễ dàng để tạo chuỗi là bằng cách sử dụng các ký tự mẫu, còn gọi là Template Strings

//  Ví dụ:  Tạo 1 chuỗi chứa thông tin chi tiết về tôi.
const firstName = "Nguyen The Anh";
const myJob = "Project Manager and Developer";
const birthYear = 2004;
const myAge = 2025 - birthYear;
const year = 2025;

//  Cách sử dụng các biến (hằng số) này để xây dựng 1 chuỗi giới thiệu thông tin cá nhân hoàn chỉnh.
//  Sử dụng dấu + để nối các chuỗi
const myInfo =
  "I'm " +
  firstName +
  " ,a " +
  (year - birthYear) +
  " years old." +
  "I'm a " +
  myJob +
  ".";
// Để thực hiện phép tính toán này mà không nhầm lẫn dấu + chuỗi với dấu - của phép tính, ta sử dụng dấu ngoặc () để ưu tiên và phân biệt.

const myInfo1 =
  "I'm " +
  firstName +
  ", a " +
  "I'm " +
  firstName +
  "." +
  "My first Job is " +
  myJob +
  "." +
  "I'm " +
  myAge +
  " years old";
console.log(myInfo, myInfo1);
/**
 * Khi ta muốn sử dụng dấu nháy đơn để viết I'm chẳng hạn, thì về cơ bản tôi cần ký hiệu này ' trong I'm.
 * Nếu cần tới ký hiệu này để viết đầy đủ từ I'm thì chuỗi chính ta sẽ sử dụng dấu ngoặc kép "" để thay thế dấu ngoặc đơn '' đó tránh trùng lặp,
 * Nếu ta muốn sử dụng dấu nháy đơn '' trong 1 chuỗi cũng sử dụng dấu nháy đơn '',
 * thì 1 là ta thêm dấu escape \  trước dấu ' đó để dễ phân biệt với dấu '' tạo chuỗi,
 * còn 2 là ta sử dụng dấu ngoặc kép "" để chứa chuỗi có dấu ngoặc đơn '' bên trong.
 * Điều quan trong là trong mỗi chuỗi, chúng ta nên bắt đầu và kết thúc bằng cùng 1 ký hiệu, tránh bắt đầu " và kết thúc ' hoặc ngược lại.
 * Nếu chuỗi chính sử dụng '' thì bên trong có thể sử dụng " dể phân biệt với dấu '' và dấu \ nếu muốn nhất quyết sử dụng cùng dấu chuỗi chính.
 * Nếu rơi vào trường hợp sử dụng chuỗi chính với "" thì bên trong sẽ sử dụng dấu ' để phân biệt, và dấu \ nếu muốn nhất quyết sử dụng cùng dấu chuỗi chính.
 */

/**
 * Vậy thì kết quả của việc nối chuỗi trên sẽ là 1 con số như phép tính toán hay là 1 chuỗi, hoặc cả 2 ?
 * Ta nên tự hỏi rằng, nó sẽ thực hiện phép tính trước, sau đó là nối chuỗi, hay ngược lại, vậy thì hoạt động này diễn ra như thế nào ?
 * => Nó liên quan đến 1 thứ gọi là cưỡng chế kiểu,
 *    về cơ bản thì JS sẽ chuyển đổi 1 số thành 1 chuỗi để có thể nối số từ phép tính với phần còn lại của chuỗi.
 */

/** Khái niệm:
 * Với ES6, chúng ta có 1 số công cụ tốt hơn để thực hiện loại công việc này, đó được gọi là các Chuỗi Mẫu hay Template Strings.
 * Với các Chuỗi Mẫu (Tempalte Strings), chúng ta có thể viết chuỗi 1 cách bình thường hơn,
 * sau đó chèn các biến trực tiếp vào chuỗi, rồi chúng sẽ được thay thế một cách đơn giản.
 *
 * Cách hoạt động:
 * Về cơ bản thì Template Strings có thể tập hợp nhiều chuỗi đơn lẻ lại thành 1 chuỗi lớn cuối cùng.
 * Ví dụ về cách hoạt động:
 * Để viết 1 Template String, ta cần sử dụng dấu gạch ngược (backtick) nằm trên phím Tab phía bên trái bàn phím.
 * Các dấu nháy đơn ''  hoặc dấu nháy kép "" sẽ không hoạt động như Chuỗi mẫu, vì chúng không thể dùng để chứa các biểu thức ${} như trong Template Literals.
 *
 * Cách viết:
 * Chúng ta chỉ cần viết 1 chuỗi và chèn các biến vào đó bằng cách sử dụng ký tự $ kèm dấu {}, bên trong dấu mở đóng ngoặc nhọn sẽ là tên biến.
 */

const myNewInfo = `I'm ${firstName}. I'm ${myAge} years old. I'm a ${myJob}.`;
console.log(myNewInfo);
//  I'm Nguyen The Anh. I'm 21 years old. I'm a Project Manager and Developer.

/** ChatGPT
 * Template Literals (hay còn gọi là Template Strings) là một cách để tạo chuỗi trong JavaScript sử dụng dấu backtick (`) thay vì dấu nháy đơn (') hoặc nháy kép (").
 * Nó giúp bạn:
 * Chèn biến dễ dàng với ${expression} (biểu thức)
 * Viết chuỗi nhiều dòng mà không cần nối chuỗi bằng \n
 * const name = "ChatGPT";
 * const message = `Hello, I'm ${name}. Welcome!`;
 * console.log(message);
 * Output: Hello, I'm ChatGPT. Welcome!
 */
const nameJob = "Developer";
const message = `Hello, I'm a ${nameJob}. Welcome  ${firstName} !`;
console.log(message);

/**
 *  Về mặt kỹ thuật thì chúng ta có thể viết, chèn bất kỳ biểu thức nào hợp lệ của JS vào ${} , nhưng nhiều hơn các biểu thức sẽ có trong các bài học sau.
 *  Chúng ta có thể sử dụng các dấu dấu ngoặc kép ngược để viết tất cả các chuỗi,
 *  giả sử không dùng "" hoặc '' thì ta có ``
 *  Nếu trong các chuỗi, chúng ta dù chúng ta có chèn biến hay không, thì ta vẫn có thể dùng backtick để viết chuỗi bình thường,
 *  thay vì cứ nghĩ chỉ có "", '' mới viết chuỗi được.
 *  Hay việc nếu dùng backtick thì buộc phải có biểu thức chứa biến mới làm được, điều đó không đúng.
 *  Việc sử dụng đó đều hoàn toàn hoạt động giống nhau.
 */

console.log(`Just a regular string`);

//  Nhiều nhà phát triển đã bắt đầu sử dụng dấu ngoặc kép ngược cho tất cả các chuỗi, vì sau đó ta không cần phải nghĩ xem ta nên dùng dấu ngoặc đơn hay ngoặc kép.
//  Ta chỉ cần luôn luôn dùng dấu ngoặc kép ngược cho cá chuỗi thay vì suy nghĩ nên dùng "" hay '' .

//  Ví dụ 2:  Một trường hợp sử dụng dấu `` tuyệt vời khác của Template Strings là tạo các chuỗi nhiều dòng
//  Và trước đó (ES6) ta sẽ phải rất mất công sức để viết 1 cách khá chi là cồng kềnh.
console.log("String with \n ");
/**
 *  Khi ta viết chuỗi, sau đó là dấu \ (gạch chéo ngược) với n (\n),
 *  trong nhiều ngôn ngữ lập trình thì nó có nghĩa là newline (dòng mới).
 *  Về cơ bản đây giống như 1 ký tự đặc biệt trong lập trình,
 *  và trong chuỗi nó có nghĩa là tạo 1 dòng mới hay xuống dòng.
 *  Trong Js, ta cần 2 dấu \\ và ở giữa 2 dấu là n, tạo ra \n\,
 *  và với ký tự đó thì ta sẽ chuyển sang dòng tiếp theo và tiếp tục ở dòng mới, sau \ thứ 2 của \n\là 1 dòng mưới được xuống .
 */
console.log(
  "String 1 with \n\
  lines \n\
  multi lines \n\
"
); //  Trải dài trên nhiều dòng các chuỗi.

//  Nhưng bây giờ đã có Template Strings, có một cách dễ dàng hơn để viết chuõi nhiều dòng như sau:
//  Ví dụ 3:  Tất cả những gì chúng ta cần làm là nhấn return hay enter để xuống dòng,
//  và JS sẽ tự động tạo dòng mới,ta đã có thể viết chuỗi nhiều dòng.
console.log(`String 2 with
JavaScript
and
HTML-CSS
`);
//  Điều này vô cùng hữu ích sau này khi chúng ta bắt đầu xây dựng HTML từ JS.
//  Đến lúc đó, ta có thể sử dụng `` để tạo các phần tử HTML nhiều dòng để chèn chúng vào 1 trang web có các chuyển động.

//  =>  Bất cứ khi nào cần 1 chuỗi nhiều dòng, ta có thể làm theo cách này.
//  =>  Bởi vì nó ngắn gọn, đẹp đẽ và dễ dàng hơn.
