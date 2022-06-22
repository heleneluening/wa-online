let enemyHp; // life of enemy
let enemyDamage; // damage of enemy
let enemyType;
let level = 0; // level stage
let vh = 42
window.addEventListener("load", () => {
  vh = (document.body.clientHeight / 100);
})

let enemyLib = [];


/* In case Fetch fails
let enemiesJson = toString([{"hp": 100, "damage": 10, "color": "green", "interval": 10000},
  {"hp": 150, "damage": 10, "color": "white", "interval": 10000},
  {"hp": 200, "damage": 15, "color": "pink", "interval": 5000},
  {"hp": 200, "damage": 20, "color": "purple", "interval": 5000},
  {"hp": 250, "damage": 20, "color": "yellow", "interval": 10000},
  {"hp": 250, "damage": 25, "color": "blue", "interval": 10000},
  {"hp": 300, "damage": 30, "color": "orange", "interval": 5000},
  {"hp": 350, "damage": 30, "color": "red", "interval": 5000}]);

console.log(enemiesJson); */

fetch("js/enemies.json").then(data => data.json()).then(data => {
  enemyLib = data;
  console.log("yay fetch")
}).catch(it => {
  console.log(e);
  // In case fetch fails
  // enemyLib = JSON.parse(enemiesJson);
})

function whichEnemy(level) {

  if (level < enemyLib.length) {
    let enemy = document.querySelector(".myEnemy"); //

    enemyHp = enemyLib[level].hp;
    enemyDamage = enemyLib[level].damage;
    enemy.style.borderColor = "transparent transparent " + enemyLib[level].color + " transparent";
    enemyType = enemyLib[level].type;
    enemyInterval = enemyLib[level].interval;

    enemyHealthUpdate();
  } else { // TODO is this needed?
    alert("Herzlichen Glückwunsch!")
    enemyHp = 0;
    level = 0;
    whichEnemy();
    clearInterval()
  }

}

function enemyTakesDamage() {
  switch (spellChoice) {
    case "Slash":
      enemyHp = enemyHp - 10;
      break;
    case "Lightning":
      enemyHp = enemyHp - lightningSpellDamage();
      break;
    case "Ice":
      enemyHp = enemyHp - iceSpellDamage();
      break;
    case "Ground":
      enemyHp = enemyHp - groundSpellDamage();
      break;
  }

  enemyDeath();
  enemyHealthUpdate();

}

function lightningSpellDamage() {
  switch (enemyType) {
    case "Lightning":
      return 10;
    case "Ice":
      return 40;
    case "Ground":
      return 10;
  }
}
function groundSpellDamage() {
  switch (enemyType) {
    case "Lightning":
      return 40;
    case "Ice":
      return 10;
    case "Ground":
      return 10;
  }
}
function iceSpellDamage() {
  switch (enemyType) {
    case "Lightning":
      return 10;
    case "Ice":
      return 10;
    case "Ground":
      return 40;
  }
}

function enemyHealthUpdate() {
  document.getElementById("eHp").innerHTML = enemyHp;
}

function enemyDeath() { // TODO add more things that should happen
  if (enemyHp <= 0) {
    enemyHp = 0; // set to 0 so it will never show negative Hp
    level++; // +1 when enemy killed
    whichEnemy(level); // new enemy
    clearInterval() // TODO find out why we clear the Interval here
  }
}

function enemyAttack() {
  console.log("TEST ATTACK");
  enemyCasts();
}




