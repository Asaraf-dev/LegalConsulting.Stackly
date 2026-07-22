/*--- NEWSLETTER ---*/

function initFooter(){

    const form = document.getElementById("newsletterForm");

    if(!form) return;

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const email = document.getElementById("newsletterEmail");

        if(email.value.trim()===""){

            email.focus();

            return;

        }

        const modal = new bootstrap.Modal(

            document.getElementById("newsletterModal")

        );

        modal.show();

        form.reset();

    });

}