var register = document.getElementById("box1");
var apply = document.getElementById("box2");
var receive = document.getElementById("box3");
var boxes = document.getElementsByClassName("box");
var tabs = document.getElementsByClassName("tab-swoosh");

// Paslepia visus tabus pradžioje
for (var x of tabs) {
  x.style.display = "none";
}

register.addEventListener("click", function () {
  for (var x of boxes) {
    x.classList.remove("selected");
  }
  for (var x of tabs) {
    x.style.display = "none";
    x.classList.remove("tabAnimation");
  }

  document.getElementById("pirmas").style.display = "flex";
  setTimeout(function () {
    document.getElementById("pirmas").classList.add("tabAnimation");
  }, 10);
  event.currentTarget.classList.add("selected");
});

apply.addEventListener("click", function () {
  for (var x of boxes) {
    x.classList.remove("selected");
  }
  for (var x of tabs) {
    x.style.display = "none";
    x.classList.remove("tabAnimation");
  }

  document.getElementById("antras").style.display = "flex";
  setTimeout(function () {
    document.getElementById("antras").classList.add("tabAnimation");
  }, 10);
  event.currentTarget.classList.add("selected");
});
receive.addEventListener("click", function () {
  for (var x of boxes) {
    x.classList.remove("selected");
  }
  for (var x of tabs) {
    x.style.display = "none";
    x.classList.remove("tabAnimation");
  }

  document.getElementById("trecias").style.display = "flex";
  setTimeout(function () {
    document.getElementById("trecias").classList.add("tabAnimation");
  }, 10);
  event.currentTarget.classList.add("selected");
});

document.getElementById("pirmas").style.display = "flex";
document.getElementById("pirmas").classList.add("tabAnimation");
boxes[0].classList.add("selected");
