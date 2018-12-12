function setup(){
    var canvas = createCanvas(500, 500);
    canvas.parent("canvas");
    frameRate(30);
    background(255);
    
    
}

var x = 0;
var y = 0;


    function draw(){
        
        background (255);
        noStroke();
        
        var angle = (sin(frameCount)+1)/2 * PI/6; 
        
        var angleX = PI - ((sin(frameCount)+2.5)/3 * PI/6); 


//1 over, reverses arc angle^^
        
        
        if( x> width  ){ //Pacman Top moving right
            x = 0 ;
        } else {
            x = x + 2; 
            y = y - 2; 
        }
        x = x + 1; 
      
        if(y < 0){ //Pacman Bottom moving left
            y = 500;
        } else {
            y = y -1; 
        }
        
        fill(255,200,0);
        
        arc(x,50,100,100, angle, -angle); //Pacman Top
        
        arc(y,200,100,100, -angleX, angleX); //Pacman Bottom
        
        
    }