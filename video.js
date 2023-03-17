const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide-switch")) {
    btn.classList.add("slide-switch");
    video.pause();
    video.classList.add("show-poster");
  } else {
    btn.classList.remove("slide-switch");
    video.play();
    video.classList.remove("show-poster");
  }
});
