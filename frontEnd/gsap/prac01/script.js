var tl = gsap.timeline();

tl.from("#nav h3, #nav ul li", {
    y: -100,
    duration: 0.5,
    stagger: 0.2,
});
tl.from("#title1, #title2", {
    y: -1000,
    scale: 0,
    opacity: 0.5,
    duration: 1,
    stagger: 0.4,
});
