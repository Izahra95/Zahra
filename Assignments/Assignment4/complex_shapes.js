function setup() {

    var canvas = createCanvas(500, 500);
    canvas.parent("canvas");
    frameRate(30);
    background(255);

}



function draw() {

    var numberofSides = 5;

    var angle = (sin(frameCount) + 1) / 2 * PI / 6;


    fill(255, 100, 200);

    beginShape();
    var radiusA = 100;
    var radiusB = 50;

    var angInc = TWO_PI / numberofSides;

    for (var a = 0; a < numberofSides; a++) {

        var x = radiusA * cos(angInc * a) + width / 2;
        var y = radiusA * sin(angInc * a) + height / 2;

        vertex(x, y);

        var x = radiusB * cos(angInc * a + angInc / 2) + width / 2;
        var y = radiusB * sin(angInc * a + angInc / 2) + height / 2;
        vertex(x, y);

    }

    endShape(CLOSE);

        





}
