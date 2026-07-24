document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
        USER DETAILS
    ==========================================*/

    const userName = document.getElementById("dashboardUserName");
    const userEmail = document.getElementById("dashboardUserEmail");
    const userProfile = document.getElementById("dashboardProfile");

    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");
    const storedProfile = localStorage.getItem("userProfile");

    if (userName && storedName) {
        userName.textContent = storedName;
    }

    if (userEmail && storedEmail) {
        userEmail.textContent = storedEmail;
    }

    if (userProfile && storedProfile) {
        userProfile.src = storedProfile;
    }

    /*==========================================
        SIDEBAR TOGGLE
    ==========================================*/

    const sidebar = document.getElementById("dashboardSidebar");
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const overlay = document.querySelector(".sidebar-overlay");

    if (sidebar && sidebarToggle && overlay) {

        sidebarToggle.addEventListener("click", () => {

            sidebar.classList.toggle("show");
            overlay.classList.toggle("show");

        });

        overlay.addEventListener("click", () => {

            sidebar.classList.remove("show");
            overlay.classList.remove("show");

        });

    }

    /*==========================================
        ACTIVE SIDEBAR MENU
    ==========================================*/

    const currentPage = window.location.pathname.split("/").pop().split("?")[0];

    document.querySelectorAll(".dashboard-menu a").forEach(link => {

        const href = link.getAttribute("href").split("?")[0];

        link.classList.toggle("active", href === currentPage);

    });

    /*==========================================
PASSWORD VALIDATION
==========================================*/

    const form = document.getElementById("changePasswordForm");

    if (form) {

        const current = document.getElementById("currentPassword");

        const password = document.getElementById("newPassword");

        const confirm = document.getElementById("confirmPassword");

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}_\-+=]).{8,}$/;

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            let valid = true;

            if (current.value.trim() === "") {

                current.classList.add("is-invalid");

                valid = false;

            } else {

                current.classList.remove("is-invalid");

            }

            if (!regex.test(password.value)) {

                password.classList.add("is-invalid");

                valid = false;

            } else {

                password.classList.remove("is-invalid");

            }

            if (confirm.value !== password.value || confirm.value === "") {

                confirm.classList.add("is-invalid");

                valid = false;

            } else {

                confirm.classList.remove("is-invalid");

            }

            if (valid) {

                alert("Password updated successfully.");

                form.reset();

            }

        });

        document.querySelectorAll(".password-toggle").forEach(button => {

            button.addEventListener("click", function () {

                const input = this.previousElementSibling;

                const icon = this.querySelector("i");

                if (input.type === "password") {

                    input.type = "text";

                    icon.classList.replace("bi-eye", "bi-eye-slash");

                } else {

                    input.type = "password";

                    icon.classList.replace("bi-eye-slash", "bi-eye");

                }

            });

        });

    }

});