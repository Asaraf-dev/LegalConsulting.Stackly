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