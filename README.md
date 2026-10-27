# 🌸 Portfolio Cá Nhân - Trần Thị Quỳnh Như
### Bài Kiểm Tra Giữa Kỳ Môn Thiết Kế Web • Trường Đại Học Lạc Hồng (LHU)

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-ff69b4?style=for-the-badge&logo=github)](https://quynhnhu27.github.io/Nhu_TranThiQuynh_125000162/)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic%20No%20Div-e34f26?style=for-the-badge&logo=html5&logoColor=white)](#-tiêu-chuẩn-kỹ-thuật)
[![CSS3](https://img.shields.io/badge/CSS3-Pastel%20Variables-1572b6?style=for-the-badge&logo=css3&logoColor=white)](#-tiêu-chuẩn-kỹ-thuật)
[![Font](https://img.shields.io/badge/Font-Roboto-9333ea?style=for-the-badge)](#-tiêu-chuẩn-kỹ-thuật)

---

## 👩‍🎓 Thông Tin Sinh Viên
- **Họ và tên:** Trần Thị Quỳnh Như
- **Mã số sinh viên (MSSV):** 125000162
- **Đơn vị:** Khoa Công nghệ Thông tin - Trường Đại học Lạc Hồng (LHU)
- **Nơi ở & học tập:** TP. Biên Hòa, Tỉnh Đồng Nai
- **Email sinh viên:** [125000162@lachong.edu.vn](mailto:125000162@lachong.edu.vn)
- **Tài khoản GitHub:** [@QuynhNhu27](https://github.com/QuynhNhu27)
- **Định hướng học tập:** Lập trình Frontend
- **Ngoại ngữ đang học:** Tiếng Anh & Tiếng Nhật

---

## 🌐 Đường Dẫn Dự Án
- **Website trực tiếp (GitHub Pages):** [https://quynhnhu27.github.io/Nhu_TranThiQuynh_125000162/](https://quynhnhu27.github.io/Nhu_TranThiQuynh_125000162/)
- **Kho lưu trữ GitHub (Repository):** [https://github.com/QuynhNhu27/Nhu_TranThiQuynh_125000162](https://github.com/QuynhNhu27/Nhu_TranThiQuynh_125000162)

---

## 📂 Cấu Trúc Thư Mục Repository

```text
Nhu_TranThiQuynh_125000162/
├── index.html           # Cấu trúc 100% Semantic HTML5 (Tuyệt đối không dùng thẻ <div>)
├── style.css            # Hệ thống CSS Variables pastel, Responsive Grid/Flexbox, tính năng pure CSS
├── README.md            # Tài liệu tổng quan giới thiệu dự án và hướng dẫn sử dụng
├── PROMPT_LOG.md        # Nhật ký Prompt chi tiết và tài liệu kiến trúc kỹ thuật
└── assets/              # Thư mục hình ảnh & mockup đồ họa chuẩn vector SVG
    ├── avatar.svg       # Hình minh họa Chibi sinh viên CNTT Quỳnh Như
    ├── favicon.svg      # Icon monogram "QN" pastel
    ├── project-portfolio.svg # Mockup Dự án Portfolio cá nhân
    ├── project-tkweb.svg     # Mockup Dự án TKWeb
    └── project-gioithieu.svg # Mockup Dự án GioiThieuu
```

---

## 🌟 Điểm Nổi Bật & Tiêu Chuẩn Kỹ Thuật

### 1. Chuẩn Semantic HTML5 Tuyệt Đối (Không Thẻ `<div>`)
- Toàn bộ trang web **hoàn toàn không sử dụng thẻ `<div>`**.
- Thay thế 100% bằng các thẻ chuẩn ngữ nghĩa HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<figure>`, `<figcaption>`, `<dl>`, `<dt>`, `<dd>`, `<ol>`, `<ul>`, `<li>`, `<p>`, `<span>`, `<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>`, `<textarea>`, `<button>`.
- Thẻ `<nav>` chỉ dùng cho menu điều hướng chính, không lạm dụng cho nhóm nút bấm. Không dùng `<aside>` cho nội dung chính.

### 2. Thiết Kế Pastel Nữ Tính & CSS Variables
- **Bảng màu:** Hồng phấn (`#fbcfe8`), tím lavender (`#e9d5ff`), cam đào (`#fed7aa`) trên nền kem hồng (`#fff8f9`), tạo cảm giác mềm mại, ngọt ngào và chỉn chu.
- **Font chữ:** Duy nhất font chữ **Roboto** từ Google Fonts, hỗ trợ hiển thị tiếng Việt hoàn hảo, không bị đứt gãy hay cắt dấu thanh.
- **Màu tiêu đề thống nhất:** Sử dụng một màu mận tím đậm (`#441c30`) cho toàn bộ tiêu đề, đảm bảo độ tương phản cao đạt chuẩn WCAG.

### 3. Bố Cục Đồng Đều & Responsive Đa Thiết Bị
- Cả 6 mục (*Trang chủ, Giới thiệu, Kỹ năng, Dự án, Hành trình, Liên hệ*) dùng chung một khung độ rộng tối đa chuẩn **1160px**, khoảng cách trên dưới đồng đều `84px 0`.
- Phần đầu mỗi mục đồng dạng: nhãn nhỏ + tiêu đề + mô tả căn giữa.
- Toàn bộ lưới thẻ bố trí bằng **CSS Grid** đối xứng, thẻ có cùng chiều cao, bo góc mềm `20px` và đổ bóng mượt mà `0.3s`.
  - **Kỹ năng:** 6 thẻ (3 cột x 2 hàng trên Desktop, 2 cột Tablet, 1 cột Mobile).
  - **Dự án:** 3 thẻ (3 cột Desktop, 2 cột Tablet, 1 cột Mobile).

### 4. Thử Thách JavaScript: Tự Động Sinh Danh Sách Dự Án
- **Yêu cầu:** Tạo một hàm JS xử lý việc hiển thị danh sách sản phẩm/dịch vụ. Thay vì viết HTML cho từng sản phẩm, dùng vòng lặp để tự động sinh giao diện từ một danh sách dữ liệu mẫu.
- **Cách làm (file `script.js`):**
  1. `projects`: mảng dữ liệu mẫu, mỗi phần tử là một object (tên, nhãn, ảnh, mô tả, tag, link GitHub).
  2. `createProjectCard(project, index)`: trả về chuỗi HTML của **một** thẻ dự án; danh sách tag sinh bằng `.map()`.
  3. `renderProjects(list, containerId)`: dùng vòng lặp `for` duyệt mảng, ghép HTML và gán vào khung bằng `innerHTML`.
  4. Gọi `renderProjects(projects, "projects-list")` khi sự kiện `DOMContentLoaded` xảy ra.
- Trong `index.html`, mục Dự Án chỉ còn một khung trống:
  ```html
  <article class="projects-grid" id="projects-list"></article>
  <script src="script.js"></script>
  ```
- Muốn thêm dự án mới chỉ cần thêm một object vào mảng `projects`, không phải sửa HTML.

### 5. Tương Tác Bằng CSS/HTML Thuần
- **5 Tính năng tương tác thực hiện 100% bằng CSS/HTML thuần:**
  1. *Hiệu ứng gõ chữ (Typewriter):* CSS `@keyframes typewriterLoop` kết hợp hàm `steps()`.
  2. *Bộ đếm số thống kê (Counter):* Modern CSS Houdini `@property` với `counter-reset` và `counter()`.
  3. *Menu điện thoại (Mobile Menu):* Checkbox Hack thuần CSS (`#nav-toggle:checked ~ .site-nav`).
  4. *Kiểm tra form (Form Validation):* CSS `:user-invalid` và `:user-valid` tự động báo lỗi trực quan.
  5. *Nút lên đầu trang (Back to top):* Thẻ neo `<a href="#top">` với `html { scroll-behavior: smooth; }`.

---

## 💼 Danh Sách Dự Án Thực Tế Trên GitHub
Website chỉ trình bày 3 dự án thực tế trên tài khoản GitHub [@QuynhNhu27](https://github.com/QuynhNhu27):

1. **[Portfolio Cá Nhân (Repo Nhu_TranThiQuynh_125000162)](https://github.com/QuynhNhu27/Nhu_TranThiQuynh_125000162):** Website hồ sơ cá nhân phục vụ bài kiểm tra giữa kỳ môn Thiết kế Web tại Trường Đại học Lạc Hồng, triển khai qua GitHub Pages.
2. **[Dự Án TKWeb (Repo TKWeb)](https://github.com/QuynhNhu27/TKWeb):** Kho lưu trữ bài tập và các bài thực hành giao diện môn Thiết kế Web tại Khoa CNTT Trường Đại học Lạc Hồng.
3. **[Dự Án GioiThieuu (Repo GioiThieuu)](https://github.com/QuynhNhu27/GioiThieuu):** Kho lưu trữ trang web giới thiệu cá nhân và thực hành cấu trúc web cơ bản trên GitHub.

---

## 🚀 Hướng Dẫn Xem Và Xuất Bản Lên GitHub Pages

### Cách 1: Xem trực tiếp trên máy tính
1. Tải hoặc clone repository về máy tính.
2. Nhấp đúp chuột vào file `index.html` để mở trực tiếp trên bất kỳ trình duyệt hiện đại nào (Chrome, Edge, Firefox, Safari).

### Cách 2: Triển khai qua GitHub Pages
1. Đẩy mã nguồn lên kho lưu trữ GitHub của bạn:
   ```bash
   git init
   git add .
   git commit -m "feat: Hoan thien Portfolio ca nhan Tran Thi Quynh Nhu 125000162"
   git branch -M main
   git remote add origin https://github.com/QuynhNhu27/Nhu_TranThiQuynh_125000162.git
   git push -u origin main
   ```
2. Trên GitHub, vào mục **Settings** ➔ chọn tab **Pages** ở cột trái.
3. Tại phần **Build and deployment**, mục **Branch** chọn `main` và thư mục `/ (root)`, nhấn **Save**.
4. Chờ 1 - 2 phút, website sẽ hoạt động trực tiếp tại địa chỉ:
   `https://quynhnhu27.github.io/Nhu_TranThiQuynh_125000162/`

---
*© 2026 Trần Thị Quỳnh Như - MSSV: 125000162 - Khoa Công nghệ Thông tin, Trường Đại học Lạc Hồng.*
