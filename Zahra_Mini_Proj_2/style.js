var myFont;

function preload() {
	myFont = loadFont('AvenirNextLTPro-BoldCn.otf');
}

function setup() {

	var canvas = createCanvas(2000, 2000);
	canvas.parent("canvas");
	frameRate(30);
	//loadFont('assets/AvenirNextLTPro-BoldCn.otf', drawText);

}

function draw() {

	background(0);

	let hr = hour();
	let mn = minute();
	let sc = second();

	var x = random(200, 300);
	noStroke();
	textAlign(CENTER, CENTER);
	textFont(myFont);

	fill(random(0, 255), random(0, 200), random(50, 255));
	textSize(x);

	//need the nf function
	//concatenate the string
	//then convert the string to an array of characters
	//then go through all the characters and draw them
	var string = nf(hr, 2, 0) + ':' + nf(mn, 2, 0) + ':' + nf(sc, 2, 0);
	//text(string, 1000, 1000);

	var characters = string.split("");
	//scale(10);
	//scale(2, 4);

	print(characters);

	for (var i = 0; i < string.length; i++) {
		var c = characters[i];
		translate(0 + 100, 0);
		text(c, 500, 1000);
		text(c, 500, 1000);
		text(c, 500, 1000);

	}

	//fill(random(0, 180), random(0, 255), random(180, 255),80);
	//textSize(x);
	//text(hr + ':' + mn + ':' + sc, 1000,1000);

	//fill(random(50, 100), random(180, 255), random(0, 255),80);
	//textSize(x);
	//text(hr + ':' + mn + ':' + sc, 1000,1000);


}

/*function drawText(font) {
	fill('#ED225D');
	textFont(font, 36);
	text('p5*js', 10, 50);

}*/
