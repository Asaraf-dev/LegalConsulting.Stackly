/*--- SITE LOADER ---*/

function initLoader() {

    console.log("Loader Started");

    const loader = document.querySelector(".site-loader");

    console.log(loader);

    if (!loader) {

        console.log("Loader Not Found");

        return;

    }
    const LOADER_DELAY = 1000;

    /*--- Show Loader ---*/

    function showLoader() {

    document.body.classList.add("loading");

    loader.classList.remove("site-loader-hide");

    loader.style.opacity = "1";

    loader.style.visibility = "visible";

}

    /*--- Hide Loader ---*/

    function hideLoader() {

        console.log("Hide Loader Called");

        setTimeout(() => {

            console.log("Loader Hidden");

            loader.classList.add("site-loader-hide");

            loader.classList.add("site-loader-hide");

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

            document.body.classList.remove("loading");

        }, LOADER_DELAY);

    }
    

    /*--- Initial Page Load ---*/

    hideLoader();

    /*--- Browser Back / Forward ---*/

    window.addEventListener("pageshow", (e) => {

        if (e.persisted) {

            hideLoader();

        }

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

        setTimeout(() => {

            window.location.href = href;

        }, 100);

    });

}

