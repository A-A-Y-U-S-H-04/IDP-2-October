
let gears = [];
let bg = ('red')
//gears
const NUMBER_OF_GEARS = 30;
//NUMBER OF GEARS
function setup() {
	createCanvas(windowWidth, windowHeight);
	
	// gears.push({
	// 	x:width/2,
	// 	y:height/2,
	// 	theta: random(2*PI),
	// });
	for( let i = 0; i < NUMBER_OF_GEARS; i++ ) {
    
		gears.push({
      //define tx as a random
			tx:random(100), 
       //define ty as a random
			ty:random(100),
       //define dt as a specific number
			dt:0.015,
      //theta random
			theta: random(2*PI),
      //use random to make colors different everytime
			c: color(random(265),random(265),random(265),300),
    });
	} 
}




function drawGear(gear) {
	noStroke();
	// fill(255, 255, 255, 100);
	fill(gear.c);
//push pop function
	push();
//move the circle according to the map of the gear
	translate(map(noise(gear.tx),0,0.95,0,width),map(noise(gear.ty),0,0.95,0,height));
  //use noise to make it move
  //rotate the updated gear
	rotate(gear.theta);
  //loop over the circle rotation
	for (let i = 0; i < 10; i++) {
		ellipse(50, 0, 25, 100);
		rotate(PI/5);
	}
  // push pop function
	pop();
}

 
function draw() {
	background(255,0,0,10);
	noStroke();
	for( let gear of gears ) {
		drawGear(gear);
    //redo position of gear and update
		gear.theta += random(-1.0,1.0);
		gear.tx += gear.dt;
		gear.ty += gear.dt;
	}


}