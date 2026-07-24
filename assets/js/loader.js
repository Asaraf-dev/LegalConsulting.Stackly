/*==================== SITE LOADER ====================

function initLoader() {

    const loader = document.querySelector(".site-loader");

    if (!loader) return;

    const LOADER_DELAY = 2000;

    let timer = null;

    function showLoader() {

        document.body.classList.add("loading");

        loader.classList.remove("site-loader-hide");

        loader.style.opacity = "1";
        loader.style.visibility = "visible";

    }

    function hideLoader() {

        setTimeout(() => {

            loader.classList.add("site-loader-hide");

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            document.body.classList.remove("loading");

        }, LOADER_DELAY);

    }

    /* Initial page load */ 
    /*document.addEventListener("componentsLoaded", hideLoader);

    /* Internal page navigation
    document.addEventListener("click", (e) => {

        const link = e.target.closest("a");

        if (!link) return;

        const href = link.getAttribute("href");

        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:") ||
            href.startsWith("javascript:") ||
            href.startsWith("http") ||
            link.target === "_blank"
        ) {
            return;
        }

        e.preventDefault();

        showLoader();

        setTimeout(() => {

            window.location.href = href;

        }, 100);

    });

}

console.log("initLoader");

document.addEventListener("componentsLoaded", () => {
    console.log("componentsLoaded");
});

window.addEventListener("pageshow", (e) => {
    console.log("pageshow", e.persisted);
});

window.addEventListener("load", () => {
    console.log("load");
}); */

/*--- SITE LOADER ---*/

(() => {

    const loader = document.querySelector(".site-loader");

    if (!loader) return;

    const LOADER_DELAY = 2000; // 2 seconds

    /*--- Show Loader ---*/

    function showLoader() {

        loader.classList.remove("site-loader-hide");

        loader.style.opacity = "1";

        loader.style.visibility = "visible";

    }

    /*--- Hide Loader ---*/

    function hideLoader() {

        setTimeout(() => {

            loader.classList.add("site-loader-hide");

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, LOADER_DELAY);

    }

    /*--- Components Loaded ---*/

    document.addEventListener("componentsLoaded", hideLoader);

    /*--- Window Loaded ---*/

    window.addEventListener("load", hideLoader);

    /*--- Browser Back / Forward ---*/

    window.addEventListener("pageshow", () => {

        showLoader();

        hideLoader();

    });

    /*--- Internal Navigation ---*/

    document.addEventListener("click", (e) => {

        const link = e.target.closest("a");

        if (!link) return;

        const href = link.getAttribute("href");

        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:") ||
            href.startsWith("javascript:") ||
            href.startsWith("http") ||
            link.target === "_blank"
        ) {
            return;
        }

        e.preventDefault();

        showLoader();

        requestAnimationFrame(() => {

            window.location.href = href;

        });

    });

})();