/*====================
    LOAD COMPONENT
====================*/

async function loadComponent(id, file) {

    try {

        const element = document.getElementById(id);

        if (!element) {

            console.error(`Element with ID "${id}" not found.`);

            return;

        }

        const response = await fetch(file);

        if (!response.ok) {

            throw new Error(`Failed to load ${file}`);

        }

        const html = await response.text();

        element.innerHTML = html;

    } catch (error) {

        console.error("Component Loading Error:", error);

    }

}