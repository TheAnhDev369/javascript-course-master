/**
 * Thử thách lập trình số 1
 * Mark và John đang cố gắng so sánh BMI (Chỉ số khối cơ thể) của họ, được
    tính bằng công thức:
 * BMI = khối lượng / chiều cao ** 2 = khối lượng / (chiều cao * chiều cao) 
 * (khối lượng tính bằng kg và chiều cao tính bằng mét).
    Nhiệm vụ của bạn:
    1. Lưu trữ khối lượng và chiều cao của Mark và John trong các biến
    2. Tính toán BMI của cả hai người bằng công thức (bạn thậm chí có thể triển khai cả hai
    phiên bản)
    3. Tạo một biến Boolean 'markHigherBMI' chứa thông tin về
    liệu Mark có BMI cao hơn John hay không.
    Dữ liệu thử nghiệm:
    § Dữ liệu 1: Marks nặng 78 kg và cao 1,69 m. John nặng 92 kg và cao 1,95 m.
    § Dữ liệu 2: Marks nặng 95 kg và cao 1,88 m. John nặng 85 kg và cao 1,76 m.
    CHÚC MAY MẮN  
 */
//  Data 1:
//  Can nang va chieu cao cua Mark
const masskMark = 78;//  78kg
const heightMark = 1.69;//  1.69m
//  Can nang va chieu cao cua John
const massJohn = 92;//  92kg
const heightJohn = 1.95; //    1.95m

//  Tinh toan chi so BMI cua Mark va John
const BMIMark = masskMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);
//  27.309968138370508, 24.194608809993426
//  Ta thay duoc BMI cua Mark cao hon BMI cua John

//  Tạo một biến Boolean 'markHigherBMI' chứa thông tin về
//  liệu Mark có BMI cao hơn John hay không.
const markHigherBMI = BMIMark > BMIJohn;//    True
console.log(markHigherBMI);

//  Data 2:
//  Can nang va chieu cao cua Mark
const masskMark2 = 95;      // 95kg
const heightMark2 = 1.88;   // 1.88m
//  Can nang va chieu cao cua John
const massJohn2 = 85;       // 85kg
const heightJohn2 = 1.76;   // 1.76m
//  Tinh BMI data 2 cua ca Mark va John
const BMIMark2 = masskMark2 / heightMark2 **2;//    Ct1: bmi = mass / height ** 2;
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);// Ct2: bmi = mass / (height * height);
const markHigherBMI2 = BMIMark2 > BMIJohn2; //  Thong tin ve viec Mark co cao hon John o data 2 hay khong, cau tra loi la khong => false
console.log(BMIMark2, BMIJohn2, markHigherBMI2);
//  26.87867813490267 27.44059917355372 false