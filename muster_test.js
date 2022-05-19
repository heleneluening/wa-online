
let gestenPunkt = document.querySelector(".point");
let pAktiv = false;

function punktClick() {
    if (pAktiv) {
        gestenPunkt.style.height = "20px";
        gestenPunkt.style.width = "20px";
        pAktiv = true;
    }
}

