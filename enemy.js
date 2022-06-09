let enemyHealth = 100;
let enemyDamage = 0;

function enemyLife() {
    console.log(enemyHealth);
    switch (spellChoice) {
        case 1: // Slash
            enemyHealth = enemyHealth - 10; // change nummber for diffrent damage
            break
        case 2: // Lightning
            enemyHealth = enemyHealth - 15;
            break
        case 3: // Ice
            enemyHealth = enemyHealth - 20;
            break
        case 4: // Ground
            enemyHealth = enemyHealth - 25;
            break
    }
    console.log("TEST EHP " + enemyHealth);
}

function enemyAttack(){
    console.log("TEST ENEMY ANIMATION")
    enemyWalks()
}

// TODO switch should first trigger when spell reaches enemy ==> enemyLife move to animation if