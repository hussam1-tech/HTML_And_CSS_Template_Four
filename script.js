let aside = document.querySelector(".sidebar");
let asideHandler = document.createElement("div");
let arrow = document.querySelector(".arrow");
let h3Aside = document.querySelector(".sidebar h3");
let ul = document.querySelector(".sidebar ul");
let content = document.querySelector("h1 + div");
arrow.addEventListener("click", function () {
  if (arrow.classList.contains("hide")) {
    content.style.paddingLeft = "15px";
    h3Aside.style.marginLeft = "0";
    ul.style.marginLeft = "0";
    arrow.classList.remove("fa-arrow-right");
    arrow.classList.add("fa-arrow-left");
    aside.style.cssText = "";
    aside.prepend(arrow);
    asideHandler.remove();
    arrow.style.cssText = "";
  } else {
    content.style.paddingLeft = "0";
    h3Aside.style.marginLeft = "-100px";
    ul.style.marginLeft = "-100px";
    arrow.classList.add("fa-arrow-right");
    arrow.classList.remove("fa-arrow-left");
    aside.appendChild(asideHandler);
    asideHandler.appendChild(arrow);
    asideHandler.style.cssText = "position: fixed; left: 10px; top: 14px; width: 30px; height: 30px; border-radius: 50%; background-color: #fff; box-shadow: 0 0 6px #ddd";
    aside.style.cssText =
      "width: 0; padding: 10px 0 0;";
    arrow.style.cssText =
      "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);";
  }
  arrow.classList.toggle("hide");
});
window.onresize = function () {
  if (window.innerWidth > 768) {
    content.style.paddingLeft = "15px";
    aside.style.width = "50px";
    h3Aside.style.marginLeft = "0";
    ul.style.marginLeft = "0";
    arrow.classList.remove("fa-arrow-right");
    aside.prepend(arrow);
    asideHandler.remove("fa-arrow-right");
    arrow.classList.remove("hide");
    arrow.classList.add("fa-arrow-left");
    aside.style.cssText = "";
    arrow.style.cssText = "";
  }
};
