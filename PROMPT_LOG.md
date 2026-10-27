# BÁO CÁO NHẬT KÝ PROMPT VÀ TÀI LIỆU DỰ ÁN (PROMPT LOG)
## BÀI KIỂM TRA GIỮA KỲ MÔN THIẾT KẾ WEB - HỌC KỲ 1 NĂM HỌC 2026-2027
**Trường Đại học Lạc Hồng (LHU) - Khoa Công nghệ Thông tin**

---

### 1. THÔNG TIN SINH VIÊN & BÀI THI
- **Họ và tên sinh viên:** Trần Thị Quỳnh Như
- **Mã số sinh viên (MSSV):** 125000162
- **Trường:** Khoa Công nghệ Thông tin - Trường Đại học Lạc Hồng (LHU)
- **Địa chỉ học tập & sinh sống:** TP. Biên Hòa, Tỉnh Đồng Nai
- **Email sinh viên:** `125000162@lachong.edu.vn`
- **Tài khoản GitHub:** [QuynhNhu27](https://github.com/QuynhNhu27)
- **Tên học phần:** Thiết kế Web (Web Design)
- **Hình thức thi:** Thi mở (Open Book Exam), nộp sản phẩm qua GitHub Pages
- **Tên thư mục Repository:** `Nhu_TranThiQuynh_125000162`
- **Địa chỉ kho lưu trữ:** `https://github.com/QuynhNhu27/Nhu_TranThiQuynh_125000162`
- **Địa chỉ triển khai (GitHub Pages):** `https://quynhnhu27.github.io/Nhu_TranThiQuynh_125000162/`

---

### 2. TỔNG HỢP CÁC ĐIỂM CHỈNH SỬA & HOÀN THIỆN THEO YÊU CẦU

#### 2.1. Bố Cục Đồng Đều, Mượt, Đẹp
- **Khung đồng nhất:** Toàn bộ 6 mục (`#hero`, `#about`, `#skills`, `#projects`, `#journey`, `#contact`) đều nằm trong cùng một khung độ rộng tối đa chuẩn: `max-width: 1160px; margin: 0 auto; padding: 0 24px;`.
- **Khoảng cách đồng đều:** Tất cả các mục áp dụng khoảng cách trên dưới đồng nhất: `padding: 84px 0;`.
- **Phần đầu mục chuẩn mực (`.section-header`):** Nhãn nhỏ (`.section-subtitle`) + Tiêu đề (`.section-title`) + Đoạn mô tả (`.section-desc`), tất cả căn giữa, cùng cỡ chữ, cùng hiệu ứng gạch chân pastel.
- **Lưới thẻ CSS Grid đối xứng, không thẻ lẻ:**
  - **Kỹ năng (Skills):** Đúng 6 thẻ (3 cột x 2 hàng trên Desktop, 2 cột trên Tablet, 1 cột trên Mobile).
  - **Dự án (Projects):** Đúng 3 thẻ (3 cột trên Desktop, 2 cột trên Tablet, 1 cột trên Mobile).
  - **Thống kê (About):** Đúng 3 thẻ số liệu thực tế (3 cột đều nhau).
  - Mọi thẻ đều có cùng chiều cao (`height: 100%`), cùng bo góc (`border-radius: 20px`), cùng bóng mờ (`box-shadow: var(--shadow-sm)`).
- **Chuyển động mượt mà:** Hiệu ứng hover nâng nhẹ (`transform: translateY(-5px);`) kết hợp đổ bóng mượt trong `0.3s cubic-bezier(0.25, 0.8, 0.25, 1)`. Thiết lập trạng thái `:focus-visible` rõ ràng với viền sáng `3px solid var(--pastel-pink-deep)` cho khả năng tiếp cận.

#### 2.2. Hiệu Ứng Cuộn Mượt Hơn
- **Loại bỏ hoàn toàn `data-aos` khỏi các thẻ `<section>`.**
- **Gắn `data-aos="fade-up"` có chủ đích:**
  - Phần đầu mục (`header.section-header`): `data-aos="fade-up"`.
  - Từng thẻ bên trong các mục: `data-aos="fade-up"` với delay so le theo cột: `data-aos-delay="0"`, `data-aos-delay="100"`, `data-aos-delay="200"`.
- **Duy nhất một dòng JavaScript:**
  ```javascript
  AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 100 });
  ```
- **Animate.css:** Giữ đúng chuẩn đề, chỉ sử dụng cho tiêu đề hero (`animate__fadeInDown`) và nút CTA (`animate__pulse animate__infinite animate__slower`).
- Duy trì chế độ thân thiện tiếp cận `prefers-reduced-motion` trong CSS.

#### 2.3. Chuẩn Ngữ Nghĩa Semantic HTML5 (Tuyệt Đối Không Dùng Thẻ `<div>`)
- **Loại bỏ 100% thẻ `<div>`:** Toàn bộ trang web không còn bất kỳ thẻ `<div>` nào. Thay thế hoàn toàn bằng các thẻ ngữ nghĩa HTML5: `<section>`, `<article>`, `<header>`, `<footer>`, `<figure>`, `<figcaption>`, `<dl>`, `<dt>`, `<dd>`, `<ol>`, `<ul>`, `<li>`, `<p>`, `<span>`, `<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>`, `<textarea>`, `<button>`.
- **Không dùng `<nav>` cho nhóm nút bấm:** Các nút CTA trong Hero sử dụng thẻ `<p class="hero-actions">`. Thẻ `<nav>` chỉ dành riêng cho thanh điều hướng chính trên header.
- **Không dùng `<aside>` cho nội dung chính:** Nội dung giới thiệu, thống kê và thông tin liên hệ được chuyển đổi sang `<article>` và danh sách định nghĩa `<dl>`.
- **Bỏ hoàn toàn thanh tiến độ phần trăm:** Kỹ năng được trình bày bằng danh sách thẻ chip pastel xinh xắn, mềm mại (`.chip-list`, `.chip-tag`).

#### 2.4. 100% Thông Tin Thật - Không Bịa
- **Thông tin sinh viên xác thực:**
  - Họ và tên: **Trần Thị Quỳnh Như**
  - MSSV: **125000162**
  - Đơn vị: **Khoa CNTT - Trường Đại học Lạc Hồng**
  - Nơi ở: **TP. Biên Hòa, Tỉnh Đồng Nai**
  - Định hướng: **Lập trình Frontend**
  - Ngoại ngữ: **Tiếng Anh và Tiếng Nhật**
  - GitHub: [QuynhNhu27](https://github.com/QuynhNhu27)
  - Email sinh viên: `125000162@lachong.edu.vn`
- **Đã xóa bỏ hoàn toàn:** GPA, học bổng, chứng chỉ, số giờ code, số điện thoại, ngày tháng cụ thể, phần trăm kỹ năng, "sẵn sàng thực tập", chuyên ngành hẹp, và các dự án bịa.
- **Dự án chỉ đúng 3 thẻ thực tế trên tài khoản GitHub `QuynhNhu27`:**
  1. **Portfolio cá nhân:** Website hồ sơ cá nhân cho bài kiểm tra giữa kỳ môn Thiết kế Web, triển khai qua GitHub Pages (`repo Nhu_TranThiQuynh_125000162`).
  2. **Dự án TKWeb:** Kho lưu trữ bài tập và các bài thực hành giao diện môn Thiết kế Web tại Khoa CNTT Trường Đại học Lạc Hồng (`repo TKWeb`).
  3. **Dự án GioiThieuu:** Kho lưu trữ trang web giới thiệu cá nhân và thực hành cấu trúc web cơ bản trên GitHub (`repo GioiThieuu`).
  - Mỗi dự án chỉ gồm một câu mô tả chung; nút liên kết dẫn thẳng tới đúng repo GitHub tương ứng.
- **Số liệu thống kê thực tế đếm được:**
  - **3** Dự án trên GitHub
  - **2** Ngoại ngữ đang học (Tiếng Anh & Tiếng Nhật)
  - **2** Thư viện hỗ trợ (Animate.css & AOS)
- **Hành trình (Timeline):** 4 mốc học tập thực tế tại Đại học Lạc Hồng, hoàn toàn không ghi ngày tháng.

---

### 3. CẤU TRÚC TÀI NGUYÊN REPOSITORY

```text
Nhu_TranThiQuynh_125000162/
├── index.html           # 100% Semantic HTML5 không <div>, CDN AOS & 1 dòng AOS.init(), Animate.css
├── style.css            # CSS Variables, Design System pastel nền kem hồng, Responsive Grid/Flexbox
├── PROMPT_LOG.md        # Nhật ký Prompt và báo cáo chi tiết kỹ thuật
└── assets/              # Hình ảnh minh họa chuẩn SVG pastel sắc nét
    ├── avatar.svg       # Chân dung Chibi sinh viên CNTT Quỳnh Như
    ├── favicon.svg      # Icon monogram "QN"
    ├── project-portfolio.svg # Mockup Dự án Portfolio cá nhân
    ├── project-tkweb.svg     # Mockup Dự án TKWeb
    └── project-gioithieu.svg # Mockup Dự án GioiThieuu
```

---

### 4. HƯỚNG DẪN TRIỂN KHAI LÊN GITHUB PAGES

1. Khởi tạo và đẩy toàn bộ mã nguồn lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: Cap nhat Portfolio chuan Semantic HTML5 khong div - Tran Thi Quynh Nhu 125000162"
   git branch -M main
   git remote add origin https://github.com/QuynhNhu27/Nhu_TranThiQuynh_125000162.git
   git push -u origin main
   ```

2. Kích hoạt GitHub Pages trong mục **Settings** ➔ **Pages** ➔ Chọn nhánh `main` và thư mục `/ (root)` ➔ Bấm **Save**.
3. Đường dẫn website hoạt động trực tiếp:
   **`https://quynhnhu27.github.io/Nhu_TranThiQuynh_125000162/`**

---
*Báo cáo được hoàn thiện và xác thực 100% bởi sinh viên Trần Thị Quỳnh Như - MSSV 125000162.*

---
## 5. ĐỐI CHIẾU QUÁ TRÌNH PROMPT ENGINEERING VỚI ĐỀ THI

**Lưu ý về tính xác thực:** Phần báo cáo kỹ thuật ở trên phản ánh cấu trúc sản phẩm; chưa phải bản chép nguyên văn đầy đủ lịch sử trò chuyện với AI. Không tự tạo Prompt giả để thay thế lịch sử thực tế.

### 5.1. Prompt khởi tạo

**Mục đích:** Yêu cầu AI hỗ trợ xây dựng Portfolio cá nhân cho sinh viên với các phần Trang chủ, Giới thiệu, Kỹ năng, Dự án, Hành trình, Liên hệ.

**Prompt nguyên văn đã gửi:** *Cần đối chiếu và điền lại từ lịch sử sử dụng Google Antigravity; hiện chưa có dữ liệu để chép nguyên văn.*

**Kết quả quan sát:** Website gồm 6 section, có ảnh chân dung, hình minh họa dự án và thanh điều hướng.

### 5.2. Iteration 1 — Semantic HTML5 và CSS

**Yêu cầu tinh chỉnh:** Sử dụng `header`, `nav`, `main`, `section`, `article`, `footer`; hạn chế phần tử không mang ngữ nghĩa; tạo hệ thống biến màu trong `:root`, dùng Grid/Flexbox và media queries.

**Prompt nguyên văn:** *Cần bổ sung từ lịch sử AI.*

**Kết quả kiểm tra mã nguồn:** HTML có đủ các thẻ ngữ nghĩa chính; CSS dùng biến `var(...)` và có điều kiện `@media` để hỗ trợ màn hình nhỏ.

### 5.3. Iteration 2 — Hiệu ứng Animate.css và cuộn trang

**Yêu cầu tinh chỉnh:** Tạo hiệu ứng xuất hiện nhẹ nhàng, hover/focus rõ ràng nhưng không ảnh hưởng khả năng đọc nội dung.

**Prompt nguyên văn:** *Cần bổ sung từ lịch sử AI.*

**Vấn đề kỹ thuật đã phát hiện:** AOS chính thức cần thư viện JavaScript để khởi tạo, trái với yêu cầu bổ sung của giảng viên là không sử dụng JavaScript.

**Cách xử lý đã triển khai:** Giữ Animate.css và các hiệu ứng hover/focus hiện có; xóa thẻ `script` và chuyển hiệu ứng xuất hiện khi cuộn sang CSS `animation-timeline: view()` trên trình duyệt có hỗ trợ. Trình duyệt không hỗ trợ vẫn hiển thị đầy đủ nội dung. Giải pháp này **không phải AOS chính thức**, dù có thể tạo hiệu ứng tương tự.

### 5.4. Debug — Ảnh chân dung trên GitHub Pages

**Lỗi:** Ảnh không tải do đường dẫn không khớp vị trí file trên repository.

**Cách khắc phục:** Nhúng ảnh JPEG trực tiếp trong HTML và kiểm tra giao diện từ link GitHub Pages.

**Kết quả:** Ảnh chân dung hiển thị trên phiên bản triển khai.

### 5.5. Đánh giá cá nhân

- **AI giúp tiết kiệm thời gian nhất ở đâu?** AI hỗ trợ dựng cấu trúc HTML, hệ thống CSS và đề xuất cách xử lý responsive để mình tập trung hơn vào việc xem và chỉnh giao diện.
- **Bài học khi đặt Prompt:** Cần ghi rõ công nghệ được phép sử dụng, thẻ ngữ nghĩa bắt buộc, yêu cầu về hiệu ứng và khả năng hiển thị trên di động. Không nên nhận ngay code AI trả về mà cần thử trực tiếp trên trình duyệt và đối chiếu từng tiêu chí.
- **Giới hạn của bản nhật ký:** Những Prompt chưa lưu nguyên văn ở trên phải được đối chiếu với lịch sử thật, không nên xem phần mô tả mục tiêu là bằng chứng về câu lệnh đã gửi.
