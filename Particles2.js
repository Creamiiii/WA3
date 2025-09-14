class Particle2 {
  //For Bernoulli's
  constructor() {
    this.x = 100;
    this.y = 300 - HARD_MODE.h1;
  }
  iterate() {
    this.x =
      this.x <= 400 ? this.x + HARD_MODE.v1 / 5 : this.x + HARD_MODE.v2 / 5;
    if (this.x > 300 && this.x < 500) {
      this.y =
        300 -
        HARD_MODE.h1 +
        ((HARD_MODE.h1 - HARD_MODE.h2) * (this.x - 300)) / 200;
    } else if (this.x <= 300) {
      this.y = 300 - HARD_MODE.h1;
    } else {
      this.y = 300 - HARD_MODE.h2;
    }
    fill(0);
    ellipse(this.x, this.y, 2, 2);
  }
}
