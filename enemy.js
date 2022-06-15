let enemyHp = 100;


function enemyDamage() {
    switch (spellChoice) {
        case 1: // Slash
            enemyHp = enemyHp - 10; // change number for different damage
            break
        case 2: // Lightning
            enemyHp = enemyHp - 15;
            break
        case 3: // Ice
            enemyHp = enemyHp - 20;
            break
        case 4: // Ground
            enemyHp = enemyHp - 25;
            break
    }
    console.log(enemyHp);
    if (enemyHp >= 0)
    enemyHealth(); // updates the enemyHp
    enemyDeath();
}

function enemyHealth() {
    document.getElementById("eHp").innerHTML = enemyHp;
}

function enemyDeath() { // TODO add more things that should happen
    if (enemyHp <= 0) {
    console.log("enemy died");
    }
}

function enemyAttack(){
    console.log("TEST ENEMY ANIMATION")
    enemyWalks()
}
