
let gestenPunkt = document.querySelector(".point");
let pAktiv = false;

function punktClick() {
    if (pAktiv) {
        gestenPunkt.style.height = "20px";
        gestenPunkt.style.width = "20px";
        pAktiv = true;
    }
}



// Mein Scheiß



/***
 * TODO Doc
 */
function startListening() {

    window.addEventListener('resize', resizeHandyPort, false);
    resizeHandyPort();
}

/***
 * TODO Doc
 */
function resizeHandyPort() {

    const linkerPlatzhalter = document.getElementById("linker_platzhalter");
    const rechterPlatzhalter = document.getElementById("rechter_platzhalter");
    const handyPort = document.getElementById("middle_screen");
    const musterkasten = document.getElementById("musterkasten");

    handyPort.style.height = String(window.innerHeight);
    handyPort.style.width = String(handyPort.style.height * 0.57);

    rechterPlatzhalter.style.height = String(window.innerHeight);
    rechterPlatzhalter.style.width = String((window.innerWidth - handyPort.style.width) / 2);

    linkerPlatzhalter.style.height = String(window.innerHeight);
    linkerPlatzhalter.style.width = String((window.innerWidth - handyPort.style.width) / 2);
}


