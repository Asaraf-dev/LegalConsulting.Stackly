/*------ HERO JAVASCRIPT ------*/

document.addEventListener("DOMContentLoaded", () => {

    initHeroParallax();

});

/*--- HERO PARALLAX ---*/

function initHeroParallax() {

    const hero = document.querySelector(".ind-hero-section");
    const image = document.querySelector(".ind-hero-image");
    const cardOne = document.querySelector(".ind-hero-card-one");
    const cardTwo = document.querySelector(".ind-hero-card-two");
    const cardThree = document.querySelector(".ind-hero-card-three");

    if (!hero || !image) return;

    hero.addEventListener("mousemove", (e) => {

        const rect = hero.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        image.style.transform =
            `translate(${x * 12}px, ${y * 12}px)`;

        if (cardOne) {
            cardOne.style.transform =
                `translate(${x * 18}px, ${y * 18}px)`;
        }

        if (cardTwo) {
            cardTwo.style.transform =
                `translate(${x * -18}px, ${y * -18}px)`;
        }

        if (cardThree) {
            cardThree.style.transform =
                `translate(${x * 15}px, ${y * -15}px)`;
        }

    });

    hero.addEventListener("mouseleave", () => {

        image.style.transform = "";

        if (cardOne) cardOne.style.transform = "";
        if (cardTwo) cardTwo.style.transform = "";
        if (cardThree) cardThree.style.transform = "";

    });

}

/*==================== WHY CHOOSE US ====================*/

/*--- Elements ---*/

const chooseItems = document.querySelectorAll(".ind-choose-item");
const promiseItems = document.querySelectorAll(".ind-choose-promise-item");
const chooseDescription = document.getElementById("chooseDescription");

/*--- Default Content ---*/

const defaultContent = {
    description: "Delivering trusted legal services through integrity, professionalism and strategic expertise for every client."
};

/*--- Update Center ---*/

function updateChooseContent(item) {

    const icon = item.dataset.icon;
    const title = item.dataset.title;
    const description = item.dataset.description;
    const target = item.dataset.target;

    /* Remove Active */

    chooseItems.forEach(el => el.classList.remove("active"));
    promiseItems.forEach(el => el.classList.remove("active"));

    /* Active Left */

    item.classList.add("active");

    /* Active Right */

    const activePromise = document.querySelector(`.ind-choose-promise-item[data-match="${target}"]`);

    if (activePromise) {

        activePromise.classList.add("active");

    }

    /* Fade Out */

    chooseDescription.style.opacity = "0";

    chooseDescription.style.transform = "translateY(10px)";

    /* Change Content */

    setTimeout(() => {


        chooseDescription.textContent = description;

        /* Fade In */

        chooseDescription.style.opacity = "1";

        chooseIcon.style.transform = "translateY(0)";

    }, 180);

}

/*--- Restore Default ---*/

function resetChooseContent() {

    chooseItems.forEach(el => el.classList.remove("active"));
    promiseItems.forEach(el => el.classList.remove("active"));

    const firstItem = document.querySelector('.ind-choose-item[data-target="experience"]');

    const firstPromise = document.querySelector('.ind-choose-promise-item[data-match="experience"]');

    if (firstItem) {

        firstItem.classList.add("active");

    }

    if (firstPromise) {

        firstPromise.classList.add("active");

    }

    chooseDescription.style.opacity = "0";

    setTimeout(() => {


        chooseDescription.textContent = defaultContent.description;

        chooseDescription.style.opacity = "1";

    }, 180);

}

/*--- Hover Events ---*/

chooseItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        updateChooseContent(item);

    });

});

/*--- Promise Hover ---*/

promiseItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        const target = item.dataset.match;

        const circle = document.querySelector(`.ind-choose-item[data-target="${target}"]`);

        if (circle) {

            updateChooseContent(circle);

        }

    });

});

/*--- Reset On Mouse Leave ---*/

const chooseSection = document.querySelector(".ind-choose-section");

if (chooseSection) {

    chooseSection.addEventListener("mouseleave", () => {

        resetChooseContent();

    });

}

/*--- Initialize ---*/

resetChooseContent();

/*--- Our Process Section ---*/


document.addEventListener("DOMContentLoaded", () => {

    const processSection = document.querySelector(".ind-process-section");

    if (!processSection) return;

    const processItems = document.querySelectorAll(".ind-process-item");

    const processPath = document.querySelector("#indProcessPath");

    /*--- SVG Line Animation ---*/

    if (processPath) {

        const length = processPath.getTotalLength();

        processPath.style.strokeDasharray = length;

        processPath.style.strokeDashoffset = length;

    }

    /*--- Intersection Observer ---*/

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const item = entry.target;

            const delay = item.dataset.delay || 0;

            setTimeout(() => {

                item.classList.add("show");

            }, delay);

            observer.unobserve(item);

        });

    }, {
        threshold: .35
    });

    processItems.forEach((item, index) => {

        item.dataset.delay = index * 180;

        observer.observe(item);

    });

    /*--- Section Animation ---*/

    const sectionObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            if (processPath) {

                processPath.style.transition = "stroke-dashoffset 2s ease";

                processPath.style.strokeDashoffset = "0";

            }

            sectionObserver.unobserve(entry.target);

        });

    }, {
        threshold: .3
    });

    sectionObserver.observe(processSection);

    /*--- Hover Active ---*/

    processItems.forEach((item) => {

        item.addEventListener("mouseenter", () => {

            processItems.forEach((card) => {

                card.classList.remove("active");

            });

            item.classList.add("active");

        });

        item.addEventListener("mouseleave", () => {

            item.classList.remove("active");

        });

    });

    /*--- Tilt Effect ---*/

    processItems.forEach((item) => {

        const card = item.querySelector(".ind-process-card");

        if (!card) return;

        item.addEventListener("mousemove", (e) => {

            if (window.innerWidth < 992) return;

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateX = ((y - rect.height / 2) / 18) * -1;

            const rotateY = ((x - rect.width / 2) / 18);

            card.style.transform =

                `perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

        });

        item.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /*--- Parallax Glow ---*/

    window.addEventListener("scroll", () => {

        const rect = processSection.getBoundingClientRect();

        const offset = rect.top * 0.08;

        processSection.style.backgroundPosition = `center ${offset}px`;

    }, { passive: true });

});

/*--- Testimonial Section Start ---*/


document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".ind-testimonial-section");

    if (!section) return;

    const cards = document.querySelectorAll(".ind-testimonial-card");

    const dots = document.querySelectorAll(".ind-testimonial-pagination span");

    const prev = document.querySelector(".ind-testimonial-prev");

    const next = document.querySelector(".ind-testimonial-next");

    const wrapper = document.querySelector(".ind-testimonial-wrapper");

    let current = 0;

    let autoSlide;

    /*======================
    Update Slider
    ======================*/

    function updateSlider() {

        cards.forEach((card, index) => {

            card.classList.remove("active");

            card.style.opacity = "0";

            card.style.transform = "translateY(20px)";

        });

        dots.forEach(dot => dot.classList.remove("active"));

        cards[current].classList.add("active");

        dots[current].classList.add("active");

        requestAnimationFrame(() => {

            cards[current].style.opacity = "1";

            cards[current].style.transform = "translateY(0)";

        });

    }

    /*======================
    Next
    ======================*/

    function nextSlide() {

        current++;

        if (current >= cards.length) {

            current = 0;

        }

        updateSlider();

    }

    /*======================
    Previous
    ======================*/

    function prevSlide() {

        current--;

        if (current < 0) {

            current = cards.length - 1;

        }

        updateSlider();

    }

    /*======================
    Buttons
    ======================*/

    next.addEventListener("click", () => {

        nextSlide();

        restartAuto();

    });

    prev.addEventListener("click", () => {

        prevSlide();

        restartAuto();

    });

    /*======================
    Pagination
    ======================*/

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            current = index;

            updateSlider();

            restartAuto();

        });

    });

    /*======================
    Auto Play
    ======================*/

    function startAuto() {

        autoSlide = setInterval(() => {

            nextSlide();

        }, 5000);

    }

    function stopAuto() {

        clearInterval(autoSlide);

    }

    function restartAuto() {

        stopAuto();

        startAuto();

    }

    wrapper.addEventListener("mouseenter", stopAuto);

    wrapper.addEventListener("mouseleave", startAuto);

    /*======================
    Keyboard
    ======================*/

    document.addEventListener("keydown", (e) => {

        if (e.key === "ArrowRight") {

            nextSlide();

            restartAuto();

        }

        if (e.key === "ArrowLeft") {

            prevSlide();

            restartAuto();

        }

    });

    /*======================
    Touch Swipe
    ======================*/

    let touchStart = 0;

    let touchEnd = 0;

    wrapper.addEventListener("touchstart", (e) => {

        touchStart = e.changedTouches[0].clientX;

    });

    wrapper.addEventListener("touchend", (e) => {

        touchEnd = e.changedTouches[0].clientX;

        const distance = touchStart - touchEnd;

        if (Math.abs(distance) < 50) return;

        if (distance > 0) {

            nextSlide();

        } else {

            prevSlide();

        }

        restartAuto();

    });

    /* Reveal Animation */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                section.classList.add("show");

                observer.unobserve(section);

            }

        });

    }, { threshold: .25 });

    observer.observe(section);

    /*Init */

    updateSlider();

    startAuto();

});

/*--- Testimonial Section End ---*/

/*--- CTA Reveal ---*/

const ctaSection = document.querySelector(".ind-cta-section");

if (ctaSection) {

    const ctaObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                ctaSection.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    ctaObserver.observe(ctaSection);

}