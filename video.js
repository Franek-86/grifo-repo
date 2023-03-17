const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// const submenu = document.querySelector(".submenu");
// const hero = document.querySelector(".hero");
// const nav = document.querySelector(".nav");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
    video.classList.add("show-poster");
  } else {
    btn.classList.remove("slide");
    video.play();
    video.classList.remove("show-poster");
  }
});
