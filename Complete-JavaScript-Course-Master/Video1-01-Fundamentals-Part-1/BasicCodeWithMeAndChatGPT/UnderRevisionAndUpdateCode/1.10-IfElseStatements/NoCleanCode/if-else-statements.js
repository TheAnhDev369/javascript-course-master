//  Đưa ra các quyết định với mã code của mình bằng if-else
//  Ví dụ 1:
/**
 *  Giả sử ta muốn viết 1 chương trình kiểm tra xem một người
    có được phép thi lấy bằng lái xe hay không.
 *  Nếu đúng => In ra bảng điều khiển
 *  Nếu không => In ra bao nhiêu năm còn lại cho đến khi người đó bắt đầu thi lấy bằng lái xe !
 */
const age1 = 19;
const age2 = 17;
//  Với độ tuổi này, ta đã biết cách để kiểm tra xem độ tuổi này có đủ 18 hay không.
//  Vì 18 là độ tuổi hợp pháp bắt buộc để bắt đầu có bằng lái xe.
const isOldEnough1 = age1 >= 18;
const isOldEnough2 = age2 >= 18;
/**
 *  Để kiểm tra xem tuổi ít nhất là 18, thì ta cần nó lớn hơn hoặc bằng 18(bao gồm 18).
 *  Vì vậy, nếu tuổi là 18, thì kết quả của toán tử này hoặc phép toán sau này, sẽ là true;
 * Chỉ khi độ tuổi là 16, 17 hoặc bất cứ số nào dưới 18, thì sẽ là false tất cả.
 * Và vì có true or false, là kiểu boolean, thì ta có thể sử dụng giá trị để đưa ra quyết định này
   bằng cách sử dụng câu lệnh 'if', và câu lệnh 'if' hoạt động như sau:
  - Viết if, sau đó mở ngoặc đơn, ở trong ngoặc đơn là 1 một điều kiện được đánh giá
  - Nếu điều kiện đó đúng, thì khối lệnh trong {} sẽ được thực thi
  - Còn điều kiện sai, thì khối lệnh trong {} sẽ không được thực thi.
 * Cơ bản bất kỳ mã nào chúng ta viết vào khối này, được ký hiệu bằng các dấu ngoặc nhọn này 
    sẽ được thực thi bất cứ khi nào điều kiện ở trong ngoặc tròn() là đúng (True).
    Trong trường hợp này, hãy đặt điều kiện là 1 biến với kiểu giá trị là Boolean gồm True hoặc False.
 */
if (isOldEnough1) {
  console.log(`Thế Anh đủ tuổi lấy bằng lái xe 🚗
The Anh can start driving license 😎`);
}
//  Do 19 tuổi của biến age lớn hơn 18 trong biến isOldEnough so sánh age có lớn hơn hoặc bằng 18 hay không
//  nên trong khối if, vì 19 > 18 nên giá trị của isOldEnough lúc là kiểu boolean và là True.
//  nếu điều kiện này là đúng thì mã trong khối if được thực thi, tức là thực hiện log ra thông tin.
if (isOldEnough2) {
  console.log(`Thế Anh đủ tuổi lấy bằng lái xe 🚗
  The Anh can start driving license 😎`);
}
//  Do 17 tuổi của biến age không thể lớn hơn hoặc bằng 18 trong biến isOldEnough, mà nó nhỏ hơn 18
//  nên trong khối if, vì 17 < 18 nên giá trị của isOldEnough lúc này là kiểu Boolean với giá trị là false.
//  và điều kiện là sai nên mã trong khối if không được thực thi, từ đó sẽ không có log ra thông tin với console.log nữa.

//  Trong thực tế, chúng ta luôn có thể viết điều kiện trực tiếp vào () của if thay vì thông qua biến, như sau:
//  Ví dụ 2:
const age3 = 21;
const age4 = 12;

if (age4 >= 18) {
  console.log(`Đủ tuổi lái xe`);
}
//  Cách sử dụng này phổ biến hơn.
//  Về cơ bản điều kiện này sẽ trả về true hoặc false, khối mã này sau đó sẽ được thực thi.
//  Ta cũng có thể làm mọt việc khác đó chính là thêm khối 'else'
//  Ta làm điều đó 1 cách đơn giản bằng cách viết 1 khối khác ngay sau khối if (){} đầu tiên này,
//  và sau đó ta thêm 1 khối khác với từ khoá else và {}
if (age4 >= 18) {
  console.log("Đủ tuổi");
} else {
  console.log("Chưa đủ tuổi");
}
//  Khối 'else' hay 'khác' này dùng để làm gì ?
//  Về cơ bản, khối else này sẽ thực thi bất cứ khi nào điều kiệnh nàyn ở đây là sai.

//  Vì vậy, hiện tại độ tuổi (age4) là = 12 => dưới 18 và không bằng 18 => điều kiện là false.
//  Vậy thì khối lệnh trong 'if' hay'nếu' sẽ không được thực thi, thay vào đó là khối else sẽ được thực thi.

//  Ví dụ 3:
//  Tính toán xem còn bao nhiêu năm nữa để theanhC2 bắt đầu lấy được bằng lái xe.
const age5 = 17; //  17 tuổi học lớp 12
if (age5 >= 18) {
  console.log("Thế anh đủ tuổi lái xe");
} else {
  const yearLeft = 18 - age5;
  console.log(`Còn ${yearLeft} nằm còn lại để đến tuổi có thể lấy bằng lái xe :) 
    theanhC2 is too young. Wait another ${yearLeft} years :) `);
}
//    Output: Còn 1 năm còn lại để đến tuổi có thể lấy bằng lái xe :)
//    theanhC2 is too young. Wait another 1 years :)
//    Kết thúc 1 khối lệnh bằng dấu ;

//  Khối else này là 1 tuỳ chọn, còn ban đầu ta khôgn có khối else và nó vẫn hoạt động
//  Khi không có khối else, JS sau đó sẽ chỉ chuyển sang dòng tiếp theo sau câu lệnh if trong trường hợp điều kiện là sai.
//  Hoặc hiểu đơn giản hơn là khi không có khối else, và cả điều kiện if sai, JS sẽ bỏ qua khối if và chạy tiếp các dòng code tiếp theo bên ngoài.

//  Ví dụ 4:
const age6 = 10;
if (age6 >= 18) {
  console.log(`Đủ tuổi lái xe 🚗`);
}
console.log("Chưa đủ tuổi lái xe 😊");

/**
 *  Tổng kết:   Đây là 1 trong những điều quan trọng nhất trong lập trình.
 *  Chúng ta đưa ra quyết định bằng mã mọi lúc.
 *  Về cơ bản là thực thi các phần nhất định của chương trình dựa trên các điều kiện nhất định.
 *  If-else là tên chính thức của cấu trúc này, được gọi là cấu trúc điều khiển (Control Structure).
 *  If-else được gọi là cấu trúc điều khiển vì cấu trúc này thực sự cho phép chúng ta kiểm soát nhiều hơn các luồng thực thi của chương trình,
    quyết định xem đoạn mã nào sẽ được chạy dựa trên điều kiện được cung cấp.
 */

/**
// if (condition) {
// }else{
// }
  * Bình thường, một chương trình sẽ chạy từng dòng code theo thứ tự từ trên xuống dưới (gọi là thực thi tuyến tính).
  * Trong câu lệnh if else này, chương trình khôn thực thi toàn bộ mã code theo cách tuần tự từ trên xuống dưới.
  * JS không thực thi tất cả các mã này ở đây 1 cách tuyến tính, thay vào đó
  * Chương trình sẽ kiểm tra điều kiện và chỉ thực thi các khối mã phù hợp (if hoặc else).
  * Điều này giúp chúng ta kiếm soát chính xác những phần nào của chương trình sẽ chạy
  và những phần sẽ bỏ qua.
  * Đó là lý do tại sao lại gọi if-else là cấu trúc điều khiển.
  * Cũng có những cấu trúc điều khiển khác, ta sẽ học ở phần sau.
 */

//  Ví dụ 5:
//  Tạo 1 biến có điều kiện và không chỉ luôn sử dụng console.log() bên trong điều kiện, thay vào đó ta sẽ sử dụng console.log() bên ngoài.
const birthYear2 = 1997; //  Năm 1997 thuộc thế kỷ 20
const birthYear3 = 2004; //  Năm 2004 thuộc thế kỷ 21
if (birthYear2 <= 1999) {
  console.log(`Đây là những năm thuộc thế kỷ 20`);
} else {
  console.log(`Đây là những năm thuộc thế kỷ 21`);
}
if (birthYear3 <= 2000) {
  let century = 20; //   century = thế kỷ, thế kỷ 20
} else {
  let century = 21; //   Thế kỷ 21
}
//  Giả định rằng tôi không được sinh ra vào thế kỷ 19, ta không tính toán gì liên quan đến thời gian đó (1895);
//  Thay vào đó chúng ta luôn có thế kỷ 20 và thế kỷ 21.
//  Để thực hiện công việc này, chúng ta cần phải xác định biến thể hiện công việc này,
//  Chúng ta cần xác định rõ bến thế kỷ bên ngoài các khối if hoặc else, chúng ta cần đi sâu vào lý do tại sao lại như vậy,
//  Những gì chúng ra cần biết là điều này do 1 biến mà chúng ta xác định bên trong bất kỳ khối mã nào, đó là birthYear3.
//  Chúng ta có 2 khối là:

/**
 *if (birthYear3 <= 2000) {
  let century = 20; //   century = thế kỷ, thế kỷ 20
  }

  *else {
  let century = 21; //   Thế kỷ 21
  }
 */

//  Bất kỳ biến nào chúng ta khai báo bên trong 1 trong 2 khối này, sẽ không thể truy cập ra bên ngoài khối đó.
//  Điều đó thể hiện qua ví dụ này:
//  console.log(century);// Lỗi
/**
 * Uncaught ReferenceError: century is not defined
    at if-else-statements.js:140:13
 */

//  Những gì chúng ta cần làm là khai báo century bên ngoài, và đơn giản là để trống.
//  Và bên trong, chúng ta có thể gán nó lại 1 cách có điều kiện.
//  Sửa lỗi
let century;
if (birthYear2 <= 2000) {
  century = 20; //   century = thế kỷ, thế kỷ 20
} else {
  century = 21; //   Thế kỷ 21
}
console.log(century); //
/**
 *  Điều này thực sự đã hoạt động, ta có thế kỷ 21, vì 2004 > 2000 thay vì nhỏ hơn hoặc bằng.
 * Thực tế chúng ta đã phải khai báo biến cnetury bên ngoài các khối, nhưng vấn đề chưa nói đến phạm vi truy cập, mà chỉ cần hiểu logic if-else.
 *
 * Tóm tắt:
 *  Chúng ta có thể thực sự đưa ra quyết định bằng cách sử dụng câu lệnh if-else trong mã .
 *  Và chúng ta viết if và sau đó chúng ta mở dấu ngoặc đơn, trong dấu ngoặc đơn chúng ta cần 1 điều kiện
 *  Và điều kiện về cơ bản là bất kỳ mã nào trả về giá trị true hoặc false.
 *
 * Ví dụ trên là 1 ví dụ hoàn hảo, bởi vì toán tử bài này sẽ trả về true hoặc false,
 * Chúng ta sẽ sử dụng toán tử này để tạo 1 điều kiện.
 * Sau đó, nếu đk là đúng, khối này sẽ được thực thi, vì vậy tất cả các mã có trong đó cho dù có bao nhiêu dòng mã đi nữa vẫn sẽ được thực thi bên trong.
 *
 * Nếu điều kiện là sai, thì khối else sẽ được thực thi thay thế.
 * Và vì sai, JS sau đó sẽ bỏ qua khối đầu tiên của if và chuyển đến khối thứ hai là else thay thế.
 * Nhưng khối else thực sự là tuỳ chọn, vì vậy nếu không có khối else thì đơn giản là sẽ không có mã nào được thực thi.
 * => Tóm lại, đây chính là cách hoạt động của 'if', 'else'.
 */
