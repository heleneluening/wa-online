let id = null;

function myMove() { //movement of #myAnimation
    let elem = document.getElementById("myAnimation");
    let pos = 65; // change pos it so it works everywhere
    elem.style.top = pos + 'vh';
    elem.style.visibility = "visible"; //makes the spell visible
    clearInterval(id);
    id = setInterval(frame, 10);// 10 - 20
    function frame() {
        if (pos === -5) {
            clearInterval(id);
            elem.style.visibility = "hidden"; // hides the spell after it reaches it target
        } else {
            pos--;
            elem.style.top = pos + 'vh';
            elem.style.left = pos - 'vw'; // not (needed)
        }
    }
}


/*
TODO more elements that work at the same time so you could spam a spell
*/

