// animation for enemy movement
let ident = null;
let position = 5;
let enemyInterval = 1000; // how often enemy attacks
let enemyDps

function startOfAttacks() {
    enemyDps = setInterval(enemyCasts, enemyInterval)
}



function enemyCasts() {

    let enemyMovement;
    enemyMovement = document.getElementById("enemyMovement");
    console.log("TEST 4")
    clearInterval(enemyDps);
    ident = setInterval(movement, 10);

    function movement() {

        enemyMovement.style.visibility = "visible";
        if (position >= 70) {
            console.log("TEST END")
            position = 5;
            clearInterval(ident);
            startOfAttacks();
        } else {
            position++;
            enemyMovement.style.top = position + 'vh';
            enemyMovement.style.left = position - 'vw';// % for left or right enemyMovement
            console.log("TEST " + position);

        }
    }
}
