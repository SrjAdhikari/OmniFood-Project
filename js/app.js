// ******************************
// * Set Current Year in Footer *
// ******************************

// Select the element where the year needs to be displayed
const yearElement = document.querySelector(".year");

// Get the current year dynamically using JavaScript Date object
const currentYear = new Date().getFullYear();

// Update the text content of the selected element to display the current year
yearElement.textContent = currentYear;


// ********************************
// * Make Mobile Navigation Work *
// ********************************

// Select the mobile navigation button
const mobileNavBtn = document.querySelector(".btn-mobile-nav");

// Select the header element (which contains the navigation)
const header = document.querySelector(".header");

// Add a click event listener to toggle the mobile navigation menu
mobileNavBtn.addEventListener("click", () => {
    // Toggle the 'nav-open' class to show/hide the mobile navigation
    header.classList.toggle("nav-open");
});


// *******************************
// * Smooth Scrolling Animation *
// *******************************

// Select all anchor links on the page
const allLinks = document.querySelectorAll("a:link");

// Loop through each link and add a click event listener
allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // Prevent the default behavior of the anchor link
        e.preventDefault();

        // Get the href attribute value of the clicked link
        const href = link.getAttribute("href");

        // If the href is "#" (scroll to top), move to the top smoothly
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        // If the href starts with "#" (indicating an internal section link)
        if (href !== "#" && href.startsWith("#")) {
            // Select the section corresponding to the href value
            const sectionElement = document.querySelector(href);

            // Scroll smoothly to the selected section
            sectionElement.scrollIntoView({ behavior: "smooth" });
        }

        // If the clicked link belongs to the main navigation, close the mobile menu
        if (link.classList.contains("main-nav-link")) {
            header.classList.toggle("nav-open");
        }
    });
});


// ***********************
// * Sticky Navigation  *
// ***********************

// Select the section that should trigger the sticky navigation effect
const sectionHero = document.querySelector(".section-hero");

// Create an Intersection Observer to detect when the hero section is in view
const obs = new IntersectionObserver(
    (entries) => {
        const entry = entries[0];

        // If the section is not in view, add the "sticky" class to the body
        if (!entry.isIntersecting) {
            document.body.classList.add("sticky");
        } 
        // If the section is in view, remove the "sticky" class
        else {
            document.body.classList.remove("sticky");
        }
    },
    {
        root: null,             // Observe the viewport (no specific root element)
        threshold: 0,           // Trigger as soon as any part of the element is out of view
        rootMargin: "-80px"     // Start observing when the section is 80px out of view
    }
);

// Start observing the hero section
obs.observe(sectionHero);


// ****************************
// * SCROLL REVEAL ANIMATION  *
// ****************************

// Global ScrollReveal Configuration
const sr = ScrollReveal({
    distance: '60px',       // Movement distance
    duration: 2000,         // Animation speed (in ms)
    easing: 'ease',         // Smooth easing function
    opacity: 0,             // Start elements fully transparent
    reset: false            // Disable repeat animations when scrolling back
});

// =======================
// HERO SECTION
// =======================
sr.reveal('.hero-text-box', { origin: 'left', delay: 300 });
sr.reveal('.hero-image-box', { origin: 'right', delay: 500 });


// =======================
// LOGOS & FEATURES
// =======================
sr.reveal('.logos img', { origin: 'bottom', interval: 100, delay: 200});


// =======================
// STEPS SECTION
// =======================
sr.reveal(`.step-img-box:nth-child(odd), .step-text-box:nth-child(odd)`, { origin: 'left', delay: 300 });
sr.reveal(`.step-img-box:nth-child(even), .step-text-box:nth-child(even)`, { origin: 'right', delay: 500 });


// =======================
// PRICING & TESTIMONIALS
// =======================
sr.reveal(`.pricing-plan`, { origin: 'bottom', interval: 100, delay: 300, distance: '50px' });
sr.reveal('.testimonials', { origin: 'top', delay: 700, distance: '50px' });


// =======================
// MEAL & CTA SECTIONS
// =======================
sr.reveal(`.meal-img, .diets`, { origin: 'left', delay: 300 });
sr.reveal('.meal-content', { origin: 'right', delay: 500 });
sr.reveal('.cta', { origin: 'bottom', delay: 700, distance: '50px' });


// =======================
// RECIPE & CONTACT SECTIONS
// =======================
sr.reveal('.recipe__data, .delivery__data, .contact__data', {
    origin: 'right',
    interval: 200,
    delay: 400
});


// =======================
// FOOTER
// =======================
// sr.reveal('.footer', { origin: 'bottom', delay: 700, distance: '40px' });
sr.reveal(`.footer`, { origin: 'top', delay: 500, distance: '40px' })