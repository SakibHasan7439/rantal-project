const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e)=>{
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");

    menuIcon.setAttribute("class", isOpen ?
        "fa-solid fa-xmark": "fa-solid fa-bars");
});

navLinks.addEventListener("click", (e)=>{
    navLinks.classList.remove("open");
    menuIcon.setAttribute("class", "fa-solid fa-bars");
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-img img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-links", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".step-card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".service-img img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".service-content .section-subheading", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".service-content .section-header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".service-list li", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});

ScrollReveal().reveal(".experience-card", {
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".download-image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".download-content .section-header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".download-content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".download-links", {
    ...scrollRevealOption,
    delay: 1500,
});