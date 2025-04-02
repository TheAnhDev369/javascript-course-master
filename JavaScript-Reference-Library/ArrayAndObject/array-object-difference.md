# object_array_difference.md

## 📌 Cách Dùng và Sự Khác Biệt giữa Object và Array trong JavaScript

### 1️⃣ Truy cập thuộc tính của Object bằng `[]`

- **Dùng key (chuỗi hoặc biến chứa chuỗi)** để truy cập thuộc tính của Object.
- Nếu key là một biến, giá trị của biến sẽ được dùng để tìm thuộc tính trong Object.

#### ✅ Ví dụ:

```js
let person = { name: "Alice", age: 25 };
console.log(person["name"]); // "Alice"

let key = "age";
console.log(person[key]); // 25
```

#### ❌ Lỗi phổ biến:

```js
console.log(person[0]); // undefined (Object không có index như Array)
```

---

### 2️⃣ Truy cập phần tử của Array bằng `[]`

- **Dùng chỉ mục (index, số nguyên bắt đầu từ 0)** để truy cập phần tử.
- Nếu chỉ mục là một biến, giá trị của biến sẽ được dùng để tìm phần tử trong Array.

#### ✅ Ví dụ:

```js
let numbers = [10, 20, 30];
console.log(numbers[0]); // 10

let index = 2;
console.log(numbers[index]); // 30
```

#### ❌ Lỗi phổ biến:

```js
console.log(numbers["1"]); // 20 (Vì "1" tự động chuyển thành số)
console.log(numbers["age"]); // undefined (Array không có key "age")
```

---

### 🔥 3️⃣ Bảng So Sánh Object và Array

| Đặc điểm                           | Object `{}`                      | Array `[]`                     |
| ---------------------------------- | -------------------------------- | ------------------------------ |
| **Dùng để làm gì?**                | Lưu trữ dữ liệu có **key-value** | Lưu trữ danh sách có **index** |
| **Truy cập bằng gì?**              | Key (chuỗi hoặc biến)            | Chỉ mục (số nguyên)            |
| **Dạng key trong `[]`?**           | Chuỗi `"name"`, `"age"`          | Số `0`, `1`, `2`               |
| **Truy cập động (`[]` với biến)?** | `object[key]`                    | `array[index]`                 |
| **Ví dụ**                          | `{ name: "Alice", age: 25 }`     | `[10, 20, 30]`                 |

---

### 🎯 4️⃣ Mẹo Nhớ để Không Nhầm Lẫn

✔ **Nếu bên trong `[]` là số ➝** **Chắc chắn là Array**  
✔ **Nếu bên trong `[]` là chuỗi ➝** **Chắc chắn là Object**  
✔ **Nếu dùng `.` được mà `[]` cũng được ➝** **Đó là Object**  
✔ **Nếu không dùng `.` được ➝** **Có thể là Object hoặc Array với số**
