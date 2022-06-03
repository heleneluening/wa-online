let id = null;
let test = [];
let elem;


function myMove() { //movement and style changing of #myAnimation
    elem = document.createElement("div");

    elem.className = "myAnimation";
    let mainelem = document.getElementsByTagName("main");
    mainelem.item(0).appendChild(elem);

    switch (spellChoice) {
        case 1:
            console.log("TEST 1") // elem = document.getElementById("myAnimation");?
            elem.style.backgroundColor = "black"; // changes colour from spell
            elem.style.borderRadius = "10%";
            break;
        case 2:
            console.log("TEST 2") // elem = document.getElementById("myAnimation");
            elem.style.backgroundColor = "red";
            elem.style.borderRadius = "100%";
            break;
    }
    elem.setAttribute("pos", "65"); // change pos it so it works everywhere
    elem.style.top = '65 vh';
    test.push(elem);
    clearInterval(id);
    id = setInterval(frame, 10);// 10 - 20



}

function frame() {
    for (let i = 0; i < test.length; i++) {
        if (test[i].getAttribute("pos") <= 0) {
            test[i].remove();
            test.shift();
            //elem.style.visibility = "hidden"; // hides the spell after it reaches it target
        } else {
            test[i].setAttribute("pos", test[i].getAttribute("pos")-1);
            test[i].style.top = test[i].getAttribute("pos") + 'vh';

            elem.style.visibility = "visible"; //makes the spell visible
        }
        //elem.style.top = pos + 'vh';
        //elem.style.left = pos - 'vw'; // not (needed)
    }

    if (test.length === 0) {
        clearInterval(id);
    }
}

