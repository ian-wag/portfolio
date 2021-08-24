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

// =========NAV ACTIVE SECTION COLOR ON SCROLL=========
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

// =========ADD BOX SHADOW TO NAV ON SCROLL=========

function scrollNav() {
  const nav = document.querySelector("#header");

  if (this.scrollY >= 80) {
    nav.classList.add("scroll-nav");
  } else {
    nav.classList.remove("scroll-nav");
  }
}
window.addEventListener("scroll", scrollNav);

// =========SHOW SCOLL TO TOP ICON ON SCROLL=========
function scrollToTop() {
  const scrollToTop = document.querySelector("#scroll-up");

  if (this.scrollY >= 500) {
    scrollToTop.classList.add("show-scroll");
  } else {
    scrollToTop.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollToTop);

// =========SHOW SCOLL TO TOP ICON ON SCROLL=========
const themeBtn = document.querySelector("#theme-button");
const darkTheme = "dark-theme";
const icon = "ai-sun";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => {
  document.body.classList.contains(darkTheme) ? "dark" : "light";
};

const getCurrentIcon = () => {
  themeBtn.classList.contains(icon) ? "ai-moon" : "ai-sun";
};

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeBtn.classList[selectedTheme === "ai-moon" ? "add" : "remove"](icon);
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeBtn.classList.toggle(icon);

  //Save theme to local storage
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
