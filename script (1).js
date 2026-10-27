/* =============================================================================
   THỬ THÁCH JS: TỰ ĐỘNG SINH DANH SÁCH DỰ ÁN TỪ MẢNG DỮ LIỆU
   Thay vì viết HTML cho từng thẻ, ta lưu thông tin trong một mảng object
   rồi dùng vòng lặp để tạo giao diện.
   ============================================================================= */

// 1. Dữ liệu mẫu: mỗi phần tử là một dự án
const projects = [
  {
    title: "Portfolio Cá Nhân",
    badge: "Kiểm Tra Giữa Kỳ",
    image: "project-portfolio.svg",
    alt: "Giao diện Portfolio cá nhân của Trần Thị Quỳnh Như",
    description:
      "Website hồ sơ cá nhân phục vụ bài kiểm tra giữa kỳ môn Thiết kế Web tại Trường Đại học Lạc Hồng, triển khai qua GitHub Pages.",
    tags: ["Semantic HTML5", "CSS Variables", "JavaScript DOM"],
    link: "https://github.com/QuynhNhu27/Nhu_TranThiQuynh_125000162",
  },
  {
    title: "Dự Án TKWeb",
    badge: "Thực Hành LHU",
    image: "project-tkweb.svg",
    alt: "Kho lưu trữ dự án TKWeb trên GitHub",
    description:
      "Kho lưu trữ bài tập và các bài thực hành giao diện môn Thiết kế Web tại Khoa Công nghệ Thông tin Trường Đại học Lạc Hồng.",
    tags: ["HTML5", "CSS3", "Bài tập thực hành"],
    link: "https://github.com/QuynhNhu27/TKWeb",
  },
  {
    title: "Dự Án GioiThieuu",
    badge: "Bài Tập Mở Đầu",
    image: "project-gioithieu.svg",
    alt: "Kho lưu trữ dự án GioiThieuu trên GitHub",
    description:
      "Kho lưu trữ trang web giới thiệu cá nhân và thực hành cấu trúc web cơ bản được lưu trữ công khai trên tài khoản GitHub QuynhNhu27.",
    tags: ["Cấu trúc Web", "Trang giới thiệu", "Mã nguồn GitHub"],
    link: "https://github.com/QuynhNhu27/GioiThieuu",
  },
];

// 2. Hàm tạo HTML cho MỘT thẻ dự án
function createProjectCard(project, index) {
  // Vòng lặp nhỏ: sinh danh sách tag
  const tagsHTML = project.tags
    .map((tag) => `<li class="project-tag">${tag}</li>`)
    .join("");

  return `
    <article class="project-card" data-aos="fade-up" data-aos-delay="${index * 100}">
      <figure class="project-visual">
        <img src="${project.image}" alt="${project.alt}" class="project-img" loading="lazy">
        <figcaption class="project-badge-top">${project.badge}</figcaption>
      </figure>
      <article class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <ul class="project-tags" aria-label="Công nghệ dự án ${index + 1}">
          ${tagsHTML}
        </ul>
        <footer class="project-footer">
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
            Xem Repo GitHub ↗
          </a>
        </footer>
      </article>
    </article>
  `;
}

// 3. Hàm hiển thị TOÀN BỘ danh sách: duyệt mảng bằng vòng lặp for
function renderProjects(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = "";
  for (let i = 0; i < list.length; i++) {
    html += createProjectCard(list[i], i);
  }

  container.innerHTML = html;
}

// 4. Gọi hàm khi trang đã tải xong
document.addEventListener("DOMContentLoaded", () => {
  renderProjects(projects, "projects-list");
});
