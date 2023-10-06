let spans = document.querySelectorAll(".box .spn");
let sectionTwo = document.querySelector(".section-two");
let sectionThree = document.querySelector(".section-three");
let allSpans = document.querySelectorAll(".section-three .prog span");
let sta = false;
window.addEventListener("scroll", function() {
  if (window.scrollY >= sectionTwo.offsetTop) {
    if (sta === false) {
      spans.forEach((element) => count(element));
    }
    sta = true;
  }
})
function count(ele) {
  let goal = ele.dataset.test;
  let counter = setInterval(() => {
    ele.innerHTML++;
    if (ele.innerHTML === goal) {
      clearInterval(counter);
    }
  }, 10 / goal);
}
window.addEventListener("scroll", function() {
    if (window.scrollY >= sectionThree.offsetTop) {
    allSpans.forEach((el) => {
      el.style.width = el.dataset.prog;
    });
  }
})