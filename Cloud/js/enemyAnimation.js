// animation for enemy movement
let ident = null;
let position = 20;
let enemyInterval = 1000; // how often enemy attacks
let enemyDps;

function startOfAttacks() {
  enemyDps = setInterval(enemyCasts, enemyInterval)
}


function enemyCasts() {

  let enemyMovement = document.getElementById("enemyAttack");
  // Debug console.log("TEST 4")
  clearInterval(enemyDps);
  ident = setInterval(movement, 10);

  function movement() {

    enemyMovement.style.visibility = "visible";
    if (position >= 70) {
      // Debug console.log("TEST END")
      position = 20
      clearInterval(ident);
      startOfAttacks();
      playerHealth(); // player damage
    } else {
      position++;
      enemyMovement.style.top = position + 'vh';
      enemyMovement.style.left = position - 'vw';// % for left or right enemyAttack
      // Debug console.log("TEST " + position);
    }
  }
}
