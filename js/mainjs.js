// let buttonClicked = false;
// function handleButtonClick() {
//   if (buttonClicked) {
//     return;
//   }
//   buttonClicked = true;
// }

// document.getElementById("buttonMenu").onclick = function () {
//   const buttonElement = document.getElementById("buttonMenu");
//   buttonElement.addEventListener("click", handleButtonClick);
// };
function themClass(idTag, className) {
  document.getElementById(idTag).classList.toggle(className);
}
function xoaClass(idTag, className) {
  document.getElementById(idTag).classList.remove(className);
}
function chinhDisplay(idTag, display) {
  document.querySelector(idTag).style.display = display;
}

document.getElementById("buttonMenu").onclick = function () {
  themClass("buttonMenu", "open");
  xoaClass("buttonMenu2", "open");
  xoaClass("buttonMenu3", "open");
  xoaClass("buttonMenu4", "open");
  chinhDisplay(".bai1", "block");
  chinhDisplay(".bai3", "none");
  chinhDisplay(".bai2", "none");
  chinhDisplay(".bai4", "none");
};
document.getElementById("buttonMenu2").onclick = function () {
  themClass("buttonMenu2", "open");
  xoaClass("buttonMenu", "open");
  xoaClass("buttonMenu3", "open");
  xoaClass("buttonMenu4", "open");
  chinhDisplay(".active", "none");
  chinhDisplay(".active2", "inline-block");
  chinhDisplay(".bai2", "block");
  chinhDisplay(".bai3", "none");
  chinhDisplay(".bai1", "none");
  chinhDisplay(".bai4", "none");
};
document.getElementById("buttonMenu3").onclick = function () {
  themClass("buttonMenu3", "open");
  xoaClass("buttonMenu", "open");
  xoaClass("buttonMenu2", "open");
  xoaClass("buttonMenu4", "open");
  chinhDisplay(".bai3", "block");
  chinhDisplay(".bai1", "none");
  chinhDisplay(".bai2", "none");
  chinhDisplay(".bai4", "none");
};
document.getElementById("buttonMenu4").onclick = function () {
  themClass("buttonMenu4", "open");
  xoaClass("buttonMenu2", "open");
  xoaClass("buttonMenu3", "open");
  xoaClass("buttonMenu", "open");
  chinhDisplay(".bai4", "block");
  chinhDisplay(".bai3", "none");
  chinhDisplay(".bai2", "none");
  chinhDisplay(".bai1", "none");
};
