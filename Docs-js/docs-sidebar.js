const sidebarHamburger = document.querySelector("#sidebar-hamburger");
const minimizedSidebar = document.querySelector(".minimized-sidebar");

sidebarHamburger.onclick = () => {
  if (minimizedSidebar.style.display === "block") {
    minimizedSidebar.style.display = "none";
  } else {
    minimizedSidebar.style.display = "block";
  }
};

const closeSidebarBtn = document.querySelector(".sidebar-close");
closeSidebarBtn.onclick = () => {
  minimizedSidebar.style.display = "none";
};
