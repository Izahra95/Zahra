var xoff = 0.0;
var noiseScale = 0.02;

function setup() {
    noiseSeed(99);
    stroke(0, 10);
    var canvas = createCanvas(500, 500);
    canvas.parent("canvas");
    frameRate(60);
    background(255);

}



function draw() {

    
    xoff = xoff + 0.1;
    var n = noise(xoff) * width;
    line(0, n, width, n);

    
    background(204);
    
    beginShape();
    for (var i = 0; i < 500; i += 10) {
        var r = random( 250);
        stroke(r * 2);

        vertex(i, 10 + r);
    }
    
    endShape();
    
    

    for (var i = 0; i < 500; i += 10) {
        var r = random(-50, 50);
        line(i, 450, i, 450 + r);
    }

    for (var x = 0; x < width; x++) {
        var noiseVal = noise((mouseX + x) * noiseScale, mouseY * noiseScale);
        stroke(noiseVal * 255);
        line(x, mouseY + noiseVal * 80, x, height);
    }


}
