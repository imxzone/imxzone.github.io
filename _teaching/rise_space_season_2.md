---
layout: teaching
title: "Rise Space Season 2"
slug: rise_space_season_2
---

# Module 1 
## Agenda
- Một số lưu ý khi viết code
- Nhập/Xuất dữ liệu với Python
- Biến & phép gán
- Dữ liệu kiểu Số & các thao tác
- Dữ liệu kiểu Boolean & các thao tác
- Dữ liệu kiểu String & các thao tác

## 1. Lưu ý khi viết code
- Indentaion: Thụt lùi đầu dòng là yếu tố "quan trọng"
- Độ dài tối đa của một đoạn code nên là 59 kí tự. Với dòng code dài thì dùng dấu \ rồi viết tiếp xuống dòng.
- dùng dòng trống (blank line) để phân tách.
- Tên biến có phân biệt chữ hoa, thường. Ví dụ: Abc khác với abc
- Tên biến dùng chữ thương, tên hằng dùng chữ hoa.

## 2. Nhập/Xuất dữ liệu với Python
- Nhập dữ liệu từ bàn phím: chuỗi, số, ... với lệnh input()
- In dữ liệu ra màn hình với lệnh print()

Ví dụ 2.1: Nhập dữ liệu & in dữ liệu
```python
a = input()
print(a)

#>> loc
#>> 'loc'
```

## 3. Biến & phép gán
- Định nghĩa sơ lược về biến: Trường phái đầu tiên coi biến trong Python giống như một cái hộp để lưu trữ dữ liệu hoặc chuỗi mà bạn có thể lưu trữ vào biến và sử dụng nhiều lần. Kết quả của các phép xử lý như tính toán giá trị số, chỉnh sửa chuỗi ký tự sẽ tạm thời được giữ vào biến và dùng để sử dụng cho chương trình sau này.

- Định nghĩa sơ lược về phép gán:

- Phép gán sử dụng toán tử "="
- Biến có thể thay đổi giá trị

### Ví dụ 1:
```python
price = 100
price = 200

print(price)

#>> 200
```

### Ví dụ 2:
```python
name = "Phan Lộc"
name = 2001

print(name)

#>> 2001
```

## 4. Dữ liệu kiểu Số & các thao tác
- Số nguyên (integer)
- Số thực (float)
- Số phức (complex)
- Ép kiểu
- Kiểm tra kiểu bằng type()

Ví dụ 4.1: Số nguyên
```python
so_nguyen = 2001
print(so_nguyen)
print(type(so_nguyen))

#>> 2001
#>> <class 'int'>
```

Ví dụ 4.2: Số thực
```python
so_thuc = 3.6
print(so_thuc)
print(type(so_thuc))

#>> 3.6
#>> <class 'float'>
```

```python
so_thuc = 4
print(so_thuc)
print(type(so_thuc))

#>> 4
#>> <class 'int'>
```

## Các toán tử số học trong Python

| Operator | Mô tả | Cú pháp |
|---------|------|--------|
| `+` | Cộng hai toán hạng | `x + y` |
| `-` | Trừ hai toán hạng | `x - y` |
| `*` | Nhân hai toán hạng | `x * y` |
| `/` | Chia (kết quả số thực) | `x / y` |
| `//` | Chia lấy phần nguyên | `x // y` |
| `%` | Chia lấy dư | `x % y` |
| `**` | Lũy thừa | `x ** y` |

Ví dụ 4.3: Các phép toán tử
```python
so_a = 5
so_b = 2
print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
print(a ** b)

#>> 7
#>> 3
#>> 10
#>> 2.5
#>> 2
#>> 1
#>> 25
```

## 5. Dữ liệu kiểu Boolean & các thao tác
- True/False
- Not operator

Ví dụ 5.1: True/False & Not operator
```python
thi_pass = True
khong_thi_pass = not thi_pass

print(thi_pass)
print(khong_thi_pass)

#>> True
#>> False
```

## 6. Dữ liệu kiểu String & các thao tác
- String/chuỗi là một chuỗi các kí tự bao quanh bởi dấu nháy đơn/nháy đôi.
- Chuỗi nhiều dòng sử dụng 3 nháy đơn/đôi.
- Chuỗi là một mảng bao gồm các kí tự và có thể được truy xuất bằng index.
- In chuỗi ra màn hình

Ví dụ 6.1: Chuỗi
```python
text = "Phan Loc"
print(text)

#>> Phan Loc
```
### Một số thao tác với chuỗi
- Lấy độ dài chuỗi (len)

Ví dụ 6.2: Đếm kí tự
```python
text = "Phan Loc"
do_dai_text = len(text)
print(do_dai_text)

#>> 8
```

- Kiểm tra sự tồn tại của chuỗi (in/not in)

Ví dụ 6.3: Kiểm tra kí tự
```python
text = "Phan Loc"
text_kiem_tra_1 = "S"
text_kiem_tra_2 = "P"

kiem_tra_1 = text_kiem_tra_1 in text
kiem_tra_2 = text_kiem_tra_2 in text

print(kiem_tra_1)
print(kiem_tra_2)

#>> False
#>> True
```

- Slice syntax: lấy một chuỗi con theo start:end index

Ví dụ 6.4: lấy text start:end
```python
text = "Phan Loc"
text_can_lay = text[5:8]

print(text_can_lay)

#>> Loc
```

Ví dụ 6.5: lấy text từ text đến hết

```python
text = "Phan Loc"
text_can_lay = text[2:]

print(text_can_lay)

#>> an Loc
```

Ví dụ 6.6: lấy text từ đầu đến text
```python
text = "Phan Loc"
text_can_lay = text[:7]

print(text_can_lay)

#>> Phan Lo
```

- Viết hoa toàn bộ chuỗi (upper), viết thường toàn bộ chuỗi (lower)

Ví dụ 6.7: upper, lower chuỗi

```python
text = "Phan Loc"
viet_hoa = text.upper()
viet_thuong = text.lower()

print(viet_hoa)
print(viet_thuong)

#>> PHAN LOC
#>> phan loc
```

- Xóa dấu cách (strip)

Ví dụ 6.8: Xóa dấu cách

```python
text = "    Phan Loc    "
text_strip = text.strip()

print(text_strip)

#>> Phan Loc
```

- Thay thế chuỗi ()

Ví dụ 6.9: Thay thế chuỗi

```python
text = "Phan Loc"
text_moi = text.replace("Phan", "Fan")

print(text_moi)

#>> Fan Loc
```

- Nối chuỗi

Ví dụ 6.10: Nối chuỗi
```python
text_1 = "Tôi Yêu"
text_2 = "Em"

text_moi = text_1 + text_2

print(text_moi)

#>> Tôi Yêu Em
```

## Bài Tập Thực Hành
### Bài 1
Viết chương trình nhập một số từ bàn phím và in ra số đó nhân 2.

---

### Bài 2
Viết chương trình nhập vào từ bàn phím **Họ và tên** của người dùng và in ra 2 thông tin:
- Độ dài của tên
- Tên viết hoa (in hoa toàn bộ)

---

### Bài 3
Viết chương trình nhập vào từ bàn phím một số **N (N > 0)**.  
In ra màn hình **N dấu `*`**.

---

### Bài 4
Viết chương trình nhập vào từ bàn phím một **chuỗi ký tự có độ dài tối thiểu 10 ký tự**.  
In ra **chuỗi con** từ **vị trí số 4 đến vị trí số 7**.

---

### Bài 5
Nhập vào **2 số nguyên** từ bàn phím.  
In ra:
- Tổng của 2 số
- Tích của 2 số
- Thương của 2 số
- Hiệu của 2 số

### Bài 6
Nhập vào một số nguyên từ bàn phím.  
In ra:
- Giá trị của số đó  
- Kiểu dữ liệu của số đó  

---

### Bài 7
Nhập vào một số thực từ bàn phím.  
In ra:
- Giá trị vừa nhập  
- Giá trị đó nhân với 3  

---

### Bài 8
Nhập vào 2 số nguyên `a` và `b`.  
In ra:
- Kết quả chia lấy phần nguyên của `a` cho `b`  
- Kết quả chia lấy dư của `a` cho `b`  

---

### Bài 9
Nhập vào một số nguyên.  
In ra:
- Số đó lũy thừa 2  
- Số đó lũy thừa 3  

---

### Bài 10
Nhập vào một chuỗi bất kỳ.  
In ra:
- Độ dài của chuỗi  
- Chuỗi viết thường  
- Chuỗi viết hoa  

---

### Bài 11
Nhập vào **Họ** và **Tên** (mỗi giá trị nhập trên một dòng).  
Nối lại thành chuỗi `"Họ Tên"` và in ra màn hình.

---

### Bài 12
Nhập vào một chuỗi.  
Kiểm tra xem chuỗi đó có chứa ký tự `"a"` hay không.  
In ra kết quả `True` hoặc `False`.

---

### Bài 13
Nhập vào một chuỗi.  
In ra **3 ký tự đầu tiên** của chuỗi đó.

---

### Bài 14
Nhập vào một chuỗi.  
In ra **3 ký tự cuối cùng** của chuỗi đó.

---

### Bài 15
Nhập vào một chuỗi có khoảng trắng ở đầu và cuối.  
In ra chuỗi sau khi đã xóa khoảng trắng.

---

### Bài 16
Nhập vào một chuỗi.  
Thay thế tất cả ký tự `"a"` thành `"@"` và in ra chuỗi mới.

---

### Bài 17
Nhập vào một chuỗi.  
In ra chuỗi đó **2 lần liên tiếp** bằng cách nối chuỗi.

---

### Bài 18
Nhập vào một số nguyên.  
Kiểm tra xem số đó có **lớn hơn 10** hay không.  
In ra kết quả `True` hoặc `False`.

---

### Bài 19
Nhập vào 2 số nguyên `a` và `b`.  
In ra kết quả của biểu thức:
(a + b) * 2


---

### Bài 20
Nhập vào một chuỗi bất kỳ.  
In ra chuỗi con từ **vị trí 2 đến vị trí 5**.

---

### Bài 21
Nhập vào một số nguyên.  
In ra:
- Kiểu dữ liệu ban đầu  
- Kiểu dữ liệu sau khi ép sang `float`  

---

### Bài 22
Nhập vào một số thực.  
Ép kiểu sang số nguyên và in ra kết quả.

---

### Bài 23
Nhập vào một chuỗi.  
Kiểm tra xem chuỗi đó có chứa từ `"Python"` hay không.  
In ra kết quả `True` hoặc `False`.

---

### Bài 24
Nhập vào tên của bạn.  
In ra câu:
Xin chào <tên của bạn>


---

### Bài 25
Nhập vào một chuỗi có ít nhất 5 ký tự.  
In ra:
- Ký tự đầu tiên  
- Ký tự cuối cùng  


# Module 2 Điều kiện rẽ nhánh & Vòng lặp

## Agenda
- Mệnh đề if, if else, if elif else
- Mệnh đề if lồng nhau
- Vòng lặp While, While else, Break, Continue
- Vòng lặp For, Range, Break, Continue
- Hands on
- Assignment

## 1. Mệnh đề if
- Cấu trúc tổng quan của một mệnh đề if
```Python
if <Điều kiện>
    <đoạn lệnh thực thi>
```

- <Điều kiện> là gì ?
    - Là các điều kiện có giá trị Đúng (True)/Sai (False)
    - Điều kiện đơn:
        - Là điều kiện chỉ có một phép so sánh  
        - Ví dụ:
            - `a == b`, `a != b`, `a < b`, `a <= b`, `a > b`, `a >= b`
            - `s1 in S`
            - `NOT (s1 in S)`

    - Điều kiện phức tạp
        - Là điều kiện có nhiều phép so sánh kết nối với nhau bởi **AND**, **OR**
        - Ví dụ:
            - `(a == b) and (a > 0)`

```python
score = 6
if score >= 5:
    print(pass exam)

#>> pass exam
```

- Bài tập thực hành:
Viết chương trình nhập vào Họ và tên nhân viên, xếp loại của nhân viên (xếp loại là A1, A2 hoặc A3) và lương của nhân viên từ bàn phím. Giả sử quy định của công ty là A2 và A3 thưởng như nhau là 3 tháng lương, riêng A1 thì được cộng thêm 1 tháng.

Hãy in ra màn hình họ tên và mức thưởng nhân viên đó được hưởng.

Ví dụ:
Nhập vào Nguyễn Văn A, loại A1 và lương tháng là 10,000,000 đồng thì sẽ in ra

“Nhân viên Nguyễn Văn A xếp loại A1 nên được thưởng lương là 40,000,000 đồng”


Giải mẫu:
```python
name = input("Nhập họ và tên nhân viên: ")
rank = input("Nhập xếp loại (A1, A2, A3): ")
salary = float(input("Nhập lương tháng: "))

if rank == "A1":
    bonus_months = 4
elif rank == "A2" or rank == "A3":
    bonus_months = 3
else:
    bonus_months = 0
    print("Xếp loại không hợp lệ!")

bonus_money = bonus_months * salary

print(
    "Nhân viên ", name,"xếp loại ", rank, "nên được thưởng lương là ", bonus_money, "đồng"
)
```

### Mệnh đề if lồng nhau
- Cấu trúc:
```Python
If <điều kiện 1>:
    if <điều kiện 2>:
        <đoạn lệnh thực thi A>
    else:
        <đoạn lệnh thực thi B>
else:
    if <điều kiện 3>:
        <đoạn lệnh thực thi C>
    elif <điều kiện 4>:
        <đoạn lệnh thực thi D>
    else:
        <đoạn lệnh thực thi E>
```

- Bài tập thực hành:
Viết chương trình nhập vào Chức vụ của nhân viên (CV1, CV2, hoặc CV3) và mức đánh giá A1, A2 hoặc A3. Giả sử quy tắc thưởng như sau:
- Nếu là CV3 thì:
    - Nếu A1 thưởng 2 tháng
    - Còn lại thưởng 1 tháng
- Còn các loại CV khác thì:
    - Nếu A1 thưởng 3 tháng
    - Nếu A2 thưởng 2.5 tháng
    - Còn lại thưởng 2 tháng

Hãy in ra màn hình số tháng sẽ được thưởng của nhân viên vừa nhập.

Ví dụ:

Nhập vào CV3, loại A1 thì sẽ in ra "2 tháng".

## 3. Vòng lặp While
- Thực thi một đoạn lệnh khi điều kiện đưa ra còn đúng.

```Python
Khi mà <còn tiền>:
    <đưa cho người yêu>

While <Điều kiện>:
    <đoạn lệnh thực thi>
```

Ví dụ:

```Python
i = 1
while i < 6:
    print(i)
    i += 1

```

- Mệnh đề Break: phá vỡ vòng lặp

```Python
i = 1
while i < 6:
    print(i)
    if i ==3:
        break
    i += 1

```

- Mệnh đề Continue: bỏ vòng lặp hiện tại, quay về đầu lệnh.

```Python
i = 0
while i < 6:
    i += 1
    if i ==3:
        continue
    print(i)

```

- Mệnh đề else: chạy khi điều kiện của While không còn đúng nữa và chỉ chạy 1 lần.

```Python
i = 1
while i < 6:
    print(i)
    i += 1
else:
    print("i is no longer less than 6")
    
```

- Bài tập thực hành:
Viết chương trình nhập vào Họ và tên nhân viên, xếp loại của nhân viên (xếp loại là A1, A2 hoặc A3).
Nếu người dùng nhập không đúng 1 trong 3 giá trị (A1, A2 hoặc A3) thì yêu cầu nhập lại cho đến khi nhập đúng.
Nếu người dùng nhập đúng thì in ra màn hình Họ và tên của nhân viên và xếp loại của nhân viên đó.

## 4. Vòng lặp For
- Lặp qua phần tử của một dãy giá trị.
- Có thể lặp qua các kí tự của chuỗi hoặc các phần tử của danh sách, tuple, dictionary, set...
- Cú pháp:

```Python
For <tên biến> in <dãy giá trị>:
    <đoạn lệnh thực thi>
```

- Hàm Range(s, e): tạo ra một dãy các số bắt đầu từ s và kết thúc tại e − 1.
- Sử dụng tương đương với for i := 1 to n do trong các ngôn ngữ khác.
- Ví dụ: chạy từ 1 đến 5 và in ra màn hình:

```python
for x in range(1, 6):
    print(x)
```

- Lặp qua các kí tự trong chuỗi.
- Lặp qua các phần tử trong một list.
- Mệnh đề break, continue, else.
- Vòng lặp for lồng nhau.

```Python
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
    for y in fruits:
        print(x, y)
```

- Bài tập Thực hành:

Viết chương trình nhập vào một số từ 1 đến 9. Nếu người dùng nhập ngoài khoảng 1 đến 9 thì yêu cầu nhập lại. Nếu người dùng đã nhập đúng thì in ra bảng cửu chương của số tương ứng.

Ví dụ: người dùng nhập 5 thì in ra:

```Python
5 x 1 = 5
5 x 2 = 10
...
...
5 x 9 = 45
5 x 10 = 50
```

## Bài Tập

### Bài 1
Viết chương trình nhập vào một số **N** từ bàn phím và in ra đó là **số chẵn hay số lẻ**.

---

### Bài 2
Viết chương trình nhập vào **2 số X, Y**, in ra kết quả so sánh **X** và **Y**.  
Ví dụ:
- “X lớn hơn Y”
- “X nhỏ hơn Y”
- “X bằng Y”

---

### Bài 3
Viết chương trình nhập vào **tên môn**, **điểm số** và **họ tên của học sinh**.

- Tên môn phải là **toán**, **văn** hoặc **anh**  
- Nếu nhập sai, yêu cầu người dùng nhập lại  

Chương trình cần tính điểm và in ra **họ tên** và **điểm cuối cùng** của học sinh, biết rằng:

- Môn Toán: Hệ số **3**
- Môn Văn: Hệ số **2**
- Môn Anh: Hệ số **1**

**Ví dụ:**
- Nhập vào môn Toán, 8 điểm → điểm cuối cùng là **8 × 3 = 24 điểm**
- Nhập vào môn Văn, 7 điểm → điểm cuối cùng là **14 điểm**

### Bài 4
Viết chương trình giả lập trò chơi **Oẳn Tù Tì**.

**Phần 1:**  
Cho người dùng nhập vào **1 trong 3 giá trị**: **“Đấm”**, **“Lá”**, **“Kéo”**.  
Máy tính cũng sẽ **chọn ngẫu nhiên** 1 trong 3 giá trị **“Đấm”**, **“Lá”**, **“Kéo”** cho mình.  
Chương trình cần **in ra ai là người chiến thắng**.

Biết rằng đoạn mã máy tính chọn ngẫu nhiên được cho sẵn là:

```python
import random
may_chon = random.choice(["Đấm", "Lá", "Kéo"])
```

## Assignment

Viết chương trình giả lập trò chơi **Oẳn Tù Tì (Phần 2)**.

### Phần 1
Đã làm trong **Hands-on**. Nếu chưa làm thì hoàn thành **Phần 1** trước.

### Phần 2
Sửa chương trình và thêm nội dung sau:  
Sau mỗi lần chơi sẽ hỏi người chơi **có chơi tiếp không?**  
- Nếu người dùng nhập vào **“Có”** thì chơi tiếp game mới  
- Ngược lại, game sẽ **thoát**

