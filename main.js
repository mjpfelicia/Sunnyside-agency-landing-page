const hamburger = document.querySelector(".menu-hidden");
headerNav = document.querySelector(".header-nav");

hamburger.addEventListener("click", (() => {
    hamburger.classList.toggle("open"),
        headerNav.classList.toggle("display")
}));