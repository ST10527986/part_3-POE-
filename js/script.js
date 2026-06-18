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
     // -------------------------------
    // 4. IMAGE LIGHTBOX
    // -------------------------------

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {
        image.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");

            const largeImage = document.createElement("img");
            largeImage.src = image.src;
            largeImage.alt = image.alt;

            lightbox.appendChild(largeImage);
            document.body.appendChild(lightbox);

            lightbox.addEventListener("click", function () {
                lightbox.remove();
            });
        });
    });

     // -------------------------------
    // 5. CONTACT FORM VALIDATION
    // -------------------------------

    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const requiredInputs = contactForm.querySelectorAll("input[required], textarea[required], select[required]");
            let valid = true;

            requiredInputs.forEach(function (input) {
                if (input.value.trim() === "") {
                    valid = false;
                    input.classList.add("error");
                } else {
                    input.classList.remove("error");
                }
            });

            const emailInput = contactForm.querySelector("input[type='email']");

            if (emailInput) {
                const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

                if (!emailInput.value.match(emailPattern)) {
                    valid = false;
                    emailInput.classList.add("error");
                }
            }

            if (valid) {
                alert("Thank you. Your form has been submitted successfully.");

                // Opens email app for contact-style submission
                const emailBody = encodeURIComponent("A user has submitted a form on Safe Haven ZA.");
                window.location.href = "mailto:contact@safehavenza.org?subject=Safe Haven ZA Website Form&body=" + emailBody;

                contactForm.reset();
            } else {
                alert("Please complete all required fields correctly.");
            }
        });
    }
// -------------------------------
// 6. SCROLL ANIMATION
// -------------------------------

const sections = document.querySelectorAll("section, form, .about-content");

function revealSections() {
    sections.forEach(function (section) {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if (sectionPosition < screenPosition) {
            section.classList.add("show-section");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections(); 

// -------------------------------
// GALLERY LIGHTBOX WITH ARROWS
// -------------------------------

const galleryImages = document.querySelectorAll(".gallery-grid img");

if (galleryImages.length > 0) {

    let currentImageIndex = 0;

    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close-lightbox");
    closeBtn.innerHTML = "&times;";

    const prevBtn = document.createElement("span");
    prevBtn.classList.add("prev-lightbox");
    prevBtn.innerHTML = "&#10094;";

    const nextBtn = document.createElement("span");
    nextBtn.classList.add("next-lightbox");
    nextBtn.innerHTML = "&#10095;";

    const lightboxImage = document.createElement("img");

    lightbox.appendChild(closeBtn);
    lightbox.appendChild(prevBtn);
    lightbox.appendChild(lightboxImage);
    lightbox.appendChild(nextBtn);

    document.body.appendChild(lightbox);

    galleryImages.forEach(function (image, index) {
        image.addEventListener("click", function () {
            currentImageIndex = index;
            showImage();
            lightbox.style.display = "flex";
        });
    });

    function showImage() {
        lightboxImage.src = galleryImages[currentImageIndex].src;
        lightboxImage.alt = galleryImages[currentImageIndex].alt;
    }

    nextBtn.addEventListener("click", function (event) {
        event.stopPropagation();

        currentImageIndex++;

        if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        }

        showImage();
    });

    prevBtn.addEventListener("click", function (event) {
        event.stopPropagation();

        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = galleryImages.length - 1;
        }

        showImage();
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

}

// -------------------------------
// SERVICE SEARCH BAR
// -------------------------------

const serviceSearch = document.querySelector("#serviceSearch");
const services = document.querySelectorAll(".service");

if (serviceSearch) {
    serviceSearch.addEventListener("keyup", function () {
        const searchValue = serviceSearch.value.toLowerCase();

        services.forEach(function (service) {
            const serviceText = service.textContent.toLowerCase();

            if (serviceText.includes(searchValue)) {
                service.style.display = "block";
            } else {
                service.style.display = "none";
            }
        });
    });
}
// -------------------------------
// HAMBURGER MENU
// -------------------------------

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active");
    });
}



