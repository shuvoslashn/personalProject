let hamb = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');
let navbar = document.querySelector('header');
const mediaQuery = window.matchMedia('(max-width: 768px)');

function hamburgerToggle() {
    hamb.classList.toggle('open');
    menu.classList.toggle('mobile');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
}

menuItem.forEach((e) => {
    e.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            hamb.classList.toggle('open');
            menu.classList.toggle('mobile');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) navbar.classList.add('nav-bg');
    else navbar.classList.remove('nav-bg');
});
