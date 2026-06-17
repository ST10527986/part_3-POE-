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

});
    // -------------------------------
    // 2. SERVICE SEARCH FILTER
    // -------------------------------

    const servicesSection = document.querySelector("#services");

    if (servicesSection) {
        const searchBox = document.createElement("input");
        searchBox.type = "text";
        searchBox.placeholder = "Search services...";
        searchBox.classList.add("search-box");

        servicesSection.insertBefore(searchBox, servicesSection.children[1]);

        searchBox.addEventListener("keyup", function () {
            const searchText = searchBox.value.toLowerCase();
            const services = document.querySelectorAll(".service");

            services.forEach(function (service) {
                const serviceText = service.textContent.toLowerCase();

                if (serviceText.includes(searchText)) {
                    service.style.display = "block";
                } else {
                    service.style.display = "none";
                }
            });
        });
    }
 // -------------------------------
    // 3. ACCORDION FOR SERVICES
    // -------------------------------

    const serviceCards = document.querySelectorAll(".service");

    serviceCards.forEach(function (service) {
        const heading = service.querySelector("h3");
        const paragraph = service.querySelector("p");

        if (heading && paragraph) {
            paragraph.style.display = "none";
            heading.style.cursor = "pointer";

            heading.addEventListener("click", function () {
                if (paragraph.style.display === "none") {
                    paragraph.style.display = "block";
                } else {
                    paragraph.style.display = "none";
                }
            });
        }
    });
    



