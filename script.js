function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(200);
  
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    fill(255, 0, 0)
  }
  else { 
    // otherwise do this:
    fill(0, 255, 0)
  }
  ellipse(width/2, height/2, 100, 100);
}
