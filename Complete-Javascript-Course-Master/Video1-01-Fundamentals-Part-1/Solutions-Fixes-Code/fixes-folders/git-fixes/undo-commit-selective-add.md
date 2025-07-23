## Undo Commit & Selective Add

Fix By Me and ChatGPT

"Undo Accidental Commit and Selective Git Add" – Hoàn tác commit nhầm và add lại có chọn lọc.
[ReadErrorAndWarningMessages](../../CodeBasic/final/ReadErrorAndWarningMessages/)

# Hướng Dẫn Reset và Add Lại Một Thư Mục Cụ Thể Trong Git

## Trường Hợp

Bạn đã vô tình `git add -A` toàn bộ thư mục và `git commit` rồi `git push`, nhưng bây giờ bạn chỉ muốn giữ lại một thư mục cụ thể (ví dụ: `ReadErrorAndWarningMessages`) và loại bỏ các thư mục khác khỏi commit.

---

## Các Bước Thực Hiện

### 1. Reset Commit Gần Nhất (Nếu Đã Commit)

```sh
git reset --soft HEAD~1
```

> Lệnh này sẽ giữ lại thay đổi nhưng xóa commit gần nhất.

### 2. Reset Trạng Thái Staged Của Tất Cả File

```sh
git reset
```

> Giúp bỏ trạng thái staged mà không xóa file.

### 3. Chỉ Add Lại Thư Mục Cần Thiết

```sh
git add final/ReadErrorAndWarningMessages
```

> Chỉ add thư mục `ReadErrorAndWarningMessages` mà không ảnh hưởng đến các thư mục khác.

### 4. Kiểm Tra Lại Trạng Thái Git

```sh
git status
```

> Kiểm tra xem chỉ có thư mục `ReadErrorAndWarningMessages` được staged hay chưa.

### 5. Commit Lại

```sh
git commit -m "Chỉ commit thư mục ReadErrorAndWarningMessages"
```

### 6. Push Lên GitHub (Ghi Đè Lên Commit Trước)

```sh
git push origin main --force
```

> **Lưu ý:** `--force` sẽ ghi đè commit trên GitHub, cần cẩn thận khi sử dụng.

---

## Tổng Kết

- **Reset commit** nếu đã commit.
- **Bỏ trạng thái staged** của toàn bộ file.
- **Chỉ add lại thư mục cần thiết.**
- **Commit và push lại.**

Làm theo đúng các bước trên, bạn sẽ tránh được việc push nhầm nhiều thư mục không mong muốn! 🚀
