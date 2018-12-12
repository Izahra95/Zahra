var xoff = 0.0;
var xincrement = 0.01;
//var roff = 5.5;
//var r = rotate(PI / 3);
let angle = 0;

function setup() {
	var canvas = createCanvas(2000, 2000);
	canvas.parent("canvas");
	noiseSeed(99);
	//background(0);
	//noStroke();
}

function draw() {
	//translate(mouseX,mouseY);

	//translate(50,50);


	//console.log('hiii')

	var x = 0;
	var y = 100;


	randomSeed(22);
	for (var x = 70; x < 2000; x += 300) {
		for (var y = 100; y <= 2000; y += 350) {
			//	for (var x =>70; x<2000; x*r){

			//	roff = roff + random ( 1, 5);


			//	rotate(45);
			push();
			
			translate(x, y);
			rotate(random(TWO_PI));

			movingLine(-150, -150);
			
			pop();


			//}

		}

	//	push();
	//	translate(200, 200);
	//	rotate(angle);
	//	angle = angle + 1 *
		//pop();



	}



	//rotate(angle);
	//angle = angle + 1


	background(255, random(10,50));

}

function movingLine(x, y) {


	xoff = xoff + 3;
	var n = noise(xoff) * 150;
	//console.log('drawing from ,',x,y,n)
	//line(n, x, n, y);
	line(x + n, y, x + n, y + 300);

	//	line x1 y1 x2 y2

}
