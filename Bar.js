class Bar {
  constructor(x, y) {
    this.w = 10;
    this.h = 60;

    this.x = x;
    this.y = y;

    this.yspeed = 5;

    this.score = 0;
  }

  update(key){
    if((key === UP_ARROW)){
      this.y -= this.yspeed;
    } else if((key === DOWN_ARROW)){
      this.y += this.yspeed;
    }

    if (this.y - (this.h / 2) <= 0) {
      this.y = this.h / 2;
    } else if (this.y + (this.h / 2) >= height) {
      this.y = height - (this.h / 2);
    }
  }

  draw(){
    fill(255);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
  }

}
