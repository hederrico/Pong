var balls = new Array();
var numBalls = 1;

var bars = new Array();
var barLocation = 1;


var fontsize = 80;

var scoreTextA;
var scoreTextB;



function setup(){
  createCanvas(1640, 800);


  for (var i = 0; i < numBalls; i++) {
    balls[i] = new Ball();
  }

  for (var i = 0; i < 2; i++) {
    bars[i] = new Bar((width / 2) - barLocation*(width / 2 - 30), height / 2);
    barLocation *= -barLocation;
  }

  textSize(fontsize);
  textAlign(CENTER, CENTER);

  fill(255);

  text(bars[0].score, (width / 2) - 100, 100);
  text(bars[1].score, (width / 2) + 100, 100);

}

function draw(){
  background(0);

  stroke(255);
  line(width/2, 0,width/2,height);

  text(bars[0].score, (width / 2) - 100, 100);
  text(bars[1].score, (width / 2) + 100, 100);

  for (var i = 0; i < numBalls; i++) {
    balls[i].update(bars);
    balls[i].colision(bars);
    balls[i].draw();
  }

  for (var i = 0; i < 2; i++) {
    bars[i].update();
    bars[i].draw();
  }


  if(keyIsDown(87)) {
    bars[0].update(UP_ARROW);
  } else if (keyIsDown(83)) {
    bars[0].update(DOWN_ARROW);
  }

  if(keyIsDown(UP_ARROW)) {
    bars[1].update(UP_ARROW);
  } else if (keyIsDown(DOWN_ARROW)) {
    bars[1].update(DOWN_ARROW);
  }
}
