let playerHp = 1000;

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
        enemyMovement.style.visibility ="hidden";

        highscoreSave();

        enemyDeathCount;
    }
}

function highscoreSave() {


    let oldHighscore = localStorage.getItem("highscore");

    if (oldHighscore < enemyDeathCount) {
        localStorage.setItem("highscore", enemyDeathCount);
        console.log("new high");
    }


}

/* TODO https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_localstorage
    for highscore watch out dont make it buggy */