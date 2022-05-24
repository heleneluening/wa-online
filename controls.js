const points = document.getElementsByClassName("point");
let mouseIsDown = false;
const symbol = []; //symbol array
let monsterTyp = Math.floor(Math.random() * 5) + 1; //random monsterTyp between 1-5
let playerHp = 20;
let damageDealer = setInterval(playerLoseHp, 10000); //10000 = 10 Sekunden
let dps = 0;


//IMPORTANT MAIN FUNCTIONS: colorChange, castMagic, and death

function colorChange(element) { //if mouseIsDown is true add new colour
    if (mouseIsDown) {
        element.classList.add("pointColour"); //changes colour
        symbol.push(element.id);
        castMagic() // for magic to deal damage

        console.log(symbol);//test if the symbol is drawn correct
    }
} //if mouseIsDown is true it adds new colour, mouseDown set mouseIsDown true

function mouseDown() { //if mouse down mouseIsDown becomes true and triggers also colorChange
    mouseIsDown = true; // changes mouseIsDown to true so it will trigger the if in colorChange
} //IDE says unused, but it is needed!!!

function mouseUp() { // mouseIsDown becomes false and it removes the added colour
    mouseIsDown = false;
    for (const p of points) {
        p.classList.remove("pointColour"); // removes the colour
    }
    symbol.length = 0;//delete array
}  //mouseIsDown becomes false and it removes the added colour

function pointClicked(element) { //add colour if you click on a point
    mouseIsDown = true;
    colorChange(element);
} //add colour if you click on a point

function enemies() {
    let randomiser = monsterTyp; //random monsterTyp = right now its just the Hp
    console.log(monsterTyp); // check if it works
    //TODO work on monsters
    switch (randomiser) {
        case 1:
            monsterTyp = 15; // How much Hp the enemy has
            dps = 10; // How much damage the enemy deals
            break; // break
        case 2:
            monsterTyp = 25
            dps = 8;
            break;
        case 3:
            monsterTyp = 30
            dps = 6;
            break
        case 4:
            monsterTyp = 35
            dps = 4;
            break;
        case 5:
            monsterTyp = 40
            dps = 2;
            break;
    } //randomised the enemy hp

    console.log(monsterTyp); // check if it works
} //which enemie is spawned

function castMagic() { //drawing symbols to cast magic, [0] after symbol means 1 position in the array

    //symbole 6,5,4
    if (symbol.length === 3 && symbol[0].includes("p6") && symbol[1].includes("p5")
        && symbol[2].includes("p4")) {
        monsterTyp = monsterTyp - 1; //1 damage
        console.log(monsterTyp); //monsterTyp check
        symbol.length = 0; //delete the content of symbol array = reset
        monsterDeath(); //if enemys has 0 hp he dies
    }
    //symbole 4,5,6
    if (symbol.length === 3 && symbol[0].includes("p4") && symbol[1].includes("p5")
        && symbol[2].includes("p6")) {
        monsterTyp = monsterTyp - 1; //1 damage
        console.log(monsterTyp); //monsterTyp check
        symbol.length = 0; //delete the content of symbol array = reset
        monsterDeath(); //if enemys has 0 hp he dies
    }
    //2,4,5,6,8 Lightning
    if (symbol.length === 5 && symbol[0].includes("p2") && symbol[1].includes("p4")
        && symbol[2].includes("p5") && symbol[3].includes("p6")
        && symbol[4].includes("p8")) {
        console.log("LightningBolt");
        monsterTyp = monsterTyp - 5; //5 damage
        console.log(monsterTyp);//test
        symbol.length = 0;//reset of array
        monsterDeath();
    }
    //1,4,7,8,9,6,3,2 Stone
    if (symbol.length === 8 && symbol[0].includes("p1") && symbol[1].includes("p4")
        && symbol[2].includes("p7") && symbol[3].includes("p8")
        && symbol[4].includes("p9") && symbol[5].includes("p6")
        && symbol[6].includes("p3") && symbol[7].includes("p2")) {
        console.log("Stone sword");
        monsterTyp = monsterTyp - 7; //5 damage
        console.log(monsterTyp);//test
        symbol.length = 0;//reset of array
        monsterDeath();
    }


} //drawing symbols to cast magic, [0] after symbol means 1 position in the array

function monsterDeath() { //function to check if monsterTyp = 0 => death
    if (monsterTyp <= 0) {
        console.log("Killed"); //test
        symbol.length = 0; //reset of array
        endPcDamage(); //stops playerLoseHp so player don't lose life anymore
    }
} //function to check if monsterTyp = 0 => death and no pc damage

function endPcDamage() {
    clearInterval(damageDealer);
} // clears the interval so damage cant be dealt anymore

function playerLoseHp() { // deals -5 damage to player

    playerHp = playerHp - dps;

    console.log(playerHp + " TEST 2"); // test

    if (playerHp <= 0) { // if player hp falls to 0 clear intervall
        endPcDamage()
        console.log("YOU DIED")
    }
} // removes Hp of playerHp and checks if Hp is 0 = DEATH


/*TODO create more Symbols and how much damage each deals
    console.log() = are test functions delete after finish!!!
    the function playerLoseHp and variable playerHp and damageDealer are placeholder
    change monsterTyp so it doesnt stand also for Hp and not just which Typ is selected
    Change damageDealer so it starts with enemy spawn!!!
*/

