/*--- LEGACY LEGAL CONSULTING Main JavaScript ---*/

"use strict";

/*--- DOM READY ---*/

document.addEventListener("DOMContentLoaded", () => {

    initPreloader();
    initStickyHeader();
    initBackToTop();
    initActiveNav();
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