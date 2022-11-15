var widthRect = 70
var heightRect = 70

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");

    background(220);
}

function draw() {
}

function mousePressed() {
    if(mouseButton == LEFT){
        fill(255, 255, 255);
        rectMode(CENTER);
        rect(mouseX, mouseY, widthRect, heightRect);
    }
    if(mouseButton == RIGHT){
        fill(255, 255, 255);
        circle(mouseX, mouseY, 70);
    }
  }
  function keyPressed(){
      if(keyCode == ENTER){
          background(0)
      }
      if(keyCode == UP_ARROW){
          fill(255)
          rect(mouseX, mouseY, widthRect+20, heightRect+40)

      }
      if(keyCode == LEFT_ARROW){
          fill(255)
          triangle(mouseX, mouseY, mouseX+50, mouseY, mouseX+20, mouseY-50)
      }
      if(keyCode == DOWN_ARROW){
          
      }
  }