const ul = document.querySelectorAll("#nav");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

close.style.display = "none";

open.addEventListener("click", () => {
    open.style.display = "none";
    close.style.display = "inline-block";
    nav.classList.remove("invisible");
    nav.style.left = "0";
});

close.addEventListener("click", () => {
    close.style.display = "none";
    open.style.display = "inline-block";
    nav.classList.add("invisible");
    nav.style.left = "1000px";
});
