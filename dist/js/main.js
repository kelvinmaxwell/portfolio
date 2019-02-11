//select Dom items

const menubtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menunav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//set Intial state of menu
let showMenu = false;
menubtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menubtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    //set menu state;
    showMenu = true;
  } else {
    menubtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    //set menu state;
    showMenu = false;
  }
}
