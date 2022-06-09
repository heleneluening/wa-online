// animation for enemy movement

let bossHP = 0;
let bossDPS = 0;
let ident = null;
let position = 5;
let positionLeft = 45;

function myBoss() {

    let movement;
    movement = document.getElementById("enemyMovement");
    console.log("TEST 4")
    ident = setInterval(walk, 100);

    function walk() { // somehow it stops working after colliding with a diffrent div. MAybe position override?
        // TODO fix problem then try to programm it changing it direction

        if (position >= 45) {
            console.log("TEST END")
            //goLeft();
        } else {
            position++;
            movement.style.top = position + '%';
            movement.style.left = position + '%';
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