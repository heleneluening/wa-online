let enemyHp;
let enemyDamage;
let level = 0;
const vh = (document.body.clientHeight / 100);


function whichEnemy() {

  let enemy = document.querySelector(".myEnemy"); //TODO change the things that should happen
  let enemyChoice = Math.floor(Math.random() * 3) + 1;

  switch (enemyChoice) { //TODO change it more diffrent enemies
    case 1:
      enemyHp = 100;
      enemy.style.borderColor = "transparent transparent #33ff00 transparent";
      enemyInterval = 1000; // TODO balance the attack speed
      enemyDamage = 10
      break;
    case 2:
      enemyHp = 150;
      enemy.style.borderColor = "transparent transparent #ffffff transparent";
      enemyInterval = 5000;
      enemyDamage = 10;
      break;
    case 3:
      enemyHp = 200;
      enemy.style.borderColor = "transparent transparent #940909 transparent";
      enemyInterval = 1000;
      enemyDamage = 25;
      break;
  } // which enemy spawns
  enemyHealthUpdate();

}

function enemyTakesDamage() {
  switch (spellChoice) {
    case "Slash": // Slash
      enemyHp = enemyHp - 10; // change number for different damage
      break;
    case "Lightning": // Lightning
      enemyHp = enemyHp - 20;
      break;
    case "Ice": // Ice
      enemyHp = enemyHp - 25;
      break;
    case "Ground": // Ground
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
    for(let i = Math.round(Math.random() * 12); i > 0; i--)
      alert("Das Spiel ist vorbei!!! Noch " + i + " mal klicken zum Weiterspielen")
    enemyHp = 0; // set to 0 so it will enver show negative Hp
    level++; // +1 when enemy killed
    whichEnemy(); // new enemy
    clearInterval()
  }
}

function enemyAttack() {
  console.log("TEST ATTACK");
  enemyCasts();
}
