//  Về cơ bản, một TOÁN TỬ cho phép chúng ta chuyển đổi các giá trị hoặc kết hợp nhiều giá trị
//  và thực hiện tất cả các loại công việc với các giá trị.

/**
 * Có nhiều loại toán tử như:
 * Toán tử Số học       (Arithmetic Operators)(Math operators)
 * Toán tử Gán          (Assignment Operators)
 * Toán tử So sánh      (Comparison Operators)
 * Toán tử Logic        (Logical Operators)
 * Toán tử Bitwise      (Bitwise Operators)
 * Toán tử đặc biệt     (Special Operators)
 * Và nhiều hơn nữa.
 * Tóm lại, JS có 6 nhóm toán tử chính.
 */

//  1.  Toán tử Số học       (Arithmetic Operators)(Math operators)
//  +, -, *, /, %, **
//  Ví dụ 1:    Sử dụng toán tử trừ để tính tuổi dựa trên năm sinh của 1 người.
const ageTheAnh = 2112 - 2004; //   Giả sử ngay bây giờ là năm 2112
const ageMyGirlfriendsFutures = 2112 - 2004; // 108

//  Log ra 2 dòng khác nhau:
console.log(ageTheAnh); //  108
console.log(ageMyGirlfriendsFutures); // 108

//  Log ra trên cùng 1 dòng và log nhiều giá trị cùng 1 lúc.
//  Bằng cách sử dụng dấu phẩy để ngăn cách giá trị thứ nhất, sau đó là giá trị thứ 2,
//  và nhiều giá trị hơn nữa thì cũng dùng dấu ,
console.log(ageTheAnh, ageMyGirlfriendsFutures);

//  Ta cũng có thể thấy rằng mình đang lặp giá trị ở cả 2 biến là 2112, ta có thể làm tốt hơn.
//  Nếu muốn thay đổi năm thì ta lại phải thay đổi thủ công cả 2 chỗ.
//  Thay vì làm thế, thì ta có thể làm như sau:

//  Ví dụ 2:
const now = 2112;
/*Video - Phụ đề*/
//  Khi sử dụng const mặc định,ta sẽ không thay đổi bất kỳ biến nào trong số này ở đây hay bất kỳ đâu trong mã của tôi.
//  Khi cần thay đổi, ta sẽ chuyển sang điều đó.

/**ChatGPT
 *  Sử dụng const để khai báo biến KHÔNG THAY ĐỔI giá trị trong suốt chương trình
 *  Nếu cần thay đổi giá trị, ta hãy sử dụng let thay vì const.
 */

const ageTheAnh1 = now - 2004; //   Giả sử ngay bây giờ là năm 2112
const ageMyGirlfriendsFutures1 = now - 2004; // 108
console.table({
  ageTheAnh1,
  ageMyGirlfriendsFutures1,
});

//  Ngoài ví dụ đầu với phép trừ, ta cũng có thể làm tương tự với các loại phép toán khác nhau như:
//  +, -, *, /, %, ** (phép cộng. phép trừ, phép nhân, phép chia, phép chia lấy số dư và luỹ thừa.

//  Ví dụ 3:
//  Ta có thể thực hiện nhân, chia tuổi cho cả 2:
console.log(ageTheAnh * 2, ageTheAnh1 / 2, ageMyGirlfriendsFutures + 1, 2 ** 3); //  216 và 54, 109 ,8 đây là 2 phép tính toán khác nhau, ngăn cách với nhau bằng dấu ,ư
//  2 ** 3 có nghĩa là 2 mũ 3, 2 luỹ thừa 3, hay bằng 2 nhân 2 nhân 2 (2x2=4, 4x2=8).

//  Ví dụ 4:
//  Trong 1 trường hợp khác, ta có thể sử dụng toán tử dấu cộng để nối các chuỗi, nói cách khác là nối các chuỗi khác nhau.
//  Ta tạo 2 biến là firstName và lastName, sau đó sử dụng dấu + để tiến hành nối chuỗi.
const firstName = "Thế Anh";
const lastName = "Nguyễn";
console.log(lastName + " " + firstName); // Nguyễn Thế Anh
//  Nối chuỗi của biến lastName có giá trị là "Nguyễn" với kiểu là string
//  với dấu cách (khoảng trống) trong chuỗi và nối tiếp với biến firstName có giá trị là "Thế Anh" với kiểu là String.

//  2.  Toán tử Gán (Assignment Operators)
//  =, +=, -=, *=, /=, %=, **=
//  Ví dụ 5:
//  Cách sử dụng các toán tử gán.
//  Toán tử gán đơn giản nhất chính là dấu =
//  Giả sử, ta có:
let x = 10 + 5; //   Ta có toán tử gán với dấu = và toán tử số học với phép tính 10 + 5;
//  Dấu = ở đây thực sự là 1 toán tử gán;
//  Ở đây, TOÁN TỬ CỘNG ĐƯỢC ƯU TIÊN THỰC THI TRƯỚC TOÁN TỬ GÁN, tức là 10 công 5 = 15, sau đó gán 15 cho biến x.
console.log(x);

//  Ví dụ 6:
//  Tại thời điểm sau này, dòng x được tính toán với phép cộng là bằng 15 và gán cho x, vậy lúc này x mang giá trị 15.
x += 10; //  Sau đó ta có x += 10; tức là x = x + 10, hay 15 + 10 = 25; x = x + 10 = 25.
console.log(x); //   25 là kết quả của biến x mới sau khi thực hiện toán tử gán cộng bằng +=
//  Về cơ bản là ta đang gán lại giá trị cho x, đó là lý do ta sử dụng let.

//  Ví dụ 7:
x -= 5; //    x = x - 5 = 20 hay x = 25 - 5 = 20;
console.log(x);
x *= 4; //    x = x * 4 = 80 hay x = 20 x 4 = 80;
console.log(x);
x /= 2; //    x = x / 2 = 40 hay x = 80 / 2 = 40;
console.log(x);
x %= 3; //    x = x % 3 = 13 dư 1 hay x = 40 % 3 = 13 dư 1, lấy số dư là 1
console.log(x);
x **= 3; //    x = x ^ 3 = 1 hay x = 1 x 1 x 1 = 1;
console.log(x);

//  Toán tử x++
x++; // X = x + 1 = 2 hay x = 1 + 1 = 2;
console.log(x); // 2
x--; // x = x - 1 = 1 hay x = 2 - 1 = 1;
console.log(x);

//  3.  Toán tử So sánh      (Comparison Operators)
//  ==, ===, !=, >, <, >=, <=
//  Các toán tử so sánh và cách sử dụng chúng:
//  Về cơ bản, chúng ta sử dụng toán tử so sánh để tạo ra các giá trị Boolean.
//  Cách hoạt động của toán tử so sánh và kết quả của 1 toán tử so sánh phải là Boolean.

//  Ví dụ 8:
//  Giả sử tìm hiểu xem ageTheAnh có lớn hơn ageMyGirlfriendsFutures hay không, ta sử dụng thử dấu > lớn hơn
console.log(ageTheAnh > ageMyGirlfriendsFutures + 1); //    False, vì 108 < 109 chứ không thể lớn hơn được,
// do đó ageTheAnh = 108 mà lại lớn hơn ageMyGirlfriendsFutures = 109 là sai (false)
// kết quả trả về của phép so sánh này chỉ có true hoặc false, và kq là false (kiểu Boolean).
console.log(ageTheAnh1 < ageMyGirlfriendsFutures + 1); // True, vì 108 < 109

//  Điều này giống như việc bên ngoài thực thế, ta hỏi rằng tuổi của Thế Anh có lớn hơn tuổi của bạn gái anh ấy hay không, nếu lớn hơn thì họ trả  lời có, mà nhỏ hon thì họ trả lời không.
//  Điều này rất hữu ích khi saqu này chúng ta bắt đầu đưa ra quyết định với mã code của mình dựa trên các điều kiện như thế này.
//  Ngoài lớn hơn >, ta có nhỏ hơn <, lớn hơn hoặc bằng >= và nhỏ hơn hoặc bằng <=.

//  Ví dụ 9: Ứng dụng của lớn hơn hoặc bằng và nhỏ hơn hoặc bằng.
//  Giả sử tôi muốn kiểm tra tuổi của bạn gái tôi, thì điều đó có nghĩa cô ấy phải từ 18 tuổi trở lên, và ít nhất có nghĩa là cô ấy lớn hơn 18 tuổi
//  hoặc chính xác là bằng 18 tuổi.
//  Vì vậy, chúng ta có thể sử dụng toán tử thích hợp cho điều đó.
console.log(ageMyGirlfriendsFutures >= 18); //   True
console.log(ageMyGirlfriendsFutures1 <= 18); //  False

//  Trong quá trình phát triển thực tế, chúng ta thực sự sẽ luôn cần phải lưu lại những kết quả ở đây vào trong các biến
//  và thay vì chỉ luôn in chúng ra bảng điều khiển.

//  Trong trường hợp này, việc ra luôn thấy được tất cả những thứ này hoạt đọng ra sao, như thế nào chính là kết quả của quá trình học hỏi,
//  thay vì làm tất cả những điều đó ngay trên bảng điều khiển, nhưng ngay lập tức sau đó chúng ta sẽ mát đi dấu vết ghi chép những gì đang học so với trình soạn thảo mã code .

/**
 * ChatGPT
 * Ý nghĩa:
 * Khi lập trình, ta nên lưu kết quả vào biến để sử dụng sau này.
 * Chỉ in ra console để kiểm tra là không đủ, vì dữ liệu có thể cần dùng ở nhiều chỗ khác trong chương trình.
 */
//  Ví dụ:  Chỉ in ra console (không lưu lại):
console.log(5 + 3); //  kq = 8, sau đó không dùng lại được
//  Ví dụ:  Lưu vào biến và để dùng sau:
let sum = 5 + 3;
console.log(sum); // Hiển thị kq = 8
console.log(sum * 3); // 24, dùng lại biến sum để nhân 8 với 3 = 24

//  Tất cả những điều chúng ta đnag làm trong trình soạn thảo code là đúng, và khi sử dụng nó lên console, chúng ta sẽ nhận được kết quả tương tự trình soạn code.
//  Điều này hoạt động vì bảng điều khiển thực sự có quyền truy cập vào tất cả các biến đang chạy trong tab trình duyệt hiện tại, thậm chí là tự động hoàn thành chúng
//  bằng cách nhấn Tab

//  Tuy nhiên, nếu laod lại trang,tất cả những gì chúng ta nhập thủ công vào console sẽ biến mất, còn những thứ ở trình soạn thảo code mở file lên thì giữ nguyên.
//  Chỉ cần lưu trữ kết quả này nếu chúng ta cần chúng cho sau này vào biến ở trong mã của chúng ta.
//  Ví dụ 10:
const isFullAge = ageMyGirlfriendsFutures >= 18;
console.log(isFullAge);
//  Biến isFullAge sẽ là biến giữ giá trị Boolean, sau đó, đúng như ta thấy, isFullAge là 1 Boolean có giá trị là True.

//  Thử tưởng tượng, chúng ta có nhiều mã chẳng hạn, và đương nhiên chúng ta muốn tối ưu, code nhìn sạch, rút gọn hơn để nhìn đỡ rối mắt, tích hợp chúng chng lại thay vì tách riêng biệt, thì
//  ta có thể làm theo cách sau theo như ví dụ:
//  Ví dụ 11:
console.log(now - 2004 > now - 2004); //  Kiểm tra xem năm 2112 ở biến now - năm 2004 có lớn hơn 2112  ở biến now - năm 2003 hay không, ta làm rút gọn như cách trên.
//  True, vì 2112-2004=108, và 108 tuy không lớn hơn nhưng bằng 108 => true;
//  Chỉ đơn giản là chúng ta rút gọn hơn, làm tất cả trong 1 bước
//  Điều trên tương tự
// const now = 2112;.
// const ageTheAnh1 = now - 2004;
// const ageMyGirlfriendsFutures1 = now - 2004;
console.log(ageTheAnh1 > ageMyGirlfriendsFutures1);

//  Làm thế nào mà JS biết liệu nó nên thực hiện phép toán trước hay thực hiện phép so sánh trước ?
//  Điều đầu tiên chúng ta nghĩ đến chính là tính toán phép trừ vế 1 trước,
//  sau khi vế 1 có kết quả sẽ đem đi so sánh với vế 2 ngay lập tức khi phép tính toán vế 2 tính xong.
//  Điều này sẽ xảy ra nếu hoạt động chỉ đơn thuần là tiến hành từ trái qua phải.

//  Tuy nhiên chúng ta sẽ thấy rằng cách nó hoạt động không đúng như những gì chúng ta đã nghĩ.
//  Trong thực tế, thứ tự ưu tiên của toán tử (operator precedence) sẽ quyết định cách biểu thức được tính toán.

//  JS có một số cách để biết rằng nó phải thực hiện thao tác vế 1 trước, rồi đến thao tác vế 2
//  để nó có 2 số là kq sau cùng, khi nó có 2 kết quả tính toán độ tuổi rõ ràng ở 2 vế, nó sẽ so sánh chúng thôgn qua toán tử so sánh nằm ở giữa 2 vế .
