/**
 *  Về cơ bản thì Boolean Logic là 1 nhánh cơ bản của khoa học máy tính.
 *  Sử dụng các giá trị đúng và sai đẻ gải quyết các vấn đề logic phức tạp.
 *  Và để làm được điều đó, nó sử dụng 1 só toán tử logic để kết hợp các giá trị đúng và sai.
 *  Giống như khi ta sử dụng toán tử số học để kết hợp các giá trị số.
 *
 *  Cơ bản, ta sẽ sơ lược qua bề mặt các toán tử logic cơ bản nhất
 *  Đó là AND(VÀ), OR(HOẶC), NO(KHÔNG).
 *  Lưu lý là Logic Boolean không thực sự dành riêng cho JS.
 *  Điều này đúng cho tất cả các chương trình.
 *
 *  Hãy tìm hiểu về các toán tử này và sử dụng 1 số ví dụ để minh hoạ.
 *
 *  Toán tử AND chỉ trả về True nếu cả A và B đều đúng (True).
 *  Trong tất cả các tình huống khác, nếu A hoặc B sai, thì A và B cũng sẽ sai (False).
 *  Chúng ta cũng có thể tổng quát điều này thành nhiều toán hạng hơn.
 *  Với nhiều hơn chỉ 2 giá trị, ta có thể thực hiện A Và B và C, và chung quy lại kết quả đều đúng nếu tất cả đều đúng (A,B,C,..).
 *  Đương nhiên, nếu 1 trong số chúng sai, thì kết quả cũng sai ngay lập tức.
 *  True when ALL is True.
 *
 *  Toán tử OR, loại toán tử này hoạt động theo cách ngược lại,
 *  Nếu A hoặc B đều đúng, thì phép toán Or cũng trở thành đúng không nhất thiết tất cả đều phải đúng.
 *  Chỉ cần 1 trong số nhiều biến của chúng ta đúng, đủ để làm cho toàn bộ hoạt động cũng trở thành Đúng(True).
 *  True when ONE is True
 *
 *  Toán tử Not, đơn giản hơn rất nhiều, vì nó không kết hợp nhiều giá trị,
 *  thay vào đó, toán tử NOT chỉ hoạt động trên 1 giá trị Boolean,
 *  và về cơ bản nó chỉ là đảo ngược nó.
 *  Nếu A đúng, nó sẽ trở thành sai(False).
 *  Nếu A sai,  nó sẽ trở thành đúng(True).
 *
 *  Về cơ bản thì đây là cách 3 toán tử tử này hoạt động, nhưng tất nhiên, cách tốt nhất để hiểu đó là sử dụng các ví dụ thực tế.
 */

//  Ví dụ 1:
// const age = 16;
//  A: Age is greater or equal 20 (Người A, có tuổi lớn hơn hoặc bằng 20).
//  B: Age is less than 30 (Người B có tuổi dưới 30).
//  Xác định giá trị của mỗi người trong số họ.
//  Nếu tuổi là 16, thì, thì tuổi lớn hơn hoặc bằng bất kỳ phải là sai (false).
//  Nếu tuổi nhỏ hơn 30 thì là đúng, bởi vì 16 rõ ràng nhỏ hơn 30 (true).
//  Not A (!A) false => True (Tất cả những gì NOT làm là đoả ngược logic của biến).
//  And (A AND B) (A false and B true) => false, đủ 1 phép toán hạng sai, sẽ làm cho kết quả của phép toán sai theo.
//  Or (A OR B) (A false or B true ) => true, điều này cho thấy rằng chỉ cần 1 biến đúng, thì toàn bộ biểu thức cũng đúng.

//  !A And B (!A True and B true) => true (Kết hợp nhiều toán tử) => True + True = True
//  A Or !B (A true and !B false) => Fasle + false = false, đó là cách duy nahats toán tử OR có thể sai
//  Về cơ bản, các giá trị ĐƯỢC đảo ngược trước và sau đó chúng được kết hợp bằng cách sử dụng AND hoặc OR.
