const arrayUpdate = (menuL) => {
  let menuListClass = [];
  for (let i = 0; i < menuL.classList.length; i++) {
    menuListClass.push(menuL.classList[i]);
  }
  return menuListClass;
};

window.addEventListener("load", function (e) {
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
    let body = document.querySelector("body")
    if(menuListClass.includes("inactive")){
      menuL.classList.remove("inactive")
      menuL.classList.add("active")
      body.style.overflow = "hidden"
    }
    else{
      menuL.classList.remove("active")
      menuL.classList.add("inactive")
      body.style.overflow = "auto"
    }
    menuListClass = arrayUpdate(menuL);
  })
});
