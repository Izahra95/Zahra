function setup() {

    var canvas = createCanvas(500, 500);
    canvas.parent("canvas");
    //frameRate(30);
    background(255);

}



function draw() {

    var x = 0;
    var y = 10;
    var radiusX = 5;
    var radiusY = 5;

    for (var x = 10; x < 500; x += 10)
        for (var y = 10; y <= 500; y += 10) {
            for (var radiusX = 5; x < 250 < y; radiusX += 10) {
                for (var radiusY = 5; x > 250 > y; radiusY -= 10) {

                    ellipse(x, y, radiusX, radiusY);

				}
                    //  for (var radiusX = 5; x < 250, y < 250 ; radiusX += 5) {
                    //      for (var radiusY = 5; x < 250, 250 < y; radiusY -= 5) {
                    //         for (var radiusX = 5; x < 250 < y; radiusX += 5) {
                    //            for (var radiusY = 5; x > 250 > y; radiusY -= 5) {

                    //  if (onmouseover = true){
                    //     radius = radius + 10;       
                    // }else{
                    //      radius = 5; 
                    //  }
                    // if (x > width) {
                    //        x = 10;
                    //       y = y - 10;

                    //   } else {
                    //       x = x;
                    //       y = y;
                    //  }


                    //  var y = 0; 
                    //for( var y =10; y <= 500; y+=10){
                    //   ellipse (10,y,5,5);
					
                
                for (var radius = 10; x < 250, y < 250; radius += 5) {
                    ellipse(x, y, radius, radius);
                }
            }
			
		}
}
