function setup(){
    var canvas = createCanvas(500, 500);
   // frameRate(30);
    
    canvas.parent("canvas");

}

function draw(){
   //background(255, 0, 0);
    
    //stroke ();
  // fill(0,255,0);
    
   

    //draw a rect
    fill(50,255,100, 80);
    rect(0,0, width-1, height-1);
    
    
    //cirlce
    fill(0,0,100, 80);
    ellipse(width/2, height/2,width, height);
    
    // draw a quad
    fill(255,0,100, 80);
    quad(0, height/2, width/2, 0,  width, height/2, width/2, height);
    //line(0,height, width, height);
    // line(0,height/2, width/2, 0); 
    //line(0,height/2, width/2, 0); 
    
    fill(50,50,200, 80);
    line(0, height, width/2, 0);
    line(width/2, 0, width, height);
    line(0,0,width,height);
    
        
        fill(255,200,0);
        arc(width/2,height/2,50,50, QUARTER_PI, -QUARTER_PI);
    
    


    
}
