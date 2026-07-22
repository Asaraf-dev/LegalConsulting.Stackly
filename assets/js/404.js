/*--- GO BACK BUTTON ---*/

const goBackBtn = document.getElementById("ind404GoBack");

if(goBackBtn){

    goBackBtn.addEventListener("click",()=>{

        if(window.history.length > 1){

            window.history.back();

        }else{

            window.location.href = "index.html";

        }

    });

}