var x = 0;
var y = 50;

function setup() {
    createCanvas(400, 400);
    textSize(64);
    textAlign(CENTER);
    fill(255);
    background(0);
}

function keyPressed() {
    // x += textSize();
    x += 40;
}

function draw() {


    if (x > width) {

        x = 10;
        y += 60;
    }




    text(key, x, y);





}
