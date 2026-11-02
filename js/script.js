const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = document.querySelector("#form-note");
    const name = document.querySelector("#sender-name").value.trim();
    const email = document.querySelector("#sender-email").value.trim();
    const message = document.querySelector("#sender-message").value.trim();

    if (!name || !email || !message) {
      note.textContent = "Vui lòng điền đầy đủ các trường trước khi gửi.";
      note.className = "form-note error";
      return;
    }

    note.textContent = "Thông tin đã được kiểm tra ở trình duyệt. Đây là bản demo nên tin nhắn chưa được gửi đến máy chủ.";
    note.className = "form-note success";
    contactForm.reset();
  });
}
