//*** Initiation:

//Punkte importieren
const points = document.getElementsByClassName("point");

// Maus als nicht geklickt festsetzten
let mouseIsDown = false;

// Leeres Inputsymbol definieren
const symInput = {type: "InputEmpty", pattern: []};//symbol array

// Symbole definieren
const symLineRight1 =  {type: "LineRight", pattern: [1, 2, 3]};
const symLineRight2 = {type: "LineRight", pattern: [4, 5, 6]};
const symLineRight3 = {type: "LineRight", pattern: [7, 8, 9]};
const symLineLeft1 = {type: "LineLeft", pattern: [3, 2, 1]};
const symLineLeft2 = {type: "LineLeft", pattern: [6, 5, 4]};
const symLineLeft3 = {type: "LineLeft", pattern: [9, 8, 7]};
const symLineDown1 = {type: "LineDown", pattern: [1, 4, 7]};
const symLineDown2 = {type: "LineDown", pattern: [2, 5, 8]};
const symLineDown3 = {type: "LineDown", pattern: [3, 6, 9]};
const symLineUp1 = {type: "LineUp", pattern: [7, 4, 1]};
const symLineUp2 = {type: "LineUp", pattern: [8, 5, 2]};
const symLineUp3 = {type: "LineUp", pattern: [9, 6, 3]};
const symLightning = {type: "Lightning", pattern: [2, 4, 5, 6, 8]};
const symStone = {type: "Stone", pattern: [1, 4, 7, 8, 9, 6, 3, 2]};

// Symbole in der Symbollib sammeln
const symbolLib =   [symLineLeft1, symLineLeft2, symLineLeft3,
                    symLineRight1, symLineRight2, symLineRight3,
                    symLineDown1,symLineDown2, symLineDown3,
                    symLineUp1, symLineUp2, symLineUp3,
                    symLightning, symStone];


//*** Methods
/**
 * pointSelect: Selects Points
 * Is triggered when the mouse hovers over a point
 * If the mouse button is clicked the method:
 *      changes the colour of the point
 *      adds the ID of the point to the input pattern
 *      Debug: logs the input pattern
 * @param element
 */
function pointSelect(element) {
    if (mouseIsDown) {
        element.classList.add("pointColour");
        symInput.pattern.push(element.id);
    }
}

/**
 * mouseDown: sets the mouseIsDown variable to true
 * IDE says unused, but it is needed for pointSelect to function!
 */
function mouseDown() {
    mouseIsDown = true;
}

/**
 * mouseUp: resets the controls
 * Is triggered by the mouseup event on the grid-container or when the mouse leaves main
 * If mouseIsDown is true
 *      mouseIsDown is set to false
 *      castMagic is triggered
 *      the pointsColour class is removed from the points
 *      the input pattern is emptied
 */
function mouseUp() { // mouseIsDown becomes false and it removes the added colour
    if (mouseIsDown) {
        mouseIsDown = false;
        castMagic();
        for (const p of points) {
            p.classList.remove("pointColour"); // removes the colour
        }
        symInput.pattern.length = 0;//delete array
    }
}  //mouseIsDown becomes false and it removes the added colour

/**
 * pointClicked: starts the pattern if a point is directly clicked
 * @param element the point that is clicked
 */
function pointClicked(element) {
    if (!mouseIsDown) {
        mouseIsDown = true;
        pointSelect(element);
    }
}

/**
 * castMagic: checks which symbol has been drawn
 * triggers Spells
 */
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
                //TODO spLineLeft();
                console.log("spLineLeft()"); // TODO Debug
                break;
            case "LineRight":
                // TODO spLineRight();
                console.log("spLineRight()"); // TODO Debug
                break;
            case "LineUp":
                // TODO spLineUp();
                console.log("spLineRight()"); // TODO Debug
                break;
            case "LineDown":
                // TODO spLineDown();
                console.log("spLineDown()"); // TODO Debug
                break;
            case "Lightning":
                // TODO spLightning();
                console.log("spLightning()"); // TODO Debug
                break;
            case "Stone":
                // TODO spStone();
                console.log("spStone()"); // TODO Debug
                break;
        }
    }
}

/**
 * compareSymbols: compares two symbols, return true/false
 * @param symbol1 ein Array mit 9 werten
 * @param symbol2 ein Array mit 9 werten
 */
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

