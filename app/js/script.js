// =========MOBILE NAV=========
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");
const navLink = document.querySelectorAll(".nav__link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach((link) => link.addEventListener("click", linkAction));

// =========NAV ACTIVE SECTION COLOR ON SCROLL =========
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};
console.log();
window.addEventListener("scroll", scrollActive);

// =========ADD BOX SHADOW TO NAV ON SCROLL =========

function scrollNav() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 80) {
    nav.classList.add("scroll-nav");
  } else {
    nav.classList.remove("scroll-nav");
  }
}
window.addEventListener("scroll", scrollNav);

// =========SHOW SCOLL TO TOP ICON ON SCROLL =========
function scrollToTop() {
  const scrollToTop = document.querySelector("#scroll-up");

  if (this.scrollY >= 500) {
    scrollToTop.classList.add("show-scroll");
  } else {
    scrollToTop.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollToTop);
