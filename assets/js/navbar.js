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


function initStickyHeader(){

    const wrapper = document.querySelector(".lc-header-wrapper");

    if(!wrapper) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 60){

            wrapper.classList.add("header-scrolled");

        }else{

            wrapper.classList.remove("header-scrolled");

        }

    });

}