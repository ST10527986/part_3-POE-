// ===============================
// SAFE HAVEN ZA JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {
     // -------------------------------
    // 1. NAVIGATION ACTIVE LINK
    // -------------------------------

    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active-link");
        }
    });

    


