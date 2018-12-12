function setup() {

    var canvas = createCanvas(500, 500);
    canvas.parent("canvas");
    frameRate(30);
    background(255);

}


function draw() {


    fill(100, 0, 100);
    rect(50, 50, width / 2, height / 2);

    fill(0);

    var diam = (sin(frameCount / 5) + 1) * 100;





    var d = dist(175, 175, mouseX, mouseY);

    if (d <= diam / 2) {
        fill(255, 0, 0);
    } else {
        fill(0, 0, 255);
    }

    ellipse(175, 175, diam, diam);
}


//  var d = int(dist(175, 175, mouseX, mouseY));

//  if ( var d => diam){
//      fill(255,0,0); 
// } else
//     
//   fill (0,0,255); 

