const burger = document.querySelector("#burger-menu");
const ul = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".nav-link");
const scrollUp = document.querySelector("#scroll-up");
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    });
});
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

