function prallax(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function() {
  prallax(".c-one", window.scrollY, 0.5);
  prallax(".c-two", window.scrollY, 0.4);
  prallax(".c-three", window.scrollY, 0.6);
});
