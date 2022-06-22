let enemyHp; // life of enemy
let enemyDamage; // damage of enemy
let level = 0; // level stage
let vh = 42
window.addEventListener("load", () => {
  vh = (document.body.clientHeight / 100);
})
let enemyLib = [];

/*
class enemy {
  constructor(enemyHP, enemyDamage, enemyColor, enemyInterval) {
    this.enemyHP = enemyHP;
    this.enemyDamage = enemyDamage;
    this.enemyColor = "transparent transparent " + enemyColor + " transparent";
    this.enemyInterval = enemyInterval;
    enemyLib.push(this);
  }
}

 */

/* let enemiesJson = toString([{"hp": 100, "damage": 10, "color": "green", "interval": 10000}, //TODO IS not needed
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
  enemyLib = JSON.parse(enemiesJson);
})

function whichEnemy(level) {

  if (level < enemyLib.length) {
    let enemy = document.querySelector(".myEnemy"); //

    enemyHp = enemyLib[level].hp;
    enemyDamage = enemyLib[level].damage;
    enemy.style.borderColor = enemyLib[level].color;
    enemyInterval = enemyLib[level].interval;

    enemyHealthUpdate();
  } else { // TODO is this needed?
    for (let i = Math.round(Math.random() * 12); i > 0; i--)
      alert("Das Spiel ist vorbei!!! Noch " + i + " mal klicken zum Weiterspielen")
    enemyHp = 0;
    level = 0;
    whichEnemy();
    clearInterval()
  }

}

function enemyTakesDamage() { //TODO program resistences and change the damage
  switch (spellChoice) {
    case "Slash":
      enemyHp = enemyHp - 10;
      break;
    case "Lightning":
      enemyHp = enemyHp - 20;
      break;
    case "Ice":
      enemyHp = enemyHp - 25;
      break;
    case "Ground":
      enemyHp = enemyHp - 40;
      break;
  }

  enemyDeath();
  enemyHealthUpdate();

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




