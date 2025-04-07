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
