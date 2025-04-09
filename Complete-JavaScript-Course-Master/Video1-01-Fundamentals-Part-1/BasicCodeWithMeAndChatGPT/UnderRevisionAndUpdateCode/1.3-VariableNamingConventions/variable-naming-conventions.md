Không nên đặt tên ngẫu nhiên cho biến mà nên đặt theo các quy tắc quy chuẩn hiện đại

Ví dụ như camelCase, vậy camelCase (Lower Camel Case) là gì ?

- camelCase có nghĩa là bất cứ khi nào ta có nhiều từ trong 1 tên biến, ta thường viết từ đầu tiên bằng chữ thường, sau đó là tất cả các từ tiếp theo viết bằng chữ hoa .
- Ví dụ như, myFullName, firstName, myId,MyAdress, firtNamePersion,...
- Nếu chỉ có 1 từ, có thể viết thường
- Ví dụ như: name, id, work, adress,...
  --> Đây là 1 loại tiêu chuẩn trong thế giới JS

Ngoài ra, cũng có những cách đặt tên biến khác, ví dụ như:

- first_name, my_full_name, my_id, ... (Snake Case), các từ nối với nhau bằng dấu gạch dưới .
- FirstName, MyFullName,MyId, ...(Pascal Case), viết hoa chữ cái đầu của tất cả các từ .
- first-name, my-full-name, my-id (Kebab Case), các từ được nối với nhau bằng dấu gạch ngang

## ChatGPT

Trong JavaScript, chuẩn thường dùng là camelCase cho biến và hàm, PascalCase cho class.

Khi đặt tên biến trong JavaScript, có một số quy tắc cứng (bắt buộc) và quy tắc mềm (nên tuân theo) để đảm bảo code dễ đọc, dễ hiểu và tránh lỗi.

## CÁC QUY TẮC CỨNG

1.  Không được bắt đầu bằng số

    VD1: 1years, 3years => Lỗi cứ pháp

    VD2: year-1 => Lỗi cứ pháp, không được phép đặt trong tên biến vì JS sẽ hiểu nhầm nó là 1 phép trừ .

    VD3: year_1,Year1, year1 => Đúng cú pháp

2.  Chỉ được chứa các chữ cái (a-z,A-Z), số (0-9), dấu gạch dưới ( \_ ) hoặc ký tự $

3.  Không được trùng với từ khoá Js (Reserved Keywords)

4.  Có phân biệt chữ hoa và chữ thường (case-sensitive)

    VD1: let myVar = 10;

    VD2: let MyVar = 20;

    console.log(myVar); // 10

    console.log(MyVar); // 20

5.  Không sử dụng dấu cách

    VD1: let my variables = 10; => Sai cú pháp vì có dấu cách khi đặt tên biến .

    VD2: letmyVariables = 10; => Đúng cú pháp và đặt tên biến theo quy tắc camelCase .

## CÁC QUY TẮC MỀM

1.  Sử dụng camelCase cho BIẾN VÀ HÀM(\*)
    VD1: let userName = 'AnhDev';

    VD2: function getUserId() {};

2.  Dùng PascalCase cho CLASS VÀ CONSTRUCTOR FUNCTION
    VD1: class UserProfile {}

    VD2: function Person (name) {this.name = name;}

3.  Dùng UPPER_CASE cho HẰNG SỐ (const không thay đổi giá trị)

    VD1: const MAX_LENGHT = 100;

    VD2: const API_URL = "https//:example.com";

4.  Tránh sử dụng var, nên ưu tiên let và const

- Dùng let nếu biến có thể thay đổi
- Dùng const nếu biến không thay đổi

## KẾT LUẬN (CHATGPT)

💡 Kết luận: Chỉ cần tuân theo quy tắc cứng để tránh lỗi, còn quy tắc mềm giúp code chuyên nghiệp, dễ đọc và bảo trì hơn. 🚀
