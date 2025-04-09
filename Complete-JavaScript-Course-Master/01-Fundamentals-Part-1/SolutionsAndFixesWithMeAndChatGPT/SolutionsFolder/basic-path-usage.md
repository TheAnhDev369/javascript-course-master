Cách sử dụng đúng liên kết path trong html-css-js

Ví dụ:

Trong file `index.html`, bạn muốn:

- Gắn ảnh `logo.png`
- Gắn script `app.js`

- Cấu trúc thư mục:

  project

  - index.html
  - js
    - app.js
  - img/
    - logo.png

---

## 😓 Cách sai

```html
<!-- ❌ Sai: đang ở index.html, nhưng lại nhầm folder -->
<img src="js/logo.png" alt="Logo" />
<script src="app.js"></script>

<!-- JS file thật ra nằm trong thư mục js/ -->
```

## ✅ Cách đúng

```html
<!-- ✅ Đúng: chỉ đường dẫn đúng đến file -->
<img src="img/logo.png" alt="logo" />
<script src="js/app.js"></script>
```
