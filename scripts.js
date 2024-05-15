document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("shrink");
        } else {
            navbar.classList.remove("shrink");
        }
    });

    menuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});
