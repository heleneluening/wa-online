const points = document.getElementsByClassName("point");
let mouseIsDown = false;
const symbol = []; //symbol array
//IMPORTANT MAIN FUNCTIONS: colorChange, castMagic, and death

function colorChange(element) { //if mouseIsDown is true add new colour
    if (mouseIsDown) {
        element.classList.add("pointColour"); //changes colour
        symbol.push(element.id);
        castMagic() // for magic to deal damage

        console.log(symbol);//test if the symbol is drawn correct
    }
} //if mouseIsDown is true add new colour

function mouseDown() { //if mouse down mouseIsDown becomes true and triggers also colorChange
    mouseIsDown = true;
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

//from here are the symbols amd enemies
//TODO add the following to a new function (onload maybe?)
let monsterHp = Math.floor(Math.random() * 5) + 1; //random monsterHp between 1-5
let randomiser = monsterHp; //random monsterHp
console.log(monsterHp); // check if it works

switch (randomiser) {
    case 1:
        monsterHp = 15;
        break;
    case 2:
        monsterHp = 25
        break;
    case 3:
        monsterHp = 30
        break
    case 4:
        monsterHp = 35
        break;
    case 5:
        monsterHp = 40
        break;
} //randomised the enemy hp

console.log(monsterHp); // check if it works

function castMagic() { //drawing symbols to cast magic, [0] after symbol means 1 position in the array

    //symbole 6,5,4
    if (symbol.length === 3 && symbol[0].includes("p6") && symbol[1].includes("p5")
        && symbol[2].includes("p4")) {
        monsterHp = monsterHp - 1; //1 damage
        console.log(monsterHp); //monsterHp check
        symbol.length = 0; //delete the content of symbol array = reset
        death(); //if enemys has 0 hp he dies
    }
    //symbole 4,5,6
    if (symbol.length === 3 && symbol[0].includes("p4") && symbol[1].includes("p5")
        && symbol[2].includes("p6")) {
        monsterHp = monsterHp - 1; //1 damage
        console.log(monsterHp); //monsterHp check
        symbol.length = 0; //delete the content of symbol array = reset
        death(); //if enemys has 0 hp he dies
    }
    //2,4,5,6,8 Lightning
    if (symbol.length === 5 && symbol[0].includes("p2") && symbol[1].includes("p4")
        && symbol[2].includes("p5") && symbol[3].includes("p6")
        && symbol[4].includes("p8")) {
        console.log("LightningBolt");
        monsterHp = monsterHp - 5; //5 damage
        console.log(monsterHp);//test
        symbol.length = 0;//reset of array
        death();
    }
    //1,4,7,8,9,6,3,2 Stone
    if (symbol.length === 8 && symbol[0].includes("p1") && symbol[1].includes("p4")
        && symbol[2].includes("p7") && symbol[3].includes("p8")
        && symbol[4].includes("p9") && symbol[5].includes("p6")
        && symbol[6].includes("p3") && symbol[7].includes("p2")) {
        console.log("Stone sword");
        monsterHp = monsterHp - 7; //5 damage
        console.log(monsterHp);//test
        symbol.length = 0;//reset of array
        death();
    }


} //drawing symbols to cast magic, [0] after symbol means 1 position in the array

function death() { //function to check if monsterHp = 0 => death
    if (monsterHp <= 0) {
        console.log("Killed");//test
        symbol.length = 0;//reset of array
    }
} //function to check if monsterHp = 0 => death

/*TODO more Enemys, create more Symobls and how much damage each deals
    console.log() = are test functions delete after finish
    */