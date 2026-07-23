/*==========================================
    CLIENT DASHBOARD
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
        USER INFORMATION
    ==========================================*/

    const userName =
        localStorage.getItem("userName") ||
        localStorage.getItem("registerName") ||
        "Client";

    const userEmail =
        localStorage.getItem("userEmail") ||
        localStorage.getItem("registerEmail") ||
        "client@email.com";

    const topUserName = document.getElementById("topUserName");
    const welcomeUserName = document.getElementById("welcomeUserName");
    const topUserEmail = document.getElementById("topUserEmail");

    if (topUserName) {

        topUserName.textContent = userName;

    }

    if (welcomeUserName) {

        welcomeUserName.textContent = userName;

    }

    if (topUserEmail) {

        topUserEmail.textContent = userEmail;

    }

    /*==========================================
        PROFILE IMAGE
    ==========================================*/

    const profileImage = document.getElementById("profileImage");

    const savedImage = localStorage.getItem("userProfile");

    if (profileImage && savedImage) {

        profileImage.src = savedImage;

    }

    /*==========================================
        SIDEBAR TOGGLE
    ==========================================*/

    const sidebar = document.querySelector(".dashboard-sidebar");

    const sidebarToggle = document.querySelector(".sidebar-toggle");

    if (sidebarToggle) {

        sidebarToggle.addEventListener("click", () => {

            sidebar.classList.toggle("show");

        });

    }

    /*==========================================
        CLOSE SIDEBAR MOBILE
    ==========================================*/

    document.addEventListener("click", (event) => {

        if (window.innerWidth > 1199) {

            return;

        }

        if (

            !sidebar.contains(event.target) &&

            !sidebarToggle.contains(event.target)

        ) {

            sidebar.classList.remove("show");

        }

    });

    /*==========================================
        ACTIVE MENU
    ==========================================*/

    const currentPage = window.location.pathname.split("/").pop() || "client-dashboard.html";

    const menuLinks = document.querySelectorAll(".sidebar-menu li a");

    menuLinks.forEach(link => {

        const href = link.getAttribute("href");

        link.parentElement.classList.remove("active");

        if (href === currentPage) {

            link.parentElement.classList.add("active");

        }

    });

    /*==========================================
        DARK MODE
    ==========================================*/

    const darkButton = document.querySelectorAll(".topbar-icon")[2];

    if (darkButton) {

        darkButton.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            localStorage.setItem(

                "theme",

                document.body.classList.contains("dark-mode")

                    ? "dark"

                    : "light"

            );

        });

    }

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

    }

    /*==========================================
        LOGOUT
    ==========================================*/

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {

        logoutBtn.addEventListener("click", () => {

            localStorage.removeItem("userName");

            localStorage.removeItem("userEmail");

            localStorage.removeItem("userRole");

            window.location.href = "login.html";

        });

    }

});

/*==========================================
    REVENUE CHART
==========================================*/

const revenueChart = document.getElementById("revenueChart");

if (revenueChart) {

    new Chart(revenueChart, {

        type: "line",

        data: {

            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

            datasets: [{

                label: "Revenue",

                data: [120, 180, 160, 240, 210, 280, 320, 300, 350, 390, 430, 470],

                borderColor: "#B68D40",

                backgroundColor: "rgba(182,141,64,.12)",

                fill: true,

                tension: .4,

                pointRadius: 5,

                pointHoverRadius: 7

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: { display: false }

            },

            scales: {

                x: { grid: { display: false } },

                y: { beginAtZero: true }

            }

        }

    });

}

/*==========================================
    CASE STATUS CHART
==========================================*/

const caseChart = document.getElementById("caseStatusChart");

if (caseChart) {

    new Chart(caseChart, {

        type: "doughnut",

        data: {

            labels: ["Active", "Pending", "Closed", "Review"],

            datasets: [{

                data: [48, 22, 18, 12],

                backgroundColor: [

                    "#16A34A",

                    "#F59E0B",

                    "#2563EB",

                    "#DC2626"

                ],

                borderWidth: 0

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    position: "bottom"

                }

            },

            cutout: "70%"

        }

    });

}