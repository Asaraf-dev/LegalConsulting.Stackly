/*--- LEGACY LEGAL CONSULTING Main JavaScript ---*/

"use strict";

/*--- DOM READY ---*/

"use strict";

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent("navbar", "assets/components/navbar.html");

    await loadComponent("footer", "assets/components/footer.html");

    initNavbar();

    initStickyHeader();

    initActiveNavbar();

    initFooter();

    initLoader();

    
    initBackToTop();

    initSmoothScroll();
    initCounter();
    initCurrentYear();
    initScrollReveal();

});


/*--- PRELOADER ---*/

function initPreloader() {

    const preloader = document.querySelector(".preloader");

    if (!preloader) return;

    window.addEventListener("load", () => {
        preloader.classList.add("loaded");

        setTimeout(() => {
            preloader.remove();
        }, 500);
    });

}


/*--- STICKY HEADER ---*/

function initStickyHeader() {

    const header = document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        header.classList.toggle("header-scrolled", window.scrollY > 100);

    });

}


/*--- BACK TO TOP ---*/

function initBackToTop() {

    const button = document.querySelector(".back-to-top");

    if (!button) return;

    window.addEventListener("scroll", () => {

        button.classList.toggle("active", window.scrollY > 400);

    });

    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/*--- ACTIVE NAVIGATION ---*/

function initActiveNav() {

    const links = document.querySelectorAll(".navbar-nav .nav-link");

    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (href === "index.html" && currentPage === "")) {

            link.classList.add("active");

        }

    });

}


/*--- SMOOTH SCROLL ---*/

function initSmoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });

}


/*--- COUNTER ---*/

function initCounter() {

    const counters = document.querySelectorAll("[data-count]");

    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.count);

            let count = 0;

            const speed = target / 120;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;

                }

            };

            update();

            observer.unobserve(counter);

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));

}


/*--- CURRENT YEAR ---*/

function initCurrentYear() {

    const year = document.querySelector(".current-year");

    if (!year) return;

    year.textContent = new Date().getFullYear();

}


/*--- SCROLL REVEAL ---*/

function initScrollReveal() {

    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {
        threshold: 0.2
    });

    elements.forEach(item => observer.observe(item));

}

/*--- Hero Section ---*/

const allHeroSection = document.querySelector(".all-hero-section");

if (allHeroSection) {

    /*====================
    Scroll Reveal
    ====================*/

    const heroObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    heroObserver.observe(allHeroSection);

    /*====================
    Mouse Parallax
    ====================*/

    const heroCircle = document.querySelector(".all-hero-circle");
    const heroCards = document.querySelectorAll(".all-hero-card");
    const heroFloating = document.querySelectorAll(".all-hero-floating");

    allHeroSection.addEventListener("mousemove", (e) => {

        const rect = allHeroSection.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

        requestAnimationFrame(() => {

            if (heroCircle) {

                heroCircle.style.transform =
                    `translate(${x}px, ${y}px)`;

            }

            heroCards.forEach((card, index) => {

                const speed = (index + 1) * 0.5;

                card.style.transform =
                    `translate(${x * speed}px,${y * speed}px)`;

            });

            heroFloating.forEach((item, index) => {

                const speed = (index + 2) * 0.4;

                item.style.transform =
                    `translate(${-x * speed}px,${-y * speed}px)`;

            });

        });

    });

    allHeroSection.addEventListener("mouseleave", () => {

        if (heroCircle) {

            heroCircle.style.transform = "translate(0,0)";

        }

        heroCards.forEach(card => {

            card.style.transform = "translate(0,0)";

        });

        heroFloating.forEach(item => {

            item.style.transform = "translate(0,0)";

        });

    });

}

/*--- All CTA ---*/

const allCtaObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const section = entry.target;

            section.querySelector(".all-cta-badge")?.classList.add("show");

            setTimeout(() => {

                section.querySelector(".all-cta-title")?.classList.add("show");

            }, 150);

            setTimeout(() => {

                section.querySelector(".all-cta-description")?.classList.add("show");

            }, 300);

            setTimeout(() => {

                section.querySelector(".all-cta-buttons")?.classList.add("show");

            }, 450);

            section.querySelectorAll(".all-cta-shape").forEach((shape, index) => {

                setTimeout(() => {

                    shape.classList.add("show");

                }, 250 + (index * 100));

            });

            allCtaObserver.unobserve(section);

        }

    });

}, {

    threshold: .25

});

document.querySelectorAll(".all-cta-section").forEach(section => {

    allCtaObserver.observe(section);

});