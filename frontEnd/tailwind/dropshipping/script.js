// Navbar js
(() => {
    let navUl = document.querySelector("#nav-ul");
    let open = document.querySelector(".open");
    let close = document.querySelector(".close");

    open.addEventListener("click", () => {
        close.classList.remove("hidden");
        open.classList.add("hidden");
        navUl.classList.remove("hidden");
    });
    close.addEventListener("click", () => {
        navUl.classList.add("hidden");
        open.classList.remove("hidden");
        close.classList.add("hidden");
    });
})();

// animation
const tl = gsap.timeline();

tl.from("#logo, #menu li", {
    y: -30,
    stagger: 0.2,
    opacity: 0,
    duration: 1,
    scale: 0,
});
