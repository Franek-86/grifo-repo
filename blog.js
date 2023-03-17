import "./toggleSidebar.js";
import data from "./data.js";
const container = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
// if length is 1 hide buttons
if (data.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}
// if length is 2, add copies of slides
let articles = [...data];
if (data.length === 2) {
  articles = [...data, ...data];
}
container.innerHTML = articles
  .map((person, slideIndex) => {
    const { img, title, date, text, link } = person;
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === articles.length - 1) {
      position = "last";
    }
    if (data.length <= 1) {
      position = "active";
    }
    return `<article class="slide ${position}">
  <a href="${link}" class="blog-page-link"><img src=${img} class="img" alt="${title}"/>
  <h4>${title}</h4>
  <p class="blog-page-title">${date}</p>
  <p class="blog-page-text">
   ${text}
  </p>
<div class="quote-icon">
</div></a>
 </article>`;
  })
  .join("");

const startSlider = (type) => {
  // get all three slides active,last next
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove("active");
  last.classList.remove("last");
  next.classList.remove("next");

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};
nextBtn.addEventListener("click", () => {
  startSlider();
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
