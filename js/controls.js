// Touch


function touchHasStarted(event) {
    console.log("Touch has started");
    mouseDown();
}
function touchHasMoved(event) {
    pointSelect(document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY));
    console.log("Touch has Moved");
}


//*** Initiation Gamestyle:

//Spell choice
let spellChoice;

//Punkte importieren
const points = document.getElementsByClassName("point");

// Maus als nicht geklickt festsetzten
let mouseIsDown = false;


// * Symbole

// symbollib: ein array, dass alle Symbole sammelt
const symbolLib = [];

class symbol {
    constructor(type, pattern) {
        this.type = type;
        this.pattern = pattern;
        symbolLib.push(this);
    }
}

let symInput = null
fetch("js/symbols.json").then(res => res.json()).then(symbolData => {
    for (const key in symbolData) {
        for (const combination of symbolData[key]) {
            new symbol(key, combination)
        }
    }

// Leeres Inputsymbol definieren
    symInput = new symbol("InputEmpty", []);

    console.log(symbolLib);
})


//*** Methods

let oldcol = -42, oldrow = -42

function pointSelect(element) {
    if (mouseIsDown) {
        element.classList.add("pointColour");
        const row = Math.floor((element.id - 1) / 3)
        const col = (element.id - 1) % 3
        if (row === oldrow && Math.abs(col - oldcol) === 2) {
            const intid = row * 3 + Math.min(col, oldcol) + 2
            document.getElementById(intid).classList.add("pointColour");
            symInput.pattern.push(intid)
        }
        symInput.pattern.push(element.id);
        oldrow = row
        oldcol = col
    }
}


function mouseDown() { // IDE says unused, but it is needed for pointSelect to function!
    mouseIsDown = true;
}


function mouseUp() { // mouseIsDown becomes false and it removes the added colour
    if (mouseIsDown) {
        mouseIsDown = false;
        castMagic();
        for (const p of points) {
            p.classList.remove("pointColour"); // removes the colour
        }
        symInput.pattern.length = 0;//delete array
        oldcol = -42
        oldrow = -42
    }
}  //mouseIsDown becomes false and it removes the added colour


function pointClicked(element) {
    if (!mouseIsDown) {
        mouseIsDown = true;
        pointSelect(element);
    }
}

function castMagic() {
    console.log("castMagic"); // TODO Debug
    let symbolFound = false;
    let foundSymbol;

    for (let j = 0; j < symbolLib.length; j++) { // TODO 4 ist Platzhalter für die Anzahl Symbole
        if (compareSymbols(symbolLib[j].pattern, symInput.pattern)) {
            symbolFound = true;
            foundSymbol = symbolLib[j];
            break;
        }
    }

    if (symbolFound) {
        switch (foundSymbol.type) {
            case "LineLeft":
            case "LineRight":
            case "LineUp":
            case "LineDown":
                console.log("Slash"); // TODO Debug
                spellChoice = "Slash";
                spellAnimation();
                break;
            case "LightningAttack":
                console.log("Lightning"); // TODO Debug
                spellChoice = "Lightning";
                spellAnimation();
                break;
            case "IceAttack":
                console.log("Ice"); // TODO Debug
                spellChoice = "Ice";
                spellAnimation();
                break;
            case "GroundAttack":
                console.log("Ground"); // TODO Debug
                spellChoice = "Ground";
                spellAnimation();
                break;
        }
    } else {
        console.log("Symbol not valid.");
    }
}


function compareSymbols(symbol1, symbol2) {
    let ausgabe = false;
    if (symbol1.length == symbol2.length) {
        for (let i = 0; i < symbol1.length; i++) {
            if (symbol1[i] == symbol2[i]) {
                ausgabe = true;
            } else {
                ausgabe = false;
                break;
            }
        }
    }
    return ausgabe;
}



