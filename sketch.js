var button
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  button=createButton("click to Blow")
  button.position(width/2,height-180)
  button.class("blowButton")
  button.mousePressed(blow)
}

function draw() {
  background(255,255,255); 
  Ball.show()
  Blower.show() 
  Blowermouth.show()
  drawSprites();
}
function blow(){
  Matter.Body.applyForce(ball.Body,{x:0,y:0},{x:0,y:0.05})
}