async function loadComponent(id, file) {

    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;

}

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent("navbar","assets/components/navbar.html");

    await loadComponent("footer","assets/components/footer.html");

    initLoader();          // <-- Add this

    initNavbar();
    initStickyHeader();
    initFooter();

    document.dispatchEvent(
        new CustomEvent("componentsLoaded")
    );

});


