/**
 *  Cho đến nay, ta đã chỉ sử dụng các toán tử so sánh
 *  để đưa ra các quyết định với các câu lệnh if-else!
 *  Nhưng giả sử nếu chúng ta muốn so sánh xem 2 giá trị có thực sự bằng nhau hay không,
 *  thay vì 1 giá trị lớn hơn hoặc nhỏ hơn giá trị kia.
 *  Vì vậy, chúng ta có các tính toán bình đẳng khác nhau
 */
//  Ví dụ :
//  Tạo 1 câu lệnh if, câu lệnh này sẽ in ra bảng điều khiển,
//  một người sẽ đủ tuổi thành người lớn chỉ khi tuổi chính xác của họ là 18.
//  Ngược lại, khi chưa đủ chính xác 18 tuổi, họ sẽ chưa trở thành người lớn.

// const age = 17;
const age = 18;
if (age === 18) console.log("Bạn vừa đủ tuổi thành người lớn (Strict)");
/**
 * Bất cứ khi nào khối if chỉ có 1 dòng, thay vì viết {}, ta sẽ bỏ qua và ta có thể trực tiếp như trên.
 * Cũng như các toán tử so sánh, toán tử này sẽ trả về Đúng(True) hoặc Sai (False) => Giá trị có kiểu Boolean.
 * Trong trường hợp này, true sẽ chỉ là kết quả của toán tử này trong trường hợp cả 2 bên HOÀN TOÀN GIỐNG NHAU.
 * 18 === 18   =>  True
 * 18 === 19   =>  False
 * 18 ==='18'  =>  False
 * Do so sánh thực tiếp luôn mà không ép kiểu, tất nhiên là chuỗi '18' sẽ khác với số 18.
 */

//  Đừng nhầm lẫn toán tử gán (=) với toán tử so sánh (==) và (===).
//  Sự khác biệt giữa toán tử so sánh 3 dấu bằng với toán tử so sánh 2 dấu bằng ở đây là:

/**
 *  Ba dấu bằng gọi là toán tử bình đẳng nghiêm ngặt (so sánh chặt).
 *  Nghiêm ngặt bởi vì nó không thực hiện cưỡng chế kiểu.
 *  Toán tử so sánh === không thực hiện ép kiểu trước khi so sánh, mà so sánh trực tiếp luôn.
 *  Nếu khác kiểu dữ liệu:
 *      => Trả về false ngay lập tức.
 *  Nếu cùng kiểu dữ liệu:
 *      => Giá trị giống nhau: Trả về True.
 *      => Giá trị khác nhau:  Trả về False.
 *
 *  Hai dấu bằng gọi là toán tử so sánh bình đẳng lỏng lẻo (so sánh lỏng).
 *  Lỏng lẻo là bởi vì nó thực sự thực hiện cưỡng chế kiểu.
 *  Dó đó, nó trả về cả 2 giá trị sau khi ép kiểu, rồi mới so sánh.
 *  Tuy ban đầu giống nhau về giá trị (value) và khác kiểu (type).
 *  Nhưng sau đó JS sẽ thực hiện ép kiểu tự động,
 *  chuyển đổi kiểu dữ liệu của cả 2 bên về cùng 1 kiểu rồi mới so sánh.
 *  Nếu hai giá trị giống nhau sau khi ép kiểu => Trả về True
 *  Nếu hai giá trị khác nhau sau khi ép kiểu => Trả về False
 */

//  Ví dụ :
//  18 == '18' => True
//  Dấu == sẽ cưỡng chế kiểu của chuỗi '18' từ String sang Number, sau đó so sánh 2 số 18 với nhau => True.
if (age == "18") console.log("Bạn vừa đủ tuổi thành người lớn (loose)");

//  =>  Theo nguyên tắc chung cho viết mã code sạch, ta nên TRÁNH sử dụng toán tử bình đẳng lỏng lẻo (Loose) nhất có thể.
//  =>  Khi so sánh các giá trị, hãy luôn sử dụng toán tử so sánh bình đẳng nghiêm ngặt (Strict)
//  =>  Đây là điều mà hầu hết các nhà phát triển JS khuyên ta nên làm, bởi vì đây là 1 quy tắc tốt.

//  Ngay cả khi chúng ta thực sự cần cần chuyển đổi kiểu dữ liệu.
//  Trong trường hợp đó, tốt hơn nên chuyển đổi giá trị theo cách thủ công trước khi đem so sánh hơn là dựa vào toán tử so sánh lỏng lẻo.
//  Một số luôn luôn mặc định sử dụng toán tử ba dấu bằng và giả vờ rằng toán tử hai dấu bằng không tồn tại.

//  Ví dụ 1,2:
/**
 * Ví dụ đơn giản về cách để nhận giá trị từ bất kỳ trang web nào,
 * Ta có thể làm điều đó bằng cách sử dụng chức năng lời nhắc (prompt).
 * Đây là cách nó hoạt động:
 * prompt("What is your favourite number ?");
 * Sẽ hiển thị ra 1 cửa sổ lời nhắc với nội dung truyền vào trong hàm là 1 chuỗi,
 * sau đó nhập vào ô prompt và nhấm OK (trả về, return) .
 * Hãy tạo 1 biến để lưu giá trị đó:
 */

//  Trường hợp 1:   Sử dụng dấu ===
const favouriteNumber1 = prompt(`What is your favourite number ?
    (Loose)`);
console.log(typeof favouriteNumber1); //  Luôn là string, vì prompt luôn trả về chuỗi.
if (favouriteNumber1 == 9) {
  // '9' == 9 => True => chạy vào if
  //  10 == 9 => False => chạy vào else
  console.log("Đây là chuỗi số 9");
} else {
  console.log("Đây không phải chuỗi (String) số 9");
}

/**
 *  Với favouriteNumber1, khi ta nhập vào prompt số 9, kiểu của số 9 đó sẽ là chuỗi, mang giá trị là 9.
 *  Với câu điều kiện, nếu favouriteNumber1 == 9, thì log ra 'Đây là chuỗi số 9' => True
 *  Vì lúc nhập vào prompt số 9, biến favouriteNumber1 mang giá tị là chuỗi số 9,
 *  khi so sánh với số 9 ở câu điều kiện, thì chuỗi số 9 đó sẽ được JS ép kiểu tự động từ String sang Number,
 *  lúc này cả 2 số đều cùng giá trị và kiểu dữ liệu, => True và log ra if
 *  Ngược lại, nếu ta nhập (chuỗi) số không phải 9, ví dụ là 10 chẳng hạn, thì JS vẫn sẽ tự động ép kiểu từ String 10 sang Number 10.
 *  Tuy nhiên lúc này đã về cùng kiểu dữ liệu nhưng khác giá trị => False => Log ra khối else 'Đây không phải chuỗi(String) số 9.
 */

//  Trường hợp 2:   Sử dụng dấu ==
const favouriteNumber2 = Number(
  prompt(`What is your favourite number ?
    (Strict)`)
);
if (favouriteNumber2 === 9) {
  // 9  === 9       => True     => log vào khối if
  // 10 === 9       => False    => log vào else
  console.log("Đây là số 9 (Number)");
} else {
  console.log(`Đây không phải số 9`);
}
/**
 *  Với favouriteNumber2, khi ta nhập vào prompt số 9, kiểu của số đó sẽ luôn là chuỗi ('9').
 *  Với điều kiện của if, nếu favouriteNumber2 === 9, thì log ra "Đây là chuỗi số 9 (String) => False.
 *  Vì lúc nhập vào prompt số 9, biến favouriteNumber2 sẽ mang giá trị là chuỗi số 9.
 *  Do sử dụng === nên JS sẽ không ép kiểu như == mà so sánh luôn kiểu dữ liệu của chuỗi số 9 ở prompt với số 9 ở điều kiện so sánh.
 *  Lúc này khác kiểu nên False => Log ra khối else 'Đây không phải chuỗi số 9'.
 *  Ngược lại để có thể true và in ra khối if, ta có thể sử dụng hàm Number để ép kiểu của số nhập vào hàm prompt không phải luôn luôn là string, mà là number.
 *  Thì khi ta nhập vào prompt số 9, thay vì chuỗi 9 thì ta có số 9, và đem so sánh kiểu dữ liệu, cả 2 số ở prompt và điều kiện cùng type => True.
 *  Tiếp đó so sánh dữ liệu cả 2 đều = 9 => True => log ra khối if.
 */
//  Ví dụ 3:
//  Ngoài if-else, ta cũng có thể sử dụng if-elseif

const favouriteNumber3 = Number(prompt("What is your favourite number ?"));
if (favouriteNumber3 === 21) {
  console.log("Cool! 21 is an amazing number");
} else if (favouriteNumber3 === 7) {
  console.log("7 is also cool number!");
} else if (favouriteNumber3 === 9) {
  console.log(`9 is absolute cool number`);
} else {
  console.log(`Number is not 21 or 7 or 9`);
}
//  Đầu tiên là kiểm tra xem số ở if(nếu..thì) đầu có phải là 23 hay không, nếu phải thì log
//  Nếu không thì sẽ chuyển đến khối tiếp theo là else if (cái khác), nếu cái khác mà đúng thì log ra
//  Nếu tất cả các cái khác mà không cái nào đúng, thì log ra else(ngược lại) cuối cùng.

//  Chúng ta cũng có đã 1 cách mới để kiểm tra điều kiện theo thứ tự:
//  Đầu tiên, kiểm tra điều kiện trong if,
//  Nếu đk đúng, chương trình sẽ log ra thông báo.
//  Nếu đk sai, chương trình sẽ không nhảy ngay vào khối else để kết luận,
//  mà sẽ nhảy vào kiểm tra lần lượt điều kiện khối else if từ đầu tiên đến cuối cùng theo thứ tự.
//  Nếu một điều kiện trong else if sai, chương trình sẽ kiểm tra các điều kiện tiếp theo lần lượt.
// (elseif 1 sai sẽ nhảy sang kiểm tra elseif 2, 2 sai thì sang 3 cho đến khi tìm thấy else nào có điều kiện đúng)
//  Chỉ khi tất cả các điều kiện trong if và else if đều sai, thì chương trình mới vào khối else cuối để kết luận.

//  Nếu kiểm tra điều kiện của biến favouriteNumber3 trong if
//  Ta nhập vào prompt số 21 và 9 lần lượt chẳng hạn,
//  điều kiện đầu tiên của if là đúng(21) => log ra, không nhảy vào else if hay else.
//  Và nếu điều kiện sai, số 9 chẳng hạn, chương trình sẽ không nhảy vào khối else kết luận luôn,
//  mà sẽ kiểm tra lần lượt các điều kiện else if từ đầu đến cuối, với else if 1 sai do 21 === 9 => False
//  Tiếp đó là 7 == 9 => False, và đến else if cuối, 9 === 9 => True => log ra `9 is absolute cool number`.
//  Nếu ta nhập vào prompt số 90, chạy qua if và else đều sai => Chương trình nhảy vào else kết luận và log ra `Number is not 21 or 7 or 9`.

//  Ta đã được học về toán tử so sánh bình đẳng, tất nhiên ngược lại cũng có toán tử so sánh khác(diffirence operators).
//  Ví dụ 5:
//  Với !== là so sánh khác nghiêm ngặt (strict inequality).
//  Nếu khác về cả giá trị và kiểu khi so sánh trực tiếp
// => Trả về True
//  Nếu khác về kiểu nhưng giống nhau về giá trị => True
//  Nếu giống nhau về kiểu dữ liệu và giá trị    => Trả về => false

//  Và != là so sánh khác lỏng lẻo (loose inequality).
//  Sẽ thực hiện ép kiểu trước khi so sánh.
//  Nếu hai giá trị khác nhau sau khi ép kiểu.
//  =>  Trả về True
//  Nếu hai giá trị giống nhau sau khi ép kiểu
//  => Trả về False

const favouriteNumber5 = Number(prompt("Difference number: "));

if (favouriteNumber5 !== 5 && favouriteNumber5 !== 6) {
  console.log("Number 7 is the correct result");
} else if (favouriteNumber5 !== 5) {
  console.log("Why not 5?");
} else {
  console.log("Why not 6?");
}

//  Kết luận:
//  Dù là so sánh bình đẳng hay so sánh khác, hãy luôn sử dụng so sánh nghiêm ngặt.

/** ChatGPT
 * 📌 Phân tích ví dụ của bạn:
 * const favouriteNumber1 = prompt(`What is your favourite number? (Loose)`);
 * console.log(typeof favouriteNumber1); // Luôn là "string"
 *
 * if (favouriteNumber1 == 9) {
 * console.log("Đây là chuỗi số 9");
 * } else {
 * console.log("Đây không phải chuỗi (String) số 9");
 * }
 *
 * 📌 Khi nhập vào 9 trong prompt:
 * prompt() luôn trả về chuỗi, nên "9" (string).
 * Khi so sánh với 9 (number), JS tự động ép kiểu "9" thành 9.
 * Lúc này, 9 == 9 → Điều kiện true → Log "Đây là chuỗi số 9".
 *
 * 📌 Khi nhập vào 10:
 * prompt() trả về "10" (string).
 *
 * So sánh if ("10" == 9):
 * "10" ép kiểu thành 10 (number).
 * 10 != 9 → Điều kiện false → Log "Đây không phải chuỗi (String) số 9".
 *
 * 🔥 Kết luận:
 * == (so sánh lỏng) sẽ ép kiểu tự động khi cần thiết.
 *
 * Khi nhập từ prompt(), kiểu dữ liệu luôn là chuỗi.
 *
 * Nếu muốn so sánh chặt, nên dùng === để tránh ép kiểu ngoài ý muốn.
 * 📌 Ví dụ bảo vệ code khỏi lỗi ép kiểu ngoài ý muốn:
 *
 * const favouriteNumber1 = Number(prompt(`What is your favourite number? (Strict)`));
 * console.log(typeof favouriteNumber1); // Lúc này là "number"
 * if (favouriteNumber1 === 9) {
 * console.log("Đây là số 9");
 * } else {
 * console.log("Đây không phải số 9");
 * }
 *  =>  ✅ Cách này giúp đảm bảo favouriteNumber1 luôn là số trước khi so sánh! 🚀
 */
