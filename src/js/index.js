let hamburgerTop = document.querySelector(".burger_top") 
let hamburgerBottom = document.querySelector(".burger_bottom") 
let menuTop = document.querySelector(".menu_top")
let menuBottom = document.querySelector(".menu_bottom")

hamburgerTop.onclick = function () {
  menuTop.classList.toggle ("active-burger")
  hamburgerTop.classList.toggle ("hamburger-open")
}

hamburgerBottom.onclick = function () {
  menuTop.classList.toggle ("active-burger")
  hamburgerTop.classList.toggle ("hamburger-open")
}
