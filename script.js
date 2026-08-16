/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(17, 24, 18, 0.98)";
    } else {
        navbar.style.background = "rgba(23, 32, 25, 0.94)";
    }

});


/* =========================================
   IMAGE MODAL
========================================= */

const galleryItems = document.querySelectorAll(".gallery-item");

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const modalClose = document.getElementById("modalClose");


galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.dataset.image;
        const caption = item.dataset.caption;

        modalImage.src = image;
        modalImage.alt = caption;

        modalCaption.textContent = caption;

        imageModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* Close modal */

function closeModal() {

    imageModal.classList.remove("active");

    modalImage.src = "";

    document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeModal);


/* Close by clicking outside image */

imageModal.addEventListener("click", event => {

    if (event.target === imageModal) {
        closeModal();
    }

});


/* Close with ESC */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =========================================
   FOOTER YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".timeline-item, .family-card, .gallery-item, .source-card"
);


const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});