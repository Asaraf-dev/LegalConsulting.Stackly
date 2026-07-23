/*--- About Firm ---*/

const aboutFirm = document.querySelector(".abt-firm-section");

if (aboutFirm) {

    const aboutObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                aboutFirm.classList.add("show");

            }

        });

    }, {

        threshold: .2

    });

    aboutObserver.observe(aboutFirm);

}

/*--- Core Values ---*/

const valueObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const section = entry.target;

            section.querySelector(".value-badge")?.classList.add("show");

            setTimeout(() => {

                section.querySelector(".value-title")?.classList.add("show");

            }, 150);

            setTimeout(() => {

                section.querySelector(".value-description")?.classList.add("show");

            }, 350);

            const cards = section.querySelectorAll(".value-card");

            cards.forEach((card, index) => {

                setTimeout(() => {

                    card.classList.add("show");

                }, 550 + (index * 150));

            });

            valueObserver.unobserve(section);

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll(".value-section").forEach(section => {

    valueObserver.observe(section);

});

/*--- Meet Our Experts ---*/

const expertObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const section = entry.target;

            section.querySelector(".expert-badge")?.classList.add("show");

            setTimeout(() => {

                section.querySelector(".expert-title")?.classList.add("show");

            }, 150);

            setTimeout(() => {

                section.querySelector(".expert-description")?.classList.add("show");

            }, 350);

            const cards = section.querySelectorAll(".expert-card");

            cards.forEach((card, index) => {

                setTimeout(() => {

                    card.classList.add("show");

                }, 550 + (index * 180));

            });

            expertObserver.unobserve(section);

        }

    });

}, {

    threshold: .25

});

document.querySelectorAll(".expert-section").forEach(section => {

    expertObserver.observe(section);

});

