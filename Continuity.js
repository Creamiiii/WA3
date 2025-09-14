class Continuity {
  constructor() {
    // Create sliders
    this.A1_SLIDER = createSlider(10, 100, 55, 1);
    this.A1_SLIDER.position(50, 500);
    this.A2_SLIDER = createSlider(10, 100, 55, 1);
    this.A2_SLIDER.position(50, 550);
    this.v1_SLIDER = createSlider(1, 10, 5.5, 0.1);
    this.v1_SLIDER.position(350, 500);
    this.v2_SLIDER = createSlider(1, 10, 5.5, 0.1);
    this.v2_SLIDER.position(350, 550);

    this.A1 = this.A1_SLIDER.value(); //Set each variable to value of slider
    this.A2 = this.A2_SLIDER.value();
    this.v1 = this.v1_SLIDER.value();
    this.v2 = this.v2_SLIDER.value();

    this.count = 0;
    this.dVariable = "v2";
  }
  iterate() {
    background(255);

    // Show sliders
    this.A1_SLIDER.show();
    this.A2_SLIDER.show();
    this.v1_SLIDER.show();
    this.v2_SLIDER.show();

    let A1_temp = this.A1; //Set an initial value for each variable
    let A2_temp = this.A2;
    let v1_temp = this.v1;
    let v2_temp = this.v2;

    this.A1 = this.A1_SLIDER.value(); //Set each variable to value of slider
    this.A2 = this.A2_SLIDER.value();
    this.v1 = this.v1_SLIDER.value();
    this.v2 = this.v2_SLIDER.value();

    if (this.dVariable === "A1") {
      //Calculate the variables
      this.A1 = Math.round((100 * this.A2 * this.v2) / this.v1) / 100;
    }
    if (this.dVariable === "A2") {
      this.A2 = Math.round((100 * this.A1 * this.v1) / this.v2) / 100;
    }
    if (this.dVariable === "v1") {
      this.v1 = Math.round((100 * this.A2 * this.v2) / this.A1) / 100;
    }
    if (this.dVariable === "v2") {
      this.v2 = Math.round((100 * this.A1 * this.v1) / this.A2) / 100;
    }

    if (
      //Check if any variables are past intended range, if so, reset to initial values
      this.A1 > 100 ||
      this.A1 < 10 ||
      this.A2 > 100 ||
      this.A2 < 10 ||
      this.v1 > 10 ||
      this.v1 < 1 ||
      this.v2 > 10 ||
      this.v2 < 1
    ) {
      this.A1 = A1_temp;
      this.A2 = A2_temp;
      this.v1 = v1_temp;
      this.v2 = v2_temp;
      fill(0);
      textAlign(CENTER);
      text("Variable exceeded limit!", 400, 580);
    }

    this.A1_SLIDER.value(this.A1); //Set slider to values
    this.A2_SLIDER.value(this.A2);
    this.v1_SLIDER.value(this.v1);
    this.v2_SLIDER.value(this.v2);

    this.count++; //Draw the particles
    if (this.count % 30 === 0) {
      particles1[particles1.length] = new Particle1();
      this.count -= 30;
    }
  }
  display() {
    textAlign(CENTER, CENTER); //Boxes for dependent variable selector
    fill(255);
    rect(600, 500, 40, 40);
    rect(600, 540, 40, 40);
    rect(640, 500, 40, 40);
    rect(640, 540, 40, 40);

    fill(0); //Text for dependent variable selector
    text("Dependent", 720, 520);
    text("Variable", 720, 540);
    text("Selector", 720, 560);
    text("A₁", 620, 520);
    text("A₂", 620, 560);
    text("v₁", 660, 520);
    text("v₂", 660, 560);

    text("Continuity Equation", 400, 40); //Headings & sub-headings
    text("A₁v₁ = A₂v₂", 400, 60);
    text(
      "*Note: In this simulator, A (Cross-sectional area of the tube) is perceived",
      400,
      80
    );
    text(
      "to be directly proportionate to h (Height of the tube), as width is assumed constant",
      400,
      100
    );
    text("All units in this simulator are arbituary", 400, 120);

    fill(0, 255, 255, 123);
    if (this.dVariable === "A1") {
      //Calculate the variables
      rect(600, 500, 40, 40);
    }
    if (this.dVariable === "A2") {
      rect(600, 540, 40, 40);
    }
    if (this.dVariable === "v1") {
      rect(640, 500, 40, 40);
    }
    if (this.dVariable === "v2") {
      rect(640, 540, 40, 40);
    }

    textSize(15); //Text for sliders
    textAlign(LEFT, BOTTOM);
    stroke(0);
    fill(0);
    text("A₁:", 25, 520);
    text(this.A1, 225, 520);
    text("A₂:", 25, 570);
    text(this.A2, 225, 570);
    text("v₁:", 325, 520);
    text(this.v1, 525, 520);
    text("v₂:", 325, 570);
    text(this.v2, 525, 570);

    fill(0, 255, 255); // Draw the tube
    rect(100, 300 - this.A1, 200, 2 * this.A1);
    ellipse(100, 300, 20, 2 * this.A1);
    fill(127, 0, 255);
    rect(500, 300 - this.A2, 200, 2 * this.A2);
    ellipse(700, 300, 20, 2 * this.A2);

    stroke(0);
    fill(0);
    textAlign(LEFT, CENTER);
    line(200, 300 - this.A1, 200, 300 + this.A1);
    text("A₁*", 205, 300);
    line(600, 300 - this.A2, 600, 300 + this.A2);
    text("A₂*", 605, 300);
    fill(255);
    bezier(
      300,
      300 - this.A1,
      400,
      300 - this.A1,
      400,
      300 - this.A2,
      500,
      300 - this.A2
    );
    bezier(
      300,
      300 + this.A1,
      400,
      300 + this.A1,
      400,
      300 + this.A2,
      500,
      300 + this.A2
    );

    //Draw particles / delete particles
    for (let index = particles1.length - 1; index > -1; index--) {
      if (particles1[index].x >= 700) {
        particles1.splice(index, 1);
      } else {
        particles1[index].iterate();
      }
    }
  }
  init() {
    // Hide sliders, reset variables and sliders
    this.A1_SLIDER.hide();
    this.A2_SLIDER.hide();
    this.v1_SLIDER.hide();
    this.v2_SLIDER.hide();

    this.A1 = 55;
    this.A2 = 55;
    this.v1 = 5.5;
    this.v2 = 5.5;
    this.A1_SLIDER.value(this.A1);
    this.A2_SLIDER.value(this.A2);
    this.v1_SLIDER.value(this.v1);
    this.v2_SLIDER.value(this.v2);
    this.dVariable = "v2";
    this.count = 0;
  }
}
