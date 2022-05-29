"use strict";

var home = document.getElementById("home");
var features = document.getElementById("features");
var about = document.getElementById("about");
var pricing = document.getElementById("pricing");
var reviews = document.getElementById("reviews");
var contact = document.getElementById("contact");

home.addEventListener("click", function () {
  window.scrollTo(0, 0);
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
