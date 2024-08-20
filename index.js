// Accordion Functionality
let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    let icon = this.querySelector("i");
    if (icon.classList.contains("fa-plus")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Responsive Navbar Toggle
const navbarToggle = document.getElementById("navbarToggle");
const navbarItems = document.querySelector(".navbar__nav__items");

navbarToggle.addEventListener("click", () => {
  navbarItems.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('.nav__link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {}}
