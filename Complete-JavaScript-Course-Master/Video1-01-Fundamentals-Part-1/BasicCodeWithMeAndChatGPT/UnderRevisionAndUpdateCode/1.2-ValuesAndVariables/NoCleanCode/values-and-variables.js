let js = "amazing";
//   Khai bái 1 biến bằng let, có tên biến là js và gán cho biến đó giá trị là 'amazing', 1 chuỗi

console.log(40 + 8 + 23 - 10);
//  Trong các dòng mã này, các giá trị lần lượt là 40, 8, 23, 10, đây là 4 giá trị khác nhau, sử dụng các toán tử số học
//  để thực hiện tính toán các phép tính bằng cách kết hợp chúng lại với nhau và cho ra 1 giá trị duy nhất .
("TheAnhDev"); //  Đây là 1 giá trị
// Nếu chúng ta muốn thấy điều này trong bảng điều khiển, hãy sử dụng console.log
console.log("TheAnhDev");
// 'TheAnhDev' là 1 giá trị có kiểu dữ liệu là string (chuỗi)

//  Chúng ta cũng có các giá trị khác nhau, ví dụ như 23
console.log(23);
// 23 là 1 giá trị có kiểu dữ liệu là number (số)

//  Sử dụng let, var, const để khai báo, nhận biết rằng chúng ta đang khai báo 1 biến

//  Cú pháp:
//  let,var,const + tên_Biến(camelCase) gán(=) giá_trị_của_biến
//  Từ khoá tên_Biến = giá_trị_của_biến (mỗi giá trị có 1 kiểu dữ liệu khác nhau)
//  Những gì chúng ta làm ở đây gọi chung là khai báo một biến
//  Điều này thực sự sẽ tạo ra một biến thực trong bộ nhớ máy tính cảu ta và chúng sẽ lưu giá trị biên trong biến đó

//  Ta có thể tưởng tượng một biến giống nhưu 1 cái hộp, trong thế giớ thực, 1 cái hộp có thể chứa 1 số đồ vật, chẳng hạn như 1 cuốn sách.
//  Và sau đó chúng ta có thể viết nhãn trên hộp để mô tả bên trong hộp có những gì.
//  Và sau đó chúng ta có thể tìm thấy đối tượng này sau khi chúng ta cần bằng cách sử dụng nhãn đó.

//  Các biến thực sự hoạt động theo cùng 1 cách.
//  Vì vậy, về cơ bản chúng ta có 1 hộp có nhãn tên là firstName, chúng ta đặt giá trị của TheAnhDev và hộp có nhãn đó.
//  Và bâyn giờ, nếu ta muốn sử dụng giá trị này, tất cả những gì chúng ta cần phải làm đó là sử dụng nhãn này,
//  nói cách khác chính là sử dụng tên biến này.

//  Ví dụ 1:
let firstName = "Anh";

//  Bất cứ khi nào chúng ta cần xuất nội dung nào đó t ừ mã của mình sang trình duyệt, ta luôn luôn sử dụng console.log();
//  Thay vì truyền 1 giá trị theo nghĩa đen như trên ,ta có thể truyền vào biến firstName đã được định nghĩa trước đó
console.log(firstName); //   TheAnhDEv
//   Như vậy, khai báo biến và tiến hành log ra đã hoạt động

//  Ta cũng có thê sử dụng tên biến này nhiều lần
console.log(firstName);
console.log(firstName);
console.log(firstName);
//  Điều này có nghĩa là bất cứ khi nào JS nhìn thấy tên biến được log, về cơ bản nó sẽ
//  thay thế bằng giá trị ban đầu mà chúng ta gán cho biến .

//  Đó chính là lợi ích của biến, nếu không có biến,
//  nếu muốn đồng loạt thay đổi giá trị, ta sẽ phải sửa thủ công, rất tốn thời gian, không hiệu quả/

//  Mọi nơi ta tham chiếu đến biến firstName này, nó sẽ tự động được đổi thành Anh.
//  Đây là điều quan trong nhất cần ghi nhớ về các biến.
