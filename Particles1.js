class Particle1 {
  // For continuity
  constructor() {
    this.x = 100;
    this.y = 300;
  }
  iterate() {
    this.x =
      this.x <= 400 ? this.x + EASY_MODE.v1 / 5 : this.x + EASY_MODE.v2 / 5;
    fill(0);
    ellipse(this.x, this.y, 2, 2);
  }
}
