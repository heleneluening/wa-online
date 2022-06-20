let enemyHp;
let enemyDamage;
let level = 0;
const vh = (document.body.clientHeight / 100);


const enemyLib = []

class enemy {
  constructor(enemyHP, enemyDamage, enemyColor, enemyInterval) {
    this.enemyHP = enemyHP;
    this.enemyDamage = enemyDamage;
    this.enemyColor = "transparent transparent " + enemyColor + " transparent";
    this.enemyInterval = enemyInterval;
    enemyLib.push(this);
  }
}

fetch("js/enemies.json").then(res => res.json()).then(enemyData => {
  for (const enemyItem of enemyData) {
    new enemy(enemyItem.hp, enemyItem.damage, enemyItem.color, enemyItem.interval)
  }
})

function whichEnemy(level) {

  if (level<=enemyLib.length) {
    let enemy = document.querySelector(".myEnemy"); //TODO change the things that should happen

    enemy.enemyHP = enemyLib[level].enemyHP;
    enemy.enemyDamage = enemyLib[level].enemyDamage;
    enemy.style.borderColor = enemyLib[level].enemyColor;
    enemy.enemyInterval = enemyLib[level].enemyInterval;

    enemyHealthUpdate();
  } else {
    for(let i = Math.round(Math.random() * 12); i > 0; i--)
      alert("Das Spiel ist vorbei!!! Noch " + i + " mal klicken zum Weiterspielen")
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
    enemyHp = 0; // set to 0 so it will enver show negative Hp
    level++; // +1 when enemy killed
    whichEnemy(level); // new enemy
    clearInterval()
  }
}

function enemyAttack() {
  console.log("TEST ATTACK");
  enemyCasts();
}
