let playerHp = 1000;

function playerHealth() {
    playerHp = playerHp - enemyDamage;
    playerHealthUpdate()
}

function playerHealthUpdate() {
    document.getElementById("pHp").innerHTML = playerHp;
}

