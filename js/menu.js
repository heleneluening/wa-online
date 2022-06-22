/* menu of the game, onclick it makes visible and removes the divs*/

let start = false; // false so it can become true after click
let tutorial = false;
let quit = false;
let back = false;

function gameStart() { // checks if start was clicked
    start = true;
    gameMenu();
}

function gameTutorial() {
    tutorial = true;
    gameMenu()
}

function gameQuit() {
    quit = true;
    gameMenu();
}

function gameBack() {
    back = true;
    gameMenu();
}

function gameMenu() { // gameMenu

    let menuStart = document.getElementById("gameStart");
    let menuTutorial = document.getElementById("gameTutorial");
    let menuQuit = document.getElementById("gameQuit");
    let menuBack = document.getElementById("gameBack");
    let gameMain = document.getElementById("gameMain");

    if (start) { //game start
        gameMain.style.visibility = "visible"; // makes the game visible = game start
        startOfAttacks(); // start the attacks of the enemy
        menuStart.remove(); // removes the div so they don't take space
        menuTutorial.remove();
        menuQuit.remove();
        whichEnemy(0); // enemy spawn

    }
    if (tutorial) { //tutorial
        console.log("Tutorial");
        menuStart.style.visibility = "hidden"; // it has to done with visibility, so you can go back and start the game
        menuTutorial.style.visibility = "hidden";
        menuQuit.style.visibility = "hidden";
        menuBack.style.visibility = "visible"; // becomes visible so you can click on it

        if (back) { // the back button
            tutorial = false; // sets it back to false so the if of tutorial doesnt trigger
            menuStart.style.visibility = "visible";
            menuTutorial.style.visibility = "visible";
            menuQuit.style.visibility = "visible";
            menuBack.style.visibility = "hidden";
        }

    }
    if (quit) { //quit
        window.close();
    }
}


