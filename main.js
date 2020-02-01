function prallax(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance * speed}px)`;
}
function negprallax(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(-${distance * speed + 70}px)`;
}
window.addEventListener("scroll", function() {
  prallax(".c-one", window.scrollY, 0.5);
  prallax(".c-two", window.scrollY, 0.4);
  prallax(".c-three", window.scrollY, 0.6);
});
window.addEventListener("scroll", function() {
  negprallax(".s-one", window.scrollY, 0.4);
  negprallax(".s-two", window.scrollY, 0.3);
});

window.addEventListener("load", () => {
  const preload = document.querySelector(".overlayer");
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  body.classList.add("scroll-finish");
  preload.classList.add("preload-finish");
  main.classList.add("preload-finish-main");
});
