/*--- Contact Form Validation ---*/

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (!form) return;

    const phone = document.getElementById("phone");

    phone.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "").slice(0, 10);

    });

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        if (!form.checkValidity()) {

            form.reportValidity();

            return;

        }

        if (phone.value.length !== 10) {

            phone.focus();

            alert("Please enter a valid 10-digit phone number.");

            return;

        }

        const successModal = new bootstrap.Modal(document.getElementById("contactSuccessModal"));

        successModal.show();

        form.reset();

    });

});

/*--- Contact Page Reveal Animation ---*/

document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(

        `

.contact-info-content,

.contact-info-card,

.contact-form-wrapper,

.contact-office-card,

.office-location-heading,

.office-location-map,

.office-location-card,

.faq-heading,

.faq-item

`

    );

    revealElements.forEach((element, index) => {

        element.classList.add("reveal");

        element.style.transitionDelay = `${index * 0.02}s`;

    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: .15,

        rootMargin: "0px 0px -80px 0px"

    });

    revealElements.forEach(element => observer.observe(element));

});