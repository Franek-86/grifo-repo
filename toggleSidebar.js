const navToggle = document.querySelector(".nav-toggle");
const closeBtn = document.querySelector(".close-btn");
const lines = document.querySelectorAll(".line:not(.not-this)");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const footerYear = document.querySelector(".year");

navToggle.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
  console.log("bo");
});
closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});

lines.forEach(function (question) {
  const testBtn = question.querySelector(".line-title");

  testBtn.addEventListener("click", function () {
    question.classList.toggle("show-text");
  });
});

footerYear.innerHTML = new Date().getFullYear();
