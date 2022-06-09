// animation for enemy movement
let ident = null;
let position = 5;


function enemyWalks() {

    let enemyMovement;
    enemyMovement = document.getElementById("enemyMovement");
    console.log("TEST 4")
    ident = setInterval(movement, 100);

    function movement() {

        enemyMovement.style.visibility = "visible";
        if (position >= 70) {
            console.log("TEST END")
            position = 5;
            clearInterval(ident);
        } else {
            position++;
            enemyMovement.style.top = position + 'vh';
            enemyMovement.style.left = position - 'vw';// % for left or right enemyMovement
            console.log("TEST " + position);

        }
    }
}


/* function goLeft() {
     movement = document.getElementById("enemyMovement");
     if (positionLeft >= 90) {
          console.log("TEST Start")
          clearInterval(ident);
          position = 5;

      } else {
          positionLeft++;
          movement.style.top = positionLeft + '%';
         movement.style.right = positionLeft + '%';

         console.log("Work " + positionLeft);
      }
}*/