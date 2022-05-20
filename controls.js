const points = document.getElementsByClassName("point");
let mouseIsDown = false;
const symbol = [];


function colorChange(element) { //if mouseIsDown is true add new colour
    if (mouseIsDown) {
        element.classList.add("pointColour"); //changes colour
        symbol.push(element.id);
        cast() // for magic to deal damage

        console.log(symbol);//TODO weg
    }
}

function mouseDown() { //if mouse down mouseIsDown becomes true and triggers also colorChange
    mouseIsDown = true;
}

function mouseUp() { // mouseIsDown becomes false and it removes the added colour
    mouseIsDown = false;
    for (const p of points) {
        p.classList.remove("pointColour");
    }
    symbol.length = 0;//delete symbols
}

function pointClicked(element) { // add colour if you click on a point
    mouseIsDown = true;
    colorChange(element);
}




function cast() {
   if (symbol.length === 2 && symbol.includes("p1") && symbol.includes("p2")){ //symbol.includes("p1")&&symbol.includes("p2")&&!symbol.includes("p3")
        console.log("hit");
        // ["p1","p2"].every(it => symbol.includes(it))
        symbol.length = 0; //prof nachfragen ob es ihn gefällt
    }
}
