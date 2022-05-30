"use strict";

var burger = document.querySelector("i");
var sideNav = document.querySelector(".nav");

burger.addEventListener("click", function () {
  this.classList.toggle("rotateZ");
  sideNav.classList.toggle("translateX");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 1130) {
    burger.classList.remove("rotateZ");
    sideNav.classList.remove("translateX");
  }
  console.log(window.innerWidth);
});
