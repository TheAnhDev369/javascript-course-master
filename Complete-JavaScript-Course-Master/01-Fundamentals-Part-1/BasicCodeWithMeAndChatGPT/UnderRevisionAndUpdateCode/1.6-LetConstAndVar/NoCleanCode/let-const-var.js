//  Chúng ta có 3 cách khác nhau dùng để khai báo biến trong JS.
//  Đó là let, const và var.
//  Cho đến thời điểm nay, chúng ta vẫn luôn sử dụng từ khoá let để khai báo biến.
//  Tuy nhiên ngoài ra cũng có const và var được sử dụng để khai báo biến.

//  let và const được giới thiệu trong ES6, và vì vậy chúng được gọi là JS hiện đại.'
//  var trong khi đó lại là cách khai báo biến cũ.

//  Hãy cùng tìm hiểu xem chúng khác nhau như thế nào và cái nào nên sử dụng trong những trường hợp nào !

//  Ví dụ 1:
let age = 20;
//  Ta có 1 biến khai báo với let tại 1 thời điểm của chương trình,
//  và sau đó trong 1 điểm khác của chương trình, chúng ta có thể thay đổi nó thành 1 cái gì đó khác.
//  Ví dụ khi tôi bước sang tuổi 21 ngày hôm nay, tất nhiên tuổi sẽ thay đổi từ 20 sang 21.
age = 21;
//  Điều này hoàn toàn ổn khi khai báo 1 biến với let tại 1 điểm trong chương trình, rời sau đó gán 1 giá trị mới cho nó
//  => Chúng ta gọi đây là việc gán lại giá trị cho 1 biến, cũng cũng có thể nói rằng ta đang thay đổi biến tuổi.
//  Trước đo là 20 và giờ là 21, như vậy là chúng ta đã thay đổi biến, đó là thuật ngữ ta sẽ nghe thấy mọi lúc trong thế giới JS.
//  Khi chúng ta thay đổi 1 biến, đó là trường hợp hoàn hảo để sử dụng let và điều đó cũng tính cho trường hợp chúng ta muốn khai báo các biến trống.
//  Ví dụ, khi chúng ta muốn khai báo tất cả các biến ở đầu tệp, nhưng ta chỉ gán giá trị thực cho chúng sau này trong chương trình chẳng hạn, dựa trên 1 số điều kiện.

//  Mặt khác, bây giờ chúng ta có thể sử dụng từ khoá const để khai báo các biến không được phép thay đổi tại bất kỳ thời điểm nào trong tương lai.
//  Vì vậy, không thể thay đổi giá trị trong 1 biến const.

//  Ví dụ 2:
//  Năm sinh của tôi là 2004
const birthDay = 2004;
// birthDay = 2003;
//  Nếu sau đó chúng ta cố gắng gán lại cho cái biến đó giá trị khác (giả sử như 2003)
//  thì nó sẽ không hoạt động.

//  Vì vậy, hãy kiểm tra nó, và thực sự chúng ta gặp lỗi kiểu : Uncaught TypeError: Assignment to constant variable. at ...
//  Nó tạo ra 1 biến mà chúng ta không thể gán lại, hoặc theo thuật ngữ kỹ thuật, một biến bất biến (biến động).

//  Năm sinh chính là 1 ví dụ hoàn hảo, bởi trên thực tế, năm sinh của 1 người không bao giừo có thể thay đổi, trong khi tuổi có thể thay đổi.
//  => Đó là lý do tại sao chúng ta sử dụng let cho tuổi và const cho năm sinh.
//  Các biến được tạo với const là bất biến cũng có nghĩa là chúng ta không thể khai báo các biến const rỗng.

//  Ví dụ 3:
//  const job;
//  Ta gặp lỗi thiếu bộ khởi tạo trong khai báo const.
//  Uncaught SyntaxError: Missing initializer in const declaration
//  Thông báo này có nghĩa là khi sử dụng const, về cơ bản chúng ta cần 1 giá trị ban đầu.

//  Và với 2 cách khai báo biến khác nhau này, thì khi nào nên sử dụng let và khi nào nên sử dụng const để khai báo 1 biến mới ?
//  Chỉ sử dụng const theo mặc định và chỉ sử dụng khi tab chắc chắn rằng biến cần thay đổi vào 1 thời điểm nào đó trong tương lai.

//  Ví dụ 4:
//  Khi ta có 1 biến không bao giờ được cho là thay đổi như năm sinh này, thì ta sử dụng const.
//  Ngoài ra, nếu ta chắc chắn rằng biến age không bao giờ thay đổi trong chương trình của mình
//  ta cũng nên khai báo nó bằng cách sử dụng const.

//  Lý do cho điều này, thực tiễn tốt là có càng ít đột biến hoặc thay đổi biến càng tốt,
//  vì việc thay đổi biến có khả năng tạo ra lỗi .
//  Về cơ bản, lỗi trong mã của chúng ta có thể xuất phát từ sự đột biến, thay đổi biến nhiều.

//  =>  Theo mặc định, luôn chỉ sử dụng const và let khi ta chắc chắn rằng giá trị của biến cần thay đổi tại 1 số điểm trong mã của mình .

//  Ngoài ra, cũng có 1 cách khai báo biến thứ 3 là var, TUY NHIÊN cách này nên tránh hoàn toàn.
//  Mặc dù nói là nên tránh sử dụng, nhưng ta cũng cần nên biết cách nó hoạt động vì những lý do kế thừa,
//  ta sẽ thấy trong cơ sở mã cũ hơn hoặc 1 số hướng dẫn cũ hơn mà ta sẽ tìm thấy trên các trang web chẳng hạn.

//  Ví dụ 5:
//  var về cơ bản các cách định nghĩa các biến cũ trước ES6 (ECMAScript 2015)
//  Và ngay từ cái nhìn đầu tiên, nó thực sư hoạt động kahs giống với let.
//  Vì vậy, chúng ta có thể viết:
var job = "programmer";
//  Giống như let, ta có thể thay đổi giá trị của biến sau đó.
job = "teacher";
//  Về cơ bản ta không gặp bất kỳ lỗi nào, vậy là ta được phép thay đổi giá trị của biến khi sử dụng var.

//  Nhìn thì có vẻ như var và let giống nhau, nhưng tuy nhiên dưới bề mặt chúng thực sự khá khác nhau.
//  Thực ra cũng có nhiều sự khác biệt giữa let, const và var.

//  Chúng ta thực sự thậm chí không phải khai báo các biến vì nó thực sự không bắt buộc.

//  Ví dụ 6:
lastName = "Nguyễn";
console.log(lastName);
//  Sau đó, chúng ra chỉ có thể sử dụng tên biến này trong trường hợp này bằng cách nhập nó vào bảng điều khiển, JS sẽ thực thi tập lệnh này ngay cả khi chúng không phải 1 biến.
//  Trong trường hợp này, chúng ta đã không sử dụng let, const cũng như var, nhưng nó vẫn hoạt động.
//  Tuy nhiên thì dù sao đây cũng là 1 ý tưởng khá khủng khiếp vì điều này không tạo ra 1 biến trong cái gọi là PHẠM VI HIỆN TẠI.
//  Thay vào đó, JS sẽ tạo một thuộc tính trên đối tượng toàn cục (Global).
//  Điều quan trọng là phải luôn khai báo đúng các biến,
//  đừng bao giờ chỉ viết một biến như thế này mà không thực sự khai báo nó.
