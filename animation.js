//Spell animations

let id = null;
let spellCount = []; // counts how often an symbol was drawn right
let elem;

function myMove() { //movement and style changing of #myAnimation

    elem = document.createElement("div");
    elem.className = "myAnimation";
    let mainelem = document.getElementsByTagName("main");
    mainelem.item(0).appendChild(elem);

    switch (spellChoice) { // each case changes the style of the spell
        case 1:
            console.log("TEST 1")
            elem.style.backgroundColor = "red"; // changes colour from spell
            elem.style.borderRadius = "0%"; // changes form of spell
            break;
        case 2:
            console.log("TEST 2")
            elem.style.backgroundColor = "yellow";
            elem.style.borderRadius = "100%";
            break;
        case 3:
            console.log("TEST 3")
            elem.style.backgroundColor = "green";
            elem.style.borderRadius = "10%";
            break
    }
    elem.setAttribute("pos", "65"); // start postion of spell
    elem.style.top = '65 vh'; // pos
    spellCount.push(elem);
    clearInterval(id); // stops the interval if missing the spell gets faster for each spell cast
    id = setInterval(frame, 10);// 10 - 20


}

function frame() {
    for (let i = 0; i < spellCount.length; i++) {
        if (spellCount[i].getAttribute("pos") <= 5) { // checks if the "spell" reached it target 0 for interface end
            spellCount[i].remove(); // removes the object
            spellCount.shift();

            enemyDamage(); // deals damage to the enemy

        } else { // if the spell isn't on it end position it will move
            spellCount[i].setAttribute("pos", spellCount[i].getAttribute("pos") - 1);
            spellCount[i].style.top = spellCount[i].getAttribute("pos") + 'vh'; // changes the postion of the object ny 1vh
            elem.style.visibility = "visible"; // makes the spell visible
        }
    }

    if (spellCount.length === 0) { // when the spell reaches it
        clearInterval(id);
    }
}

