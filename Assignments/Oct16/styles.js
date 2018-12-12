var img;

//function preload() {
//   img = loadImage("bkg.jpg");
//}

function setup() {

    var canvas = createCanvas(800, 800);
    // canvas.parent("canvas");
    //frameRate(30);
    //background(255);


    frameRate(15);

    img = loadImage("1.jpg");

    //  var c = get(800,800);
    //  fill(c);
    // noStroke();
    // rect(25, 25, 200, 200);

    // img = loadImage("bkg.jpg");

    //image(img, 0, 0);

    // img.pixels[i]
    //img.pixels.length
    //img.loadPixels();

}

//var x = 0;
//var y = 200;

function draw() {
    //  print("hello");
    // background(255);
    img.loadPixels();

    var sumR = 0;
    var sumG = 0;
    var sumB = 0;

    var count = img.height + img.width;

    for (var i = 0; i < img.pixels.length; i = i + 4) {

        var r = img.pixels[i];
        var g = img.pixels[i + 1];
        var b = img.pixels[i + 2];

        sumR = sumR + r;
        sumG = sumG + g;
        sumB = sumB + b;

    }

    var avgR = sumR / count;
    var avgG = sumG / count;
    var avgB = sumB / count;


    print(avgR + "," + avgG + "," + avgB);


    image(img, 10, 10);

    //fill(255, 0, 0); 
    fill(avgR, avgG, avgR);
    rect(50, 50, 50, 50);



}
