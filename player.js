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
        console.log("you died");
        endingScreen.style.visibility = "hidden";
        enemyMovement.style.visibility ="hidden";
    }
}