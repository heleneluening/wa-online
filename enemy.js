let enemyHp = 100;


function whichEnemy() {

    let enemy = document.querySelector(".myEnemy"); //TODO change the things that should happen
    let enemyChoice = Math.floor(Math.random() * 3) + 1;

    switch (enemyChoice) { //TODO change it more diffrent enemies
        case 1:
            enemyHp = 100;
            enemy.style.backgroundColor = "green";
            enemy.style.width = 15 + "vh";
            enemy.style.height = 15 + "vh";
            break;
        case 2:
            enemyHp = 150;
            enemy.style.backgroundColor = "blue";
            enemy.style.width = 20 + "vh";
            enemy.style.height = 20 + "vh";
            break;
        case 3:
            enemyHp = 200;
            enemy.style.backgroundColor = "red";
            enemy.style.width = 25 + "vh";
            enemy.style.height = 25 + "vh";
            break;
    }
    enemyHealthUpdate();

}

function enemyDamage() {
    switch (spellChoice) {
        case 1: // Slash
            enemyHp = enemyHp - 10; // change number for different damage
            break;
        case 2: // Lightning
            enemyHp = enemyHp - 20;
            break;
        case 3: // Ice
            enemyHp = enemyHp - 25;
            break;
        case 4: // Ground
            enemyHp = enemyHp - 40;
            break;
    }

    enemyDeath();
  enemyHealthUpdate(); // updates the enemyHp

}

function enemyHealthUpdate() {
    document.getElementById("eHp").innerHTML = enemyHp;
}

function enemyDeath() { // TODO add more things that should happen
        if (enemyHp <= 0) {
            enemyHp = 0; // set to 0 so it will enver show negative Hp
            whichEnemy(); // new enemy
            clearInterval()
        }
}

function enemyAttack() {
    console.log("TEST ATTACK");
    enemyCasts();
}
