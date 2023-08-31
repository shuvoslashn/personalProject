let hamb = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let navbar = document.querySelector('header');
function hamburgerToggle() {
    hamb.classList.toggle('open');
    menu.classList.toggle('mobile');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) navbar.classList.add('nav-bg');
    else navbar.classList.remove('nav-bg');
});
