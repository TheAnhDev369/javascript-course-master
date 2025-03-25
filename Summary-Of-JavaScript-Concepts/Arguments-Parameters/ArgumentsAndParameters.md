PHÂN BIỆT ĐƯỢC PARAMETERS VÀ ARGUMENTS TRONG JS

1. Parameters (Tham số)
   <br>

ChatGPT

- Là biến được định nghĩa trong khai báo hàm
- Chúng hoạt động như placeholder để nhận giá trị khi hàm được gọi.

ME

- Chúng hoạt động như Placeholders (phần giữ chỗ) để nhận giá trị được điền vào chỗ trống placeholders đó khi hàm được gọi (call Functions)

Ví dụ 1: (Example 1)

function sayHello(name) {
<br>// 'name' là parameters hay tham số
<br>console.log("Xin chào " + name);
<br>}
<br>

2.  Arguments (Đối số)
    <br>

ChatGPT

- Là giá trị thực tế được truyền vào khi gọi hàm .
- Chúng thay thế các tham số trong hàm .

Me

- Là giá trị thực tế được truyền vào khi gọi hàm, giá trị đó sẽ được điền vào placeholders trống đó .
- Chúng sẽ trực tiếp thay thế cho các tham số trong hàm (tham số đó được định nghĩa khi khai báo hàm)
  Ví dụ 2: (Example 2)
  <br>
  sayHello("Anh");
