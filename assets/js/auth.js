/*==========================================
    AUTH PAGE
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
        ROLE SELECTION
    ==========================================*/

    let selectedRole = "client";

    const roleCards = document.querySelectorAll(".login-role-card");

    if (roleCards.length) {

        roleCards.forEach(card => {

            card.addEventListener("click", () => {

                roleCards.forEach(item => {

                    item.classList.remove("active");

                });

                card.classList.add("active");

                selectedRole = card.dataset.role;

            });

        });

    }

    /*==========================================
        PASSWORD EYE TOGGLE
    ==========================================*/

    const toggleButtons = document.querySelectorAll(".toggle-password,#togglePassword");

    toggleButtons.forEach(button => {

        button.addEventListener("click", () => {

            let input;

            if (button.id === "togglePassword") {

                input = document.getElementById("password");

            } else {

                input = button.previousElementSibling;

            }

            if (!input) return;

            const icon = button.querySelector("i");

            if (input.type === "password") {

                input.type = "text";

                icon.classList.remove("bi-eye");

                icon.classList.add("bi-eye-slash");

            } else {

                input.type = "password";

                icon.classList.remove("bi-eye-slash");

                icon.classList.add("bi-eye");

            }

        });

    });

    /*==========================================
        FULL NAME
    ==========================================*/

    const fullName = document.getElementById("fullName");

    if (fullName) {

        fullName.addEventListener("input", function () {

            this.value = this.value.replace(/[^A-Za-z .'-]/g, "");

        });

    }

    /*==========================================
        LOGIN
    ==========================================*/

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        const email = document.getElementById("email");

        const password = document.getElementById("password");

        const rememberMe = document.getElementById("rememberMe");

        const savedEmail = localStorage.getItem("rememberEmail");

        if (savedEmail) {

            email.value = savedEmail;

            if (rememberMe) {

                rememberMe.checked = true;

            }

        }

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            if (!loginForm.checkValidity()) {

                loginForm.reportValidity();

                return;

            }

            if (rememberMe && rememberMe.checked) {

                localStorage.setItem("rememberEmail", email.value);

            } else {

                localStorage.removeItem("rememberEmail");

            }

            localStorage.setItem("userEmail", email.value);

            localStorage.setItem("userRole", selectedRole);

            if (selectedRole === "client") {

                window.location.href = "client-dashboard.html";

            } else {

                window.location.href = "admin-dashboard.html";

            }

        });

    }

    /*==========================================
        REGISTER
    ==========================================*/

    const registerForm = document.getElementById("registerForm");

    if (!registerForm) return;

    const registerEmail = document.getElementById("registerEmail");

    const registerPassword = document.getElementById("registerPassword");

    const confirmPassword = document.getElementById("confirmPassword");

    const terms = document.getElementById("terms");

    const strengthFill = document.getElementById("strengthFill");

    const ruleLength = document.getElementById("rule-length");

    const ruleUpper = document.getElementById("rule-upper");

    const ruleLower = document.getElementById("rule-lower");

    const ruleNumber = document.getElementById("rule-number");

    const ruleSpecial = document.getElementById("rule-special");

    const passwordRegex = {

        length: /.{8,}/,

        upper: /[A-Z]/,

        lower: /[a-z]/,

        number: /\d/,

        special: /[^A-Za-z0-9]/

    };

    function updateRule(rule, valid) {

        const icon = rule.querySelector("i");

        if (valid) {

            rule.classList.add("valid");

            icon.classList.remove("bi-circle");

            icon.classList.add("bi-check-circle-fill");

        } else {

            rule.classList.remove("valid");

            icon.classList.remove("bi-check-circle-fill");

            icon.classList.add("bi-circle");

        }

    }

    registerPassword.addEventListener("input", () => {

        let score = 0;

        const length = passwordRegex.length.test(registerPassword.value);

        const upper = passwordRegex.upper.test(registerPassword.value);

        const lower = passwordRegex.lower.test(registerPassword.value);

        const number = passwordRegex.number.test(registerPassword.value);

        const special = passwordRegex.special.test(registerPassword.value);

        updateRule(ruleLength, length);

        updateRule(ruleUpper, upper);

        updateRule(ruleLower, lower);

        updateRule(ruleNumber, number);

        updateRule(ruleSpecial, special);

        if (length) score++;

        if (upper) score++;

        if (lower) score++;

        if (number) score++;

        if (special) score++;

        strengthFill.style.width = score * 20 + "%";

        if (score <= 2) {

            strengthFill.style.background = "#EF4444";

        } else if (score <= 4) {

            strengthFill.style.background = "#F59E0B";

        } else {

            strengthFill.style.background = "#22C55E";

        }

    });

    /*==========================================
    CONFIRM PASSWORD
==========================================*/

    confirmPassword.addEventListener("input", () => {

        if (confirmPassword.value === "") {

            confirmPassword.setCustomValidity("");

            return;

        }

        if (registerPassword.value !== confirmPassword.value) {

            confirmPassword.setCustomValidity("Passwords do not match");

        } else {

            confirmPassword.setCustomValidity("");

        }

    });

    registerPassword.addEventListener("input", () => {

        if (confirmPassword.value !== "") {

            if (registerPassword.value !== confirmPassword.value) {

                confirmPassword.setCustomValidity("Passwords do not match");

            } else {

                confirmPassword.setCustomValidity("");

            }

        }

    });

    /*==========================================
        REGISTER SUBMIT
    ==========================================*/

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        if (!registerForm.checkValidity()) {

            registerForm.reportValidity();

            return;

        }

        if (registerPassword.value !== confirmPassword.value) {

            confirmPassword.setCustomValidity("Passwords do not match");

            confirmPassword.reportValidity();

            return;

        }

        confirmPassword.setCustomValidity("");

        const validPassword =

            passwordRegex.length.test(registerPassword.value) &&
            passwordRegex.upper.test(registerPassword.value) &&
            passwordRegex.lower.test(registerPassword.value) &&
            passwordRegex.number.test(registerPassword.value) &&
            passwordRegex.special.test(registerPassword.value);

        if (!validPassword) {

            registerPassword.setCustomValidity(

                "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."

            );

            registerPassword.reportValidity();

            return;

        }

        registerPassword.setCustomValidity("");

        localStorage.setItem("registerName", fullName.value);

        localStorage.setItem("registerEmail", registerEmail.value);

        localStorage.setItem("registerRole", selectedRole);

        const modalElement = document.getElementById("registerSuccessModal");

        if (modalElement) {

            const successModal = new bootstrap.Modal(modalElement);

            successModal.show();

        }

    });

    /*==========================================
        GO TO LOGIN
    ==========================================*/

    const goToLogin = document.getElementById("goToLogin");

    if (goToLogin) {

        goToLogin.addEventListener("click", () => {

            window.location.href = "login.html";

        });

    }

});