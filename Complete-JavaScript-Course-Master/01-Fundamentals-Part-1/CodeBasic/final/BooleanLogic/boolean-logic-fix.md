# Boolean Logic (Logic Boolean trong lập trình)

# Fix by ChatGPT

Boolean Logic là một phần cơ bản trong khoa học máy tính, dùng để xử lý các giá trị đúng (true) và sai (false) nhằm giải quyết các bài toán logic phức tạp. Tương tự như toán học dùng các phép tính cộng, trừ, nhân, chia để xử lý số, logic Boolean dùng các **toán tử logic** để xử lý các giá trị true/false.

### Các toán tử logic cơ bản

#### 1. Toán tử AND (&& - VÀ)

- Trả về `true` **chỉ khi tất cả** các điều kiện đều đúng.
- Nếu **ít nhất một điều kiện sai**, kết quả là `false`.

**Ví dụ:**

```js
true && true; // true
true && false; // false
false && false; // false
```

\*\* Tổng quát:

true && true && true → true

true && false && true → false

#### 2. Toán tử OR (|| - HOẶC)

- Trả về true nếu ít nhất một điều kiện đúng.

- Chỉ trả về false nếu tất cả các điều kiện đều sai.

**Ví dụ:**

```js
true || false; // true
false || false; // false
false || true; // true
```

\*\* Tổng quát:

false || false || true → true

false || false || false → false

#### 3. Toán tử NOT (! - PHỦ ĐỊNH)

- Đảo ngược giá trị của một biểu thức Boolean.

- Nếu là true sẽ trở thành false, và ngược lại.

```js
!true; // false
!false; // true
```

## Phân tích các tổ hợp logic:

### Phân tích kết quả

| Biểu thức | Giải thích                              | Kết quả |
| --------- | --------------------------------------- | ------- | ------ | --- | -------------- | ----- |
| `!A`      | Phủ định A: `!false` → `true`           | true    |
| `A && B`  | `false && true` → false (một sai → sai) | false   |
| `!A && B` | `true && true` → true                   | true    |
| `A        |                                         | !B`     | `false |     | false` → false | false |

=> Ghi nhớ:

- AND cần tất cả đều đúng → true

- OR chỉ cần một đúng → true

- NOT chỉ đảo ngược giá trị
