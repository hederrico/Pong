class Ball {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.yspeed = random(-5, 5);
    this.xspeed = random(-5, 5);
    this.radius = 10;
  }

  update(bars){
    this.x += this.xspeed;
    this.y += this.yspeed;

    if ((this.y <= 0) || (this.y >= height)) {
      this.yspeed *= -1.05;
    }

    if ((this.x <= 0)) {

      bars[1].score += 1;
      this.x = width / 2;
      this.y = height / 2;
      this.yspeed = random(-5, 5);
      this.xspeed = random(-5, 5);

    } else if ((this.x >= width)) {

      bars[0].score += 1;
      this.x = width / 2;
      this.y = height / 2;
      this.yspeed = random(-5, 5);
      this.xspeed = random(-5, 5);

    }
  }

  draw(){
    fill(255);
    ellipseMode(CENTER);
    ellipse(this.x,this.y, this.radius);
  }


  colision(bars){
    for (var i = 0; i < bars.length; i++) {
      if ((abs(this.x - bars[i].x) < this.radius) && (abs(this.y - bars[i].y) < (bars[i].h / 2))) {
        this.xspeed *= -1.10;
      }
    }
  }


}
