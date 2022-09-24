const arrayUpdate = (menuL) => {
  let menuListClass = [];
  for (let i = 0; i < menuL.classList.length; i++) {
    menuListClass.push(menuL.classList[i]);
  }
  return menuListClass;
};

window.addEventListener("load", function (e) {
  let contactForm = document.querySelector(".form-container");
  if (contactForm) {
    contactForm.style.display = "none";
  }

  let menu = document.querySelector(".menub");
  let close = document.querySelector(".close");
  let menuL = document.querySelector(".menu");
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
  let menuBtn = document.querySelector("#menuBtn");
  menuBtn.addEventListener("click", () => {
    let menuListClass = arrayUpdate(menuL);
    let body = document.querySelector("body");
    if (menuListClass.includes("inactive")) {
      menuL.classList.remove("inactive");
      menuL.classList.add("active");
      body.style.overflow = "hidden";
    } else {
      menuL.classList.remove("active");
      menuL.classList.add("inactive");
      body.style.overflow = "auto";
    }
    menuListClass = arrayUpdate(menuL);
  });

  let body = document.querySelector("body");
  let backdrop = this.document.querySelector(".form-backdrop")
  setTimeout(() => {
    contactForm.style.display = "flex";
    body.style.overflow = "hidden";
    backdrop.style.display = "block"
  }, 5000);

  // let container = document.querySelector(".form-container");

  if (window.location.pathname === "/") {
    backdrop.addEventListener("click", () => {
      contactForm.style.display = "none";
      body.style.overflow = "auto";
    });
  }
});
