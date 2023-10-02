const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  reveals.forEach((reveal) => {
    const revealTop = reveal.getBoundingClientRect().top;
    if (revealTop < triggerBottom) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}
