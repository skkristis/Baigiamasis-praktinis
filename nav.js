"use strict";

window.scrollTo(0, 0);

var home = document.getElementById("home");
var features = document.getElementById("features");
var about = document.getElementById("about");
var pricing = document.getElementById("pricing");
var reviews = document.getElementById("reviews");
var contact = document.getElementById("contact");

var burger_features = document.getElementById("burger_features");
var burger_about = document.getElementById("burger_about");
var burger_pricing = document.getElementById("burger_pricing");
var burger_reviews = document.getElementById("burger_reviews");
var burger_contact = document.getElementById("burger_contact");

home.addEventListener("click", function () {
  window.scrollTo(0, 0);
  sideNav.classList.remove("translateX");
});
features.addEventListener("click", function () {
  window.scrollTo(0, 750);
});
about.addEventListener("click", function () {
  window.scrollTo(0, 1400);
});
pricing.addEventListener("click", function () {
  window.scrollTo(0, 2600);
});
reviews.addEventListener("click", function () {
  window.scrollTo(0, 3485);
});
contact.addEventListener("click", function () {
  window.scrollTo(0, 4085);
});

burger_features.addEventListener("click", function () {
  window.scrollTo(0, 1800);
  burger.classList.remove("rotateZ");
  sideNav.classList.remove("translateX");
});
burger_about.addEventListener("click", function () {
  window.scrollTo(0, 3000);
  burger.classList.remove("rotateZ");
  sideNav.classList.remove("translateX");
});
burger_pricing.addEventListener("click", function () {
  window.scrollTo(0, 4940);
  burger.classList.remove("rotateZ");
  sideNav.classList.remove("translateX");
});
burger_reviews.addEventListener("click", function () {
  window.scrollTo(0, 6690);
  burger.classList.remove("rotateZ");
  sideNav.classList.remove("translateX");
});
burger_contact.addEventListener("click", function () {
  window.scrollTo(0, 7290);
  burger.classList.remove("rotateZ");
  sideNav.classList.remove("translateX");
});
