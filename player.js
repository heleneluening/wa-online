let playerHp = 1000;
let newHighscore

function playerHealth() {
    playerHp = playerHp - enemyDamage;
    playerDeath();
    playerHealthUpdate()
}

function playerHealthUpdate() {
    document.getElementById("pHp").innerHTML = playerHp;
}

function playerDeath() {
    let endingScreen = document.getElementById("gameMain"); // for hidding game again after dedath
    let enemyMovement = document.getElementById("enemyMovement");

    if (playerHp <= 0) {
        playerHp = 0; // so it doesnt your life cant fall under 0
        playerHealthUpdate(); // updates your hp
        clearInterval(enemyDps);
        console.log("you died");
        endingScreen.style.visibility = "hidden";
        enemyMovement.style.visibility = "hidden";

        highscoreSave();
        //TODO Write a function that can restart the whole game, you will need to add the removed divs at start

    }
}

function highscoreSave() { // saving the highscore

    let oldHighscore = localStorage.getItem("highscore"); // calls the highscore

    if (oldHighscore < enemyDeathCount) { // if the new highscore is higher then the old
        localStorage.setItem("highscore", enemyDeathCount); // sets a new highscore
        highscoreUpdate();
    }
} // saving highscore

function highscoreUpdate(){
    newHighscore = localStorage.getItem("highscore")
    document.getElementById("gameHighscore").innerHTML = newHighscore;



}

