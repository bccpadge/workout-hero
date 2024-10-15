// !declare variables
const body = document.querySelector("body"),
  navbarBtn = document.querySelector("[data-js-toggle]"),
  navbarList = document.querySelector("[data-js-list]");

// !toggle navbar
navbarBtn.addEventListener("click", () => {
  if (navbarList.hasAttribute("active")) {
    body.classList.remove("no-scroll");
    navbarBtn.setAttribute("aria-expanded", "false");
  } else {
    body.classList.add("no-scroll");
    navbarBtn.setAttribute("aria-expanded", "true");
  }
  navbarList.toggleAttribute("active");
})

// !close navbar when escape key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navbarList.hasAttribute("active")) {
    navbarBtn.setAttribute("aria-expanded", "false");
    navbarList.toggleAttribute("active");
  }
})

