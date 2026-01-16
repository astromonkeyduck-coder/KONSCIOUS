const progressBar = document.getElementById("progress-bar");
const backToTop = document.getElementById("back-to-top");

const updateProgress = () => {
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }

  if (backToTop) {
    backToTop.classList.toggle("is-visible", scrollTop > 300);
  }
};

window.addEventListener("scroll", () => {
  window.requestAnimationFrame(updateProgress);
});

window.addEventListener("load", updateProgress);

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
