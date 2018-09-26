function setup(){
    var canvas = createCanvas(500, 500);
    canvas.parent("canvas");
    frameRate(30);
    background(255);
    
    
}

var x = 0;
var y = 500;


    function draw(){
        
        background (255);
        noStroke();
        
        var angle = (sin(frameCount)+1)/2 * PI/6;
        
        var angleX = (sin(frameCount)+1)/2 * -PI/4;
        
        
        if( x> width  ){
            x = 0 ;
        } else {
            x = x + 8; 
            y = y - 8; 
        }
        x = x + 1; 
      
        if(y < 0){
            y = 500;
        } else {
            y = y -1; 
        }
        
        fill(255,200,0);
        
        arc(x,50,100,100, angle, -angle);
        arc(y,200,100,100, -angleX, angle);
        
        
    }