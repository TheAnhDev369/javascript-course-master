# Tổng hợp các dấu trong JavaScript

## 1. Dấu ngoặc `()` - Dùng cho hàm

Dấu ngoặc tròn **dùng để gọi hàm hoặc truyền tham số**.

```js
console.log("Hello!"); // Gọi hàm console.log
alert("Xin chào!"); // Gọi hàm alert
```

📌 **Lưu ý:**

- `console.log;` ❌ (Sai, vì chưa có `()` để gọi hàm)
- `console.log();` ✅ (Đúng, gọi hàm `log`)

---

## 2. Dấu ngoặc `[]` - Dùng cho mảng & truy cập thuộc tính

- **Tạo mảng**

```js
let arr = [1, 2, 3];
console.log(arr[0]); // 1 (truy cập phần tử đầu tiên)
```

- **Truy cập thuộc tính object theo dạng key**

```js
let person = { name: "John", age: 30 };
console.log(person["name"]); // "John"
```

---

## 3. Dấu ngoặc `{}` - Dùng cho object & khối lệnh

- **Tạo object**

```js
let obj = { name: "Alice", age: 25 };
```

- **Dùng trong `if`, `for`, `function`**

```js
if (true) {
  console.log("Hello");
}
```

---

## 4. Dấu `.` - Truy cập thuộc tính object

```js
let user = { name: "David" };
console.log(user.name); // "David"
```

---

## 5. Dấu `,` - Ngăn cách giá trị trong danh sách

```js
let numbers = [1, 2, 3, 4];
function greet(name, age) {
  console.log(name, age);
}
greet("John", 25);
```

---

## 6. Dấu `:` - Dùng trong object & toán tử điều kiện

- **Trong object**

```js
let person = { name: "Anna", age: 20 };
```

- **Toán tử điều kiện (`? :`)**

```js
let age = 18;
let result = age >= 18 ? "Được phép" : "Không được phép";
console.log(result); // "Được phép"
```

---

## 7. Dấu `;` - Kết thúc câu lệnh (tuỳ chọn)

```js
console.log("Hello");
console.log("World");
```

---

## 8. Dấu `=`, `==`, `===` - So sánh và gán

| Dấu   | Ý nghĩa                                | Ví dụ        | Kết quả              |
| ----- | -------------------------------------- | ------------ | -------------------- |
| `=`   | Gán giá trị                            | `let x = 5;` | `x` nhận giá trị `5` |
| `==`  | So sánh lỏng (chỉ so sánh giá trị)     | `"5" == 5`   | `true`               |
| `===` | So sánh chặt (so sánh cả kiểu dữ liệu) | `"5" === 5`  | `false`              |

📌 **Nên dùng `===` thay vì `==` để tránh lỗi!** 🚀

---

## 9. Dấu `!` (Phủ định) & `!!` (Ép kiểu Boolean)

- **Dấu `!` (phủ định)**

```js
console.log(!true); // false
console.log(!0); // true (vì 0 là falsy)
```

- **Dùng `!!` để ép kiểu sang Boolean**

```js
console.log(!!"Hello"); // true
console.log(!!0); // false
```

---

## 10. Dấu `+`, `-`, `*`, `/`, `%` - Toán tử số học

```js
console.log(5 + 3); // 8
console.log(10 % 3); // 1 (chia lấy dư)
console.log(2 ** 3); // 8 (lũy thừa)
```

---

## 11. Dấu `++` & `--` - Tăng/Giảm giá trị

```js
let x = 5;
console.log(x++); // 5 (trả về x trước rồi tăng lên)
console.log(x); // 6
console.log(++x); // 7 (tăng trước rồi trả về x)
```

---

## 12. Dấu `&&`, `||`, `??` - Toán tử logic

- **`&&` (AND)**

```js
console.log(true && false); // false
console.log(5 > 3 && 10 > 5); // true
```

- **`||` (OR)**

```js
console.log(false || true); // true
console.log(0 || "Hello"); // "Hello" (Lấy giá trị truthy đầu tiên)
```

- **`??` (Nullish Coalescing)**

```js
let user = null;
console.log(user ?? "Khách"); // "Khách" (nếu null hoặc undefined thì lấy giá trị bên phải)
```

---

## 13. Dấu `=>` - Arrow function

```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

---

## 🏆 Tóm tắt cực ngắn

| Ký hiệu                 | Ý nghĩa                         |
| ----------------------- | ------------------------------- | ------- | ---------------------- |
| `()`                    | Gọi hàm                         |
| `[]`                    | Mảng, truy cập thuộc tính       |
| `{}`                    | Object, khối lệnh               |
| `.`                     | Truy cập thuộc tính object      |
| `,`                     | Ngăn cách giá trị               |
| `:`                     | Object, toán tử điều kiện       |
| `;`                     | Kết thúc câu lệnh               |
| `=`, `==`, `===`        | Gán, so sánh lỏng, so sánh chặt |
| `!`, `!!`               | Phủ định, ép kiểu Boolean       |
| `+`, `-`, `*`, `/`, `%` | Toán tử số học                  |
| `++`, `--`              | Tăng/Giảm giá trị               |
| `&&`, `                 |                                 | `, `??` | Logic AND, OR, Nullish |
| `=>`                    | Arrow function                  |

📌 **Có chỗ nào bạn thấy khó nhớ không? Mình giúp bạn mẹo nhớ thêm nhé!** 🚀
