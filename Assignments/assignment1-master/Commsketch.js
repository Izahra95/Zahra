
var particleSystem = [];

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    frameRate(30);
    colorMode(HSB, 360, 100, 100, 100); //setting up the space in which the action of creating the ellipses will take place

}


function draw(){
    background(0);
    blendMode(SCREEN);
    
    for(var i=particleSystem.length-1; i>=0; i--){ // speed and variance in which the ellipses will move 
        var p = particleSystem[i];
        if(p.areYouDeadYet()){
            particleSystem.splice(i, 1);
        }else{
            p.update();
            p.draw();
            
        }  
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);

}


var Particle = function(position, velocity, hue){ // setting up the direction, speed and frequency of the particles
    this.position = position.copy(); 
    this.velocity = velocity.copy();
    this.size = 10;
    this.lifeSpan = random(20, 100);
    this.hue = random(hue-15, hue+15); //setting colors, making the hue change after the click
    
    this.update = function(){
        this.lifeSpan--; //setting up after how long the particles will disappear 
        this.position.add(velocity);
        
    }  
    
    this.draw = function(){
        noStroke();
        fill(this.hue, 100, 100);
        ellipse(this.position.x, 
                this.position.y,
                this.size,
                this.size);
        
    }
    this.areYouDeadYet = function(){ //not sure
        return this.lifeSpan <= 0;
    }
}

function createMightyParticles(){
    var hue = random(20, 300); //setting random color, movement and direction of each particle to be different.
    for(var i=0; i<200; i++){
        var pos = createVector(mouseX, mouseY);
        var vel = createVector(0,1);
        vel.rotate(random(0, TWO_PI));
        vel.mult(random(1, 10));
        
        var newBorn = new Particle(pos, vel, hue);
        particleSystem.push(newBorn);
        
    }
    
}

function mouseClicked(){
    createMightyParticles();
}