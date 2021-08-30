const navItems = document.querySelector(".nav-items");
const collapseIcon = document.querySelector(".collapse-icon");
const openIcon = document.querySelector(".open-icon");

openIcon.addEventListener("click", function (event) {
    navItems.style.display = "flex";
    navItems.style.top = "0";
  });

collapseIcon.addEventListener("click", collapseMenu);

function collapseMenu() {
  navItems.style.top = "-125%";
}