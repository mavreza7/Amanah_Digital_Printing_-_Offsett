const menuToggle =
document.getElementById("menu-toggle");


const navMenu =
document.getElementById("nav-menu");



menuToggle.onclick = function(){


navMenu.classList.toggle("active");



menuToggle.innerHTML =
navMenu.classList.contains("active")

?

'<i class="fa-solid fa-xmark"></i>'

:

'<i class="fa-solid fa-bars"></i>';



};