const lenis = new Lenis();
let progressBar = document.getElementById("progress-bar");
let height = document.documentElement.scrollHeight - window.innerHeight;


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
document.addEventListener("scroll", event => {
  progressBar.style.width = (window.scrollY / height) * 100 + "%"
});

requestAnimationFrame(raf);