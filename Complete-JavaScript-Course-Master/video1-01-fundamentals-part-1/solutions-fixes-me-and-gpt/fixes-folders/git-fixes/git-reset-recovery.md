# Khôi phục file sau khi dùng `git reset` trong Git

Fix By Me and ChatGPT

## 🧨 Tình huống

Bạn đang làm việc trên một dự án Git. Lỡ tay dùng:

```bash
git reset --hard
# hoặc
git reset --mixed
#hoặc
git reset
```

Rồi mất hết những thay đổi trong thư mục làm việc (working directory) mà chưa commit.

❓ Vấn đề

- Các thay đổi chưa commit bị mất sau lệnh git reset.

- Cảm giác: "Chết rồi, chưa commit mà mất tiêu file 😱"

- Mong muốn: Khôi phục lại file như cũ, ít nhất là như trước lệnh reset.

✅ Giải pháp (nếu chưa --hard hoặc chưa mất hoàn toàn)

✅ Lệnh git checkout HEAD -- . làm gì?

- HEAD: chính là commit hiện tại (commit cuối cùng).

- --: dấu hiệu phân cách giữa tham chiếu (HEAD) và file.

- .: chỉ tất cả file trong thư mục hiện tại.

👉 Tóm lại: Khôi phục toàn bộ file về trạng thái của commit cuối cùng (HEAD).

⚠️ Lưu ý: Lệnh này không khôi phục được file đã tồn tại nhưng chưa bao giờ được git add (vì Git chưa từng theo dõi nó).

## 📌 Các trường hợp khôi phục phổ biến

| Trường hợp                        | Có khôi phục được không? | Cách xử lý                                                             |
| --------------------------------- | ------------------------ | ---------------------------------------------------------------------- |
| File đã `add` nhưng chưa `commit` | ✅ Có thể                | Dùng `git checkout HEAD -- <file>` hoặc `git checkout HEAD -- .`       |
| File chưa từng `git add`          | ❌ Không thể             | Không có cách khôi phục vì Git chưa từng theo dõi file                 |
| Dùng `git reset --soft`           | ✅ Dễ cứu                | Chỉ thay đổi HEAD, không mất file                                      |
| Dùng `git reset --mixed`          | ✅ Còn file              | File bị unstaged, nhưng vẫn tồn tại, có thể `checkout`                 |
| Dùng `git reset --hard`           | ⚠️ Nguy hiểm             | File bị xóa, nếu chưa ghi đè có thể thử `git reflog` để tìm lại commit |

🛡️ Mẹo tránh lỗi trong tương lai

- Luôn git status trước khi git reset.

- Dùng git stash để tạm cất thay đổi trước khi thử gì nguy hiểm:

```bash
git stash
# hoặc nếu không muốn giữ staged changes:
git stash -k
```

- Thường xuyên commit nhỏ, để không mất dữ liệu nếu cần rollback.

🧠 Tổng kết

- Lệnh git checkout HEAD -- . là vị cứu tinh trong trường hợp lỡ reset và chưa mất hoàn toàn file.

- Tuy nhiên, không thể khôi phục những file Git chưa từng biết đến.

- Cẩn trọng với git reset --hard. Nếu lỡ dùng, hãy thử git reflog để tra lại commit trước đó.
