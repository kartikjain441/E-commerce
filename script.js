const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const bag = document.getElementById("lg-bag");

if (bar) {
  bar.addEventListener("click", () => {
    nav.style.visibility = "visible";
    bag.style.visibility = "hidden";
    bar.style.visibility="hidden"
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.style.visibility = "hidden";
    bar.style.visibility="visible"
   
  });
}
