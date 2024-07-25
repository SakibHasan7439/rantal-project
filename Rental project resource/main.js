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

