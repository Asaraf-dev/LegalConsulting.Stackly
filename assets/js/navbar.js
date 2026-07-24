/*==================== MOBILE MENU ====================*/

function initNavbar() {

    const openBtn = document.querySelector(".lc-menu-toggle");
    const closeBtn = document.querySelector(".lc-close-menu");
    const menu = document.querySelector(".lc-mobile-menu");
    const overlay = document.querySelector(".lc-mobile-overlay");

    if (!openBtn || !closeBtn || !menu || !overlay) return;

    function openMenu() {
        menu.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("menu-open");
    }

    function closeMenu() {
        menu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");
    }

    openBtn.addEventListener("click", openMenu);

    closeBtn.addEventListener("click", closeMenu);

    overlay.addEventListener("click", closeMenu);

    document.querySelectorAll(".lc-mobile-nav a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMenu();
        }
    });

}


function initStickyHeader() {

    console.log("Sticky Header Initialized");

    const wrapper = document.querySelector(".lc-header-wrapper");
    const header = document.querySelector(".lc-header");

    console.log(wrapper);
    console.log(header);

    if (!wrapper || !header) return;

    function updateHeader() {

        console.log("Scroll:", window.scrollY);

        if (window.scrollY > 60) {

            console.log("ADD");

            wrapper.classList.add("header-scrolled");
            header.classList.add("header-scrolled");

        } else {

            console.log("REMOVE");

            wrapper.classList.remove("header-scrolled");
            header.classList.remove("header-scrolled");

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

}

/*====================
Active Navigation
====================*/

function initActiveNavbar() {

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".lc-nav-menu a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

    document.querySelectorAll(".lc-mobile-nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

}
