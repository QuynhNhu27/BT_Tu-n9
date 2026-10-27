# Giải thích logic hàm hiển thị danh sách dự án

**Sinh viên:** Trần Thị Quỳnh Như – MSSV 125000162
**File code:** `script.js`

## 1. Ý tưởng

Thay vì viết HTML cho từng thẻ dự án, em lưu thông tin dự án trong **một mảng dữ liệu**, rồi dùng **vòng lặp** để tự động tạo giao diện. Muốn thêm dự án mới chỉ cần thêm một object vào mảng, không phải sửa HTML.

## 2. Dữ liệu mẫu

Mỗi dự án là một **object**, tất cả nằm trong mảng `projects`:

```js
const projects = [
  {
    title: "Portfolio Cá Nhân",
    badge: "Kiểm Tra Giữa Kỳ",
    image: "project-portfolio.svg",
    alt: "Giao diện Portfolio cá nhân...",
    description: "Website hồ sơ cá nhân...",
    tags: ["Semantic HTML5", "CSS Variables", "JavaScript DOM"],
    link: "https://github.com/QuynhNhu27/Nhu_TranThiQuynh_125000162",
  },
  // ... các dự án khác
];
```

## 3. Cách truyền dữ liệu vào hàm

### Bước 1 – Gọi hàm chính khi trang tải xong

```js
document.addEventListener("DOMContentLoaded", () => {
  renderProjects(projects, "projects-list");
});
```

Em truyền 2 tham số vào `renderProjects`:
- `projects` → mảng dữ liệu cần hiển thị.
- `"projects-list"` → `id` của khung HTML sẽ chứa các thẻ.

### Bước 2 – Hàm `renderProjects(list, containerId)` duyệt mảng

```js
function renderProjects(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = "";
  for (let i = 0; i < list.length; i++) {
    html += createProjectCard(list[i], i);
  }
  container.innerHTML = html;
}
```

- Tìm khung HTML theo `containerId`.
- Dùng vòng lặp `for` đi qua từng phần tử của mảng.
- Mỗi lần lặp, **truyền một object dự án `list[i]` và vị trí `i`** vào hàm `createProjectCard`.
- Cộng dồn chuỗi HTML trả về, cuối cùng gán vào khung bằng `innerHTML`.

### Bước 3 – Hàm `createProjectCard(project, index)` tạo một thẻ

```js
function createProjectCard(project, index) {
  const tagsHTML = project.tags
    .map((tag) => `<li class="project-tag">${tag}</li>`)
    .join("");

  return `
    <article class="project-card">
      <img src="${project.image}" alt="${project.alt}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <ul>${tagsHTML}</ul>
      <a href="${project.link}">Xem Repo GitHub ↗</a>
    </article>`;
}
```

- Nhận vào **một** object `project`.
- Lấy từng thuộc tính (`project.title`, `project.image`, `project.link`...) chèn vào HTML bằng **template string** `${...}`.
- Mảng `tags` được biến thành danh sách `<li>` bằng `.map()` rồi `.join("")`.
- `index` dùng để đánh số nhãn và tạo độ trễ hiệu ứng (`index * 100`).

## 4. Sơ đồ luồng dữ liệu

```
Mảng projects
     │  (truyền vào)
     ▼
renderProjects(projects, "projects-list")
     │  vòng lặp for, mỗi lần lấy 1 phần tử
     ▼
createProjectCard(projects[i], i)  ──►  trả về chuỗi HTML 1 thẻ
     │  cộng dồn
     ▼
container.innerHTML = html  ──►  3 thẻ hiện lên trang
```

## 5. Phần HTML

Trong `index.html`, mục Dự Án chỉ còn một khung trống, JS sẽ đổ nội dung vào:

```html
<article class="projects-grid" id="projects-list"></article>
<script src="script.js"></script>
```

## 6. Lợi ích

- Code HTML ngắn gọn, không lặp lại.
- Thêm / sửa / xóa dự án chỉ cần sửa mảng dữ liệu.
- Tách riêng **dữ liệu** và **giao diện**, dễ bảo trì.
