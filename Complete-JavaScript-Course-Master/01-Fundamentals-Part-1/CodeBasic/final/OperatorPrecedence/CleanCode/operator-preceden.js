const now = 2112;
let ageTheAnh = now - 2004;
let ageGirlFriend = now - 2003;
console.log(ageTheAnh); //108
console.log(ageGirlFriend); //109
console.log(now - 2004 < now - 2003);

//  Javascript có thứ tự ưu tiên toán tử được xác định rõ ràng
//  Về cơ bản, đó thứ tự mà các toán tử được thực hiện.
//  Và để xem các mức độ ưu tiên của tất cả các toán tử khác nhau, hãy cùng xem bảng ưu tiên rất hữu ích.

//  Tất cả các toán tử số học được thực hiện trước các toán tử so sánh.
//  Các toán tử khác nhau sẽ có cách thực thi khác nhau, cái thì từ trái sang phải, cái thì từ phải sang trái.
//  Ví dụ:
//  Toán tử luỹ thừa được thực hiện từ phải sang trái, trong khi hầu hết các toán tử số học được thực hiện từ trái qua phải (+,-,*,/),
console.log(25 - 10 - 5); // 10
//  Đây là ví dụ đúng về cách phép tonas trừ thực hiện từ trái qua phải, nhưng nếu thực hiện từ phải qua trá, như 5-10-25, kết quả sẽ là 1 số âm => sai
//  Ví dụ 1:
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // 10 & 10, ta có y = 10, thì x = y, y là 10 thì x cũng là 10 => x,y cả 2 đều bằng 10
//  Khi JS tìm thấy dòng trên, nó sẽ xem xét các toán tử có mặt , điều đầu tiên nó thấy sẽ là toán tử trừ,
//  sau đó là toán tử gán, bởi vì thứ tự ưu tiên của toán tử số học(Trừ - Subtraction 14) chắc chắn cao hơn toán tử gán(3), vì vậy nó sẽ xử lý gán(3)sau khi thực hiện tính toán.
//  x đầu tiên sẽ = y, cả 2 đều là undifined vì ta khai báo biến mà chưa có giá trị, sau đó tiếp tục từ trái sang phải
//  x = y, y = 10 => y lúc này từ undifined đã có giá trị là 10, và vì x = y, nên suy ra x = 10 giống y;

//  Ví dụ 3:    Tính giá trị trung bình của hai giá trị.
//  Để tính trung bình cộng, ta cộng 2 giá tị với nhau rồi chia chúng cho 2.

//  Đúng
const averageAgeTrue = (ageTheAnh + ageGirlFriend) / 2;
console.log(ageTheAnh); // 108
console.log(ageGirlFriend); //109
console.log(averageAgeTrue); // 108.5
//  Và đó là nơi xuất hiện dấu ngoặc đơn, và bằng cách sử dụng dấu ngoặc đơn, 1 lần nữa, giống như trong toán học,
//  chúng ta có thể làm phép toán này côgnj này thực thi trước, sau đó ra kq mới chia cho cả 2.
//  Về cơ bản, độ ưu tiên khi sử dụng ngoặc đơn cao nhất là 21 cho phép tính cộng tuổi trong ngoặc, sau đó là phép chia 15, vì 21 > 15.

//  Sai
const averageAgeFalse = ageTheAnh + ageGirlFriend / 2;
//  Giả sử tuổi của TheAnh và GirlFriend của anh ấy, cả 2 cộng lại và chia cho 2, tuy nhiên với tường hợp không có dấu ngoặc, điều gì sẽ xảy ra ?
//  Tất nhiên là theo bảng ưu tiên toán tử của JS, phép chia (Division 15) xảy ra trước phép trừ (Addition 14)
//  Vậy thì, tuổi của GirlFriend sẽ bị chia cho 2 trước, sau đó mới cộng cho tuổi của Thế Anh.
console.log(averageAgeFalse); // 162.5, điều này không có ý nghĩa gì, vì làm thế nào mà tuổi trung bình có thể lớn hơn 1 trong 2 độ tuổi được.
