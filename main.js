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
  const load_h1 = document.querySelector(".quote-container h1");
  const load_p = document.querySelector(".quote-container p");
  const load_pic_container = document.querySelector(".my-pic-container");
  body.classList.add("scroll-finish");
  preload.classList.add("preload-finish");
  main.classList.add("preload-finish-main");
  load_h1.classList.add("come-from-left-anim");
  load_p.classList.add("come-from-right-anim");
  load_pic_container.classList.add("come-from-right-anim");
  var delayInMilliseconds = 5000; //1 second

  setTimeout(function() {
    const preload_overlayer = document.querySelector(".overlayer");
    preload_overlayer.classList.add("preload-finish-overlayer");
  }, delayInMilliseconds);
});
