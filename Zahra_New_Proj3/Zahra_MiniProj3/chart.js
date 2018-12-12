var arrayStrings;
var countries = [];

function preload() {
	arrayStrings = loadStrings("ContGDP.csv");

}

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	frameRate(30);

	print("hello world,life,afternoon".split(","));

	for (var i = 1; i < arrayStrings.length; i++) {
		var line = arrayStrings[i];
		var arr = line.split(",");
		var name = arr[0];
		//var yearx = arr[j];
		var arrayGrowths = [];
		//float(yearx(arr[j]);

		for (var j = 1; j < arr.legnth; j++) {
			var value = arr[j];
			var year = j + 1999;
			arrayGrowths[year] = arr[j];

		}


		var country = new Country(name, arrayGrowths);
		countries.push(country);






		//print(country + " " + growth);


	}


}


function draw() {
	
	//var x = 50; 
	//var y = 50;
  
	//fill(255,0,100);
//	Stroke(80); 
	
	//for( var a = 1; a<arrayStrings; a++){
	//line(x,y,x+a,y);
	//}
	
	for (var x = 70; x < arrayStrings; x += 300) {
		for (var y = 100; y <= arrayStrings; y += 350) {
			
			push();
			
		//	translate(x, y);
			
			drawCountry(50, 50);
			
			countries[i].show();
			
			pop();


	
	
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);

}

function drawCountry(){
	
	
	var x = 10; 
	var y = 50;
	
	fill(255,0,100);
	
	
	for (var y = 50; y<50; y++){
	for( var a = 1; a<arrayGrowth; a++){
		loop();
		line(x,y,x+a,y);
		print(Country);
	}
	}
	
	
}

class Country {

	constructor(name, arrayGrowths) {
		this.name = name;
		this.arrayGrowths = arrayGrowths;


	}

	/*
		values[2000] = arr[1];
		values[2001] = arr[2];
		values[2002] = arr[3];
		values[2003] = arr[4];
		values[2004] = arr[5];
		values[2005] = arr[6];
		values[2006] = arr[7];
		values[2007] = arr[8];
		values[2008] = arr[9];
		values[2009] = arr[10];
		values[2010] = arr[11];
		values[2011] = arr[12];
		values[2012] = arr[13];
		values[2013] = arr[14];
		values[2014] = arr[15];
		values[2015] = arr[16];
		values[2016] = arr[17];
		values[2017] = arr[18];


	}*/

}
