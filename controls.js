const points = document.getElementsByClassName("point");
let mouseIsDown = false;

function colorChange(element) { //if mouseIsDown is true add new colour
    if (mouseIsDown) {
        element.classList.add("pointColour")
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
}

function pointClicked(element) { // add colour if you click on a point
    mouseIsDown = true;
    colorChange(element);
}
