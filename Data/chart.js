var particleSystem = [];


function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);


	for (var i = 0; i < 150; i++) {
		particleSystem.push(new Particle(random(10, 20)));
	}

	frameRate(10);
}

function draw() {
	background(255);
	translate(width / 2, height / 2);
	collision();

	for (let i = 0; i < particleSystem.length; i++) {
		let p = particleSystem[i];
		p.draw();
	}

		hover();
}



class Particle {
	constructor(radius) {
		this.radius = radius;
		this.pos = createVector(random(-2, 2), random(-2, 2));

	}

	draw() {
		noStroke();
		fill(random(255, 100), random(0, 50), random(255, 100), 200);
		ellipse(this.pos.x,
			this.pos.y,
			this.radius * 2,
			this.radius * 2);
		//ellipse(x, y, this.size, this.size);
	}
}


/*
class Country {

	constructor(name, growth) {
		this.name = name;
		this.growth = growth;
		//this.size = sqrt(growth) * 50;
		this.radius = sqrt(sum) / 4000;

	}
}*/


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

/* function comparator(a, b) {

	if (a.growth > b.growth) {
		return 1;
	}
	if (a.growth < b.growth) {
		return -1;
	}
	return 0;
} */



function collision() {



	for (var i = 0; i < particleSystem.length - 1; i++) {
		for (var j = i + 1; j < particleSystem.length; j++) {
			var pa = particleSystem[i];
			var pb = particleSystem[j];
			var pa = particleSystem[i];
			var pb = particleSystem[j];
			var ab = p5.Vector.sub(pb.pos, pa.pos);
			var distSq = ab.magSq();
			if (distSq <= sq(pa.radius + pb.radius)) {
				var dist = sqrt(distSq);
				var overlap = (pa.radius + pb.radius) - dist;
				ab.div(dist); //ab.normalize();
				ab.mult(overlap * 0.5);
				pb.pos.add(ab);
				ab.mult(-1);
				pa.pos.add(ab);

			}
		}
	}
}

function hover() {

	var pa = particleSystem[i];
	var pb = particleSystem[j];
	var ab = p5.Vector.sub(pb.pos, pa.pos);
	var distSq = ab.magSq();
	if (distSq <= sq(pa.radius + pb.radius)) {
		var dist = sqrt(distSq);
		var overlap = (pa.radius + pb.radius) - dist;
		ab.div(dist); //ab.normalize();
		ab.mult(overlap * 8);
		pb.pos.add(ab);
		ab.mult(-1);
		pa.pos.add(ab);
		
		
		//var a = x1 - x2;
		//var b = y1 - y2;


		//var c = Math.sqrt( a*a + b*b );
		var d = int(dist(x1, y1, x2, y2));


		if (d > this.radius) {

			//if ( (((mouseX) ^ 2) + ((mouseY) ^ 2)) > this.radius) {

			noStroke();
			fill(random(255, 100), random(0, 50), random(255, 100), 200);
			ellipse(this.pos.x,
				this.pos.y,
				this.radius * 8,
				this.radius * 8);
		}
	}
