const navItems = document.querySelector(".nav-items");
const collapseIcon = document.querySelector(".collapse-icon");
const openIcon = document.querySelector(".open-icon");

var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

openIcon.addEventListener("click", function (event) {
    navItems.style.display = "flex";
    navItems.style.top = "0";
  
  });

collapseIcon.addEventListener("click", collapseMenu);

function collapseMenu() {
  navItems.style.top = "-125%";
} 

gsap.from(".trans-1", {
  scrollTrigger: {
    trigger: ".trans-1",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.5,
  stagger: 0.6,
});

gsap.from(".trans-2", {
  scrollTrigger: {
    trigger: ".trans-2",
    start: "center bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.5,
  stagger: 0.3,
});