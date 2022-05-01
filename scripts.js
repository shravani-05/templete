window.addEventListener("load", function (e) {
  document.querySelector(".preloader").style.display = "none";
  var swiper = new Swiper(".myswiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
