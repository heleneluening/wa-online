//*** Initiation:

//Punkte importieren
const points = document.getElementsByClassName("point");

// Maus als nicht geklickt festsetzten
let mouseIsDown = false;

// * Symbole

// symbollib: ein array, dass alle Symbole sammelt
const symbolLib = [];

class symbol {

    /**
     * Constructor Symbol Klasse
     * @param type Typ des Symbols, bedingt welche funktion es triggert
     * @param pattern Muster des Symbols
     * jedes Symbol wird im constructor der Symbollib angefügt
     */
    constructor(type, pattern) {
        this.type = type;
        this.pattern = pattern;
        symbolLib.push(this);
    }
}

const symLineRight1 = new symbol("LineRight", [4, 5, 6]);
const symLineRight3 = new symbol("LineRight", [7, 8, 9]);
const symLineLeft1 = new symbol( "LineLeft", [3, 2, 1]);
const symLineLeft2 = new symbol("LineLeft", [6, 5, 4]);
const symLineLeft3 = new symbol("LineLeft", [9, 8, 7]);
const symLineDown1 = new symbol("LineDown", [1, 4, 7]);
const symLineDown2 = new symbol("LineDown", [2, 5, 8]);
const symLineDown3 = new symbol("LineDown", [3, 6, 9]);
const symLineUp1 = new symbol("LineUp", [7, 4, 1]);
const symLineUp2 = new symbol("LineUp", [8, 5, 2]);
const symLineUp3 = new symbol("LineUp", [9, 6, 3]);
const symLightning = new symbol("LightningAttack", [2, 4, 5, 6, 8]);
const symIce = new symbol("IceAttack", [5, 4, 8, 6, 2]);
const symEarth = new symbol("GroundAttack", [4, 7, 5, 9, 6]);

// Leeres Inputsymbol definieren
const symInput = new symbol("InputEmpty", []);


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
        if (symInput.pattern.length >= 2) {
            connectPoints();
        }
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
            case "LightningAttack":
                // TODO spLightningAttack();
                console.log("spLightningAttack()"); // TODO Debug
                break;
            case "IceAttack":
                // TODO spIceAttack();
                console.log("spIceAttack()"); // TODO Debug
                break;
            case "GroundAttack":
                // TODO spGroundAttack();
                console.log("spGroundAttack()"); // TODO Debug
                break;
        }
    }
    else {
        console.log("Symbol not valid.");
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

function connectPoints() {
    // TODO test connects p4 and p2

    let p1 = translateToPoint(symInput.pattern[(symInput.pattern.length - 2)]);
    let p2 = translateToPoint(symInput.pattern[(symInput.pattern.length - 1)]);

    let top, left, height, width;
    let rotation = false;
    let horizontal = false;

    // Berechnung von top und height in vh
    if (p1.y <= p2.y) {
        top = (p1.y * 10 - 5); // ein Kasten ist 10vh groß, -5 um den Mittelpunkt zu fassen
        height = ((p2.y - p1.y) * 10);
    } else {
        top = (p2.y * 10 - 5);
        height = ((p1.y - p2.y) * 10);
    }

    // Berechnung von left und width in vh
    if (p1.x <= p2.x) {
        left = (p1.x * 10 - 5);
        width = ((p2.x - p1.x) * 10);
    } else {
        left = (p2.x * 10 -5);
        width = ((p2.x - p1.x) * 10);
    }

    // Bestimmung der rotation
    if ((p1.x < p2.x && p1.y < p2.y) || (p1.x > p2.x && p1.y > p2.y)) {
        rotation = true;
    } else if (p1.x == p2.x && p1.y == p2.y) {
        horizontal = true;
    }




}

/**
 * translate to point: translates index of the point to coordinates
 * @param index des punktes
 * @returns {{x: number, y: number}} x und y Koordinate
 */
function translateToPoint(index) {
    let point = {x: 0, y: 0};

    switch (index) {
        case 1:
            point.x = 1;
            point.y = 1;
            break;
        case 2:
            point.x = 2;
            point.y = 1
            break;
        case 3:
            point.x = 3;
            point.y = 1;
            break;
        case 4:
            point.x = 1;
            point.y = 2;
            break;
        case 5:
            point.x = 2;
            point.y = 2;
            break;
        case 6:
            point.x = 3;
            point.y = 2;
            break;
        case 7:
            point.x = 1;
            point.y = 3;
            break;
        case 8:
            point.x = 2;
            point.y = 3;
            break;
        case 9:
            point.x = 3;
            point.y = 3;
    }
    return point;
}