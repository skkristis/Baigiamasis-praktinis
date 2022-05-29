const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

var swiperSlides = document.getElementsByClassName("swiper-slide");

for (var x of swiperSlides) {
  x.addEventListener("click", function () {
    var index = swiper.clickedIndex;
    var img = document.createElement("img");
    img.style.display = "none";
    img.classList.add("extended");
    img.setAttribute("src", images[index]);
    document.body.append(img);
    console.log(img);

    img.addEventListener("click", function () {
      this.classList.remove("extended");
    });
  });
}
