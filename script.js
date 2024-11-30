const mobileMenuBtn = document.querySelector(".mobile-menu-btn")

mobileMenuBtn.addEventListener("click", function () {

const mainNav = document.querySelector(".main-nav")
const showcaseHeader = document.querySelector(".showcase-header")
const downArrow = document.querySelector(".down-arrow-container")

mainNav.classList.toggle("show")
showcaseHeader.classList.toggle("hide")
downArrow.classList.toggle("hide")

})