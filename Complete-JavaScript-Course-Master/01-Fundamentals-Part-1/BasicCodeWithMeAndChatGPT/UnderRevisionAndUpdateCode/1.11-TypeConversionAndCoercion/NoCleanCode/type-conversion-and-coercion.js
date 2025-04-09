/**
 *  Kiểu là 1 trong những khía cạnh cơ bản trong lập trình.
 *  Việc chuyển đổi qua lại giữa các kiểu là việc mà chúng ta thực hiện trong mọi ngôn ngữ lập trình.
 *  Ví dụ như chuyển đổi 1 chuỗi thành 1 số, hay 1 số thành Boolean.
 *  Đây là điều quan trọng cần tìm hiểu trước khi tiến xa hơn.
 *  Điều này đặc biệt đối với 1 ngôn ngữ như JS, ngôn ngữ này đôi khi thực hiện theo cách kỳ lạ.
 *
 *  Trong JS, chuyển đổi kiểu và cưỡng chế kiểu, nghe giống nhau nhưng lại rất khác nhau.
 *  Chuyển đổi kiểu là khi chúng ta chuyển đổi thủ công từ kiểu này sang kiểu khác .
 *  Cưỡng chế kiểu là khi JS tự động chuyển đổi các kiểu sau hậu trường cho chúng ta.
 *  Điều đoa là cần thiết trong 1 số tình huống, tuy nhiên nó diễn ra ngầm, hoàn toàn che dấu với chúng ta.
 *  Nhớ rằng, khi chúng ta muốn chuyển đổi kiểu từ kiểu này sang kiểu khác 1 cách rõ ràng, hãy làm như sau :
 * */

//  Type Conversion
//  Giả sử, chúng ta có một trường đầu vào trên 1 trang web của người dùng, yêu cầu nhập năm sinh của họ,
//  Và các đầu vào này từ các trường đầu vào thường có dạng chuỗi.
//  Ví dụ 1 :

const inputYear = "2004"; // Chuỗi có giá trị 2004
//  Vì là chuỗi nên nếu thực hiện tính toán, sẽ không hiệu quả.
console.log(inputYear + 18); //  200418

/** Ta có thể tính toán xem người đó đủ tuổi vào năm nào !
 * Khi chúng ta có 1 chuỗi, và thêm một cái j đó vào chuỗi, về cơ bản nó sẽ nối các chuỗi.
 * Vì vậy, ta không thể mong đợi rằng biến InputYear thực sự cộng thêm 18 và giá trị 1991 của nó, vì biến này là kiểu chuỗi.
 * Đầu ra sẽ là 200418, ta có 2 chuỗi cơ bản là 2004 và 18.
 */

/**
 *  Chúng ta sẽ có 1 cách sửa cái này,
 *  Đó là chuyển đổi chuỗi của biến inputYear này thành 1 số.
 *  =>  Sử dụng hàm Number tích hợp sẵn của JS
 */

console.log(Number(inputYear) + 18, inputYear); // 2004 + 18 = 2022

/**
 * Đầu tiên sẽ là 1 chuõi convert sang số, sau đó là chuỗi không dùng hàm Number() để convert.
 * Thao tác sử dụng Hàm Number() này sẽ trả về chuỗi dưới dạng số.
 * Lưu ý:  Giá trị ban dầu không THỰC SỰ được chuyển đổi,
 * vì vậy bản thân biến inputYear này vẫn là 1 chuỗi, nó vẫn giữ biến dưới dạng
 * 1 chuỗi, còn convert bằng Hàm từ chuỗi sang số, thì nó chỉ convert trong hàm đó thôi, chứ nguyên gốc vẫn là chuỗi.
 * Việc sử dụng hàm này đơn giản chỉ là cung cấp 1 phiên bản khác được chuyển đổi, chứu không phải chuyển đổi bản nguyên gốc.
 */

//  Điều gì sẽ xảy ra nếu ta ta cố gắng chuyển đổi thứ gì đó thành 1 số không thể chuyển đổi ?
//  1 chuỗi không thực sự chứa số, mà là chữ, điều j sẽ xảy ra ?
//  1 số chuỗi 'The Anh'
//  Ví dụ 2:
console.log(Number("The Anh"));
/**
 * NaN hay (Not-A-Number) hay không phải 1 số
 * JS sẽ xem xét nó, cố gắng chuyển đổi thành 1 số, nhưng nó sẽ không thực sự hoạt động.
 * JS cung cấp cho chúng ta rằng đây không phải là 1 gía trị số bất cứ khi nào sử dụng
 * một phép toán liên quan đến
 * SỐ KHÔNG TẠO RA SỐ MỚI.
 * =>   Về cơ bản có thể hiểu NaN là số không hợp lệ, nó không thực sự là 1 số.
 */

//  Ví dụ 3 :
console.log(typeof NaN);
/**
 * Kết quả có sự kỳ lạ là kiểu không phải số thực sự là SỐ,
 * dùng typeOf để kiểm tra dữ liệu của giá trị NaN;
 * Not-A-Number là 1 số không hợp lệ, nó vẫn bằng kiểu số theo 1 cách nào đó, nhưng nó là 1 con số không hợp lệ.
 * Ta không nhận được một số bất cứ khi nào có sử dụng 1 phép toán liên quan đến các số không cung cấp cho chúng ta 1 số mới.
 */

//  Ví dụ 4:
//  Ta cũng có thể làm ngược lại, từ số sang chuỗi.
console.log(String(23)); //  '23;
/**
 * Với mỗi Hàm chuyển đổi tích hợp, chú ý viết HOA chữ cái đầu của kiểu dữ liệu muốn convert.
 * Nếu không nó sẽ không hoạt động.
 * (Bất cứ khi nào 1 giá trị hiển thị ở bảng điều khiển trên trình duyệt có
 * màu trắng thì nó là chuỗi, màu xanh tím, nó là số,..
 */

/**
 * JS chỉ có thể chuyển đổi thành 3 loại:  chuyển đổi sang 1 số, 1 chuỗi hoặc 1 boolean.
 * Nhưng chúng ta không thể chuyển 1 cái j đó thành undifined hoặc null.
 * Ở các ví dụ trên, ta chỉ chuyển đổi sang số với chuỗi, chưa sử dụng đến boolean.
 * Vì Boolean xử lý theo cách đặc biệt, ta sẽ có 1 bài học riêng về cái gọi là giá trị trung thực và giả dối (truthy and falsy values)
 * (1.12)
 */

//  Trong thực tế, chúng ta hiếm khi phải làm điều này(convert) theo cách thủ công,
//  Vì JavaScript thực sự tự gõ lệnh cưỡng chế cho chúng ta trong nhiều tình huống.

//  Type coercion
/**
 * Cưỡng chế kiểu xảy ra bất cứ khi nào 1 toán tử xử lý hai giá trị có kiểu khác nhau.
 * Trong trường hợp đó, sau đó JS sẽ chuyển đổi 1 trong các giá trị này để khớp với giá trị kia.
 * để cuối cùng hoạt động có thể được thực thi trơn tru.
 * Trên thực tế, ta thấy điều này xảy ra qua ví dụ sau:
 */
//  Ví dụ 5:
console.log("I'm " + 23 + " years old."); //(*)I'm 23 years old
/**
 * Điều này hoạt động như thế nào khi nối 1 chuỗi với 1 số và 1 chuỗi lại ra 1 chuỗi hoàn chỉnh ?
 * Nó hoạt động theo cách này vì kiểu ép buộc.
 * Trong JS, toán tử dấu + mà ta sử dụng ở đây kích hoạt 1 sự ép buộc đối với các chuỗi.
 * Vì vậy, bất cứ khi nào có 1 phép toán giữa 1 chuỗi và 1 số, thì sô đó sẽ được chuyển đổi thành 1 chuỗi.
 * Nhờ kiểu ép buộc chuỗi, ta viết (*) sẽ giống như viết cái này.
 */
console.log("I'm " + "23" + " years old."); // (*) I'm 23 years old
/**
 * Toán tử cộng sẽ chuyển đổi số thành chuỗi.
 * Điều tương tự cũng xảy ra trong các Chuỗi mẫu (Template Strings).
 * Nó cũng nhận các giá trị số và chuyển đổi chúng thành chuỗi.
 * Giả dụ nếu như bây giờ JS không có tính năng cưỡng chế kiểu tự động giống như các ngôn ngữ khác,
 *  Chúng ta sẽ phải làm theo cách thủ công như sau:
 */
console.log("I'm " + String(23) + " years old."); // (*) I'm 23 years old
//  May mắn là JS có sẵn tính năng cưỡng chế kiểu này hoàn toàn tự động sau hậu trường mà ta không cần phải sửa thủ công.
//  Thực sự không phải tất cả các toán tử đều thực hiện kiểu ép buộc thành chuỗi.

//  Ví dụ 6:
console.log("23" - "10" - 3); // 10
/**
 * Lần này có vẻ JS đã chuyển đổi các chuỗi thành số và thực hiện các phép tính toán và cho ra kết quả cuốic ùng là 10;
 * Điều này có nghĩa toán tử trừ thực sự kích hoạt chuyển đổi ngược lại
 * Trong trường hợp này các chuỗi chuyển đổi thành các số.
 * Nếu xuất hiện dấu cộng, thì JS chuyển đổi số thành chuỗi và cộng chuỗi.
 * Đây thực sự là điều quan trọng cần GHI NHỚ khi mới học JS;
 */
//  Ví dụ 7:
console.log("23" * "2"); //  Các giá trị được chuyển đổi thành số
//  Đây là cách duy nhất mà toán tử cấp số nhân có thể hoạt động
//  Chuyển chuỗi số thành số và thực hiện phép nhân.
console.log("23" / "3"); //  Phép chia cũng tương tự.

//  =>  Như vậy ta đã thấy được sự rõ ràng giữa Chuyển đổi kiểu và Cưỡng chế kiểu.

//  Ví dụ 7:    Trò chơi đoán kết quả đầu ra;
let n = "1" + 1; //'11'
n = n - 1;
console.log(n); // 10
/**
 * Giải thích:
 * Ta có biến n gán với chuỗi số '1' cộng với số 1,
 * và vì có dấu cộng thì số 1 sẽ convert thành chuỗi, sau đó chuỗi số 1 nối với chuỗi số 1 thành chuỗi '11'.
 * Sau đó ta gán n = n - 1 hay n bằng chính nó - 1, và vì có dấu - nên JS sẽ cưỡng chế chuyển 11 từ chuỗi số sang số 11 và
 * thực hiện phép trừ 1. => 11 - 1 = 10;
 * Với dấu trừ (-), bất cứ khi nào có 1 chuõi hoặc nhiều chuỗi số, nó sẽ cưỡng chế sang kiểu số.
 */
let y = "10" + 21 - 11; //  1010
console.log(y);

/** ChatGPT
 *  Trong JavaScript, NaN (Not-a-Number) là một giá trị đặc biệt,
 *  thường xuất hiện khi một phép toán không thể trả về một số hợp lệ.
 *  Đây là một giá trị của kiểu dữ liệu Number.
 *
 *  Các tình huống tạo ra NaN:
 *  Khi chia cho 0 (0/0):
 *  let result = 0 / 0; // NaN
 *
 *  Khi cố gắng chuyển đổi một giá trị không phải là số thành số:
 *  let result = Number("hello"); // NaN
 *
 *  Khi thực hiện phép toán với giá trị không hợp lệ:
 *  let result = Math.sqrt(-1); // NaN
 *
 * Kiểm tra NaN:
 * Để kiểm tra xem một giá trị có phải là NaN không,
 * bạn không thể chỉ sử dụng toán tử so sánh === vì
 * NaN không bao giờ bằng chính nó.
 * Thay vào đó, bạn sử dụng hàm isNaN() hoặc Number.isNaN():
 *
 * isNaN(): Kiểm tra xem giá trị có phải là NaN hay không,
 * nhưng đôi khi có thể trả về true cho các giá trị không phải là số
 * (ví dụ, chuỗi "hello").
 *
 * isNaN(NaN); // true
 * isNaN("hello"); // true
 *
 * Number.isNaN(): Kiểm tra giá trị có phải là NaN và
 * đảm bảo giá trị đó thực sự là NaN.
 * Number.isNaN(NaN); // true
 * Number.isNaN("hello"); // false
 *
 * Một số phép toán có thể trả về NaN:
 * let x = 0 / 0; // NaN
 * let y = Math.log(-1); // NaN
 * let z = "string" - 1; // NaN
 *
 * =>   Do NaN là một giá trị không thể so sánh với bất kỳ thứ gì,
 *      bao gồm cả chính nó, việc kiểm tra sự tồn tại của NaN là
 *      rất quan trọng trong các ứng dụng xử lý số liệu.
 */
