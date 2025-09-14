class Bernoulli {
  constructor() {
    // Create sliders
    this.P1_SLIDER = createSlider(0, 50, 25, 0.2);
    this.P1_SLIDER.position(50, 500);
    this.P2_SLIDER = createSlider(0, 50, 25, 0.2);
    this.P2_SLIDER.position(50, 550);
    this.v1_SLIDER = createSlider(1, 10, 5.5, 0.1);
    this.v1_SLIDER.position(350, 500);
    this.v2_SLIDER = createSlider(1, 10, 5.5, 0.1);
    this.v2_SLIDER.position(350, 550);
    this.h1_SLIDER = createSlider(0, 15, 0, 1);
    this.h1_SLIDER.position(350, 400);
    this.h2_SLIDER = createSlider(0, 15, 0, 1);
    this.h2_SLIDER.position(350, 450);
    this.rho_SLIDER = createSlider(0.5, 1.5, 1, 0.1);
    this.rho_SLIDER.position(50, 400);
    this.g_SLIDER = createSlider(0.5, 5, 2.75, 0.05);
    this.g_SLIDER.position(50, 450);

    // Initialize variables
    this.P1 = this.P1_SLIDER.value();
    this.P2 = this.P2_SLIDER.value();
    this.v1 = this.v1_SLIDER.value();
    this.v2 = this.v2_SLIDER.value();
    this.h1 = this.h1_SLIDER.value();
    this.h2 = this.h2_SLIDER.value();
    this.rho = this.rho_SLIDER.value();
    this.g = this.g_SLIDER.value();
    this.A1 = 30;
    this.A2 = 30;

    this.dVariable = "v2";
    this.count = 0;
  }

  iterate() {
    background(255);

    this.P1_SLIDER.show();
    this.P2_SLIDER.show();
    this.v1_SLIDER.show();
    this.v2_SLIDER.show();
    this.h1_SLIDER.show();
    this.h2_SLIDER.show();
    this.rho_SLIDER.show();
    this.g_SLIDER.show();

    // Temporary store
    let P1_temp = this.P1;
    let P2_temp = this.P2;
    let v1_temp = this.v1;
    let v2_temp = this.v2;
    let h1_temp = this.h1;
    let h2_temp = this.h2;
    let rho_temp = this.rho;
    let g_temp = this.g;
    let A2_temp = this.A2;

    // Update from sliders
    this.P1 = this.P1_SLIDER.value();
    this.P2 = this.P2_SLIDER.value();
    this.v1 = this.v1_SLIDER.value();
    this.v2 = this.v2_SLIDER.value();
    this.h1 = this.h1_SLIDER.value();
    this.h2 = this.h2_SLIDER.value();
    this.rho = this.rho_SLIDER.value();
    this.g = this.g_SLIDER.value();

    // Calculate based on dependent variable
    if (this.dVariable === "P1") {
      this.P1 =
        Math.round(
          100 *
            (this.P2 +
              0.5 * this.rho * this.v2 ** 2 +
              this.h2 * this.rho * this.g -
              0.5 * this.rho * this.v1 ** 2 -
              this.h1 * this.rho * this.g)
        ) / 100;
    }
    if (this.dVariable === "P2") {
      this.P2 =
        Math.round(
          100 *
            (this.P1 +
              0.5 * this.rho * this.v1 ** 2 +
              this.h1 * this.rho * this.g -
              0.5 * this.rho * this.v2 ** 2 -
              this.h2 * this.rho * this.g)
        ) / 100;
    }
    if (this.dVariable === "v1") {
      this.v1 =
        Math.round(
          100 *
            sqrt(
              (2 *
                (this.P2 +
                  0.5 * this.rho * this.v2 ** 2 +
                  this.h2 * this.rho * this.g -
                  this.P1 -
                  this.h1 * this.rho * this.g)) /
                this.rho
            )
        ) / 100;
    }
    if (this.dVariable === "v2") {
      this.v2 =
        Math.round(
          100 *
            sqrt(
              (2 *
                (this.P1 +
                  0.5 * this.rho * this.v1 ** 2 +
                  this.h1 * this.rho * this.g -
                  this.P2 -
                  this.h2 * this.rho * this.g)) /
                this.rho
            )
        ) / 100;
    }
    if (this.dVariable === "h1") {
      this.h1 = Math.round(
        (this.P2 +
          0.5 * this.rho * this.v2 ** 2 +
          this.rho * this.g * this.h2 -
          this.P1 -
          0.5 * this.rho * this.v1 ** 2) /
          this.rho /
          this.g
      );
    }
    if (this.dVariable === "h2") {
      this.h2 = Math.round(
        (this.P1 +
          0.5 * this.rho * this.v1 ** 2 +
          this.rho * this.g * this.h1 -
          this.P2 -
          0.5 * this.rho * this.v2 ** 2) /
          this.rho /
          this.g
      );
    }

    this.A2 = Math.round((this.A1 * this.v1) / this.v2);

    // Range checking
    if (
      this.P1 > 100 ||
      this.P1 < 10 ||
      this.P2 > 100 ||
      this.P2 < 10 ||
      this.v1 > 10 ||
      this.v1 < 1 ||
      isNaN(this.v1) ||
      this.v2 > 10 ||
      this.v2 < 1 ||
      isNaN(this.v2) ||
      this.h1 < 0 ||
      this.h1 > 30 ||
      this.h2 < 0 ||
      this.h2 > 30 ||
      this.rho < 0.5 ||
      this.rho > 1.5 ||
      this.g < 1 ||
      this.g > 3 ||
      this.A2 > 100
    ) {
      this.P1 = P1_temp;
      this.P2 = P2_temp;
      this.v1 = v1_temp;
      this.v2 = v2_temp;
      this.h1 = h1_temp;
      this.h2 = h2_temp;
      this.rho = rho_temp;
      this.g = g_temp;
      this.A2 = A2_temp;
      fill(0);
      text("Variable(s) exceeded limit!", 400, 580);
    }

    // Update sliders
    this.P1_SLIDER.value(this.P1);
    this.P2_SLIDER.value(this.P2);
    this.v1_SLIDER.value(this.v1);
    this.v2_SLIDER.value(this.v2);
    this.h1_SLIDER.value(this.h1);
    this.h2_SLIDER.value(this.h2);
    this.rho_SLIDER.value(this.rho);
    this.g_SLIDER.value(this.g);

    // Particle system
    this.count++;
    if (this.count % 30 === 0) {
      particles2[particles2.length] = new Particle2();
      this.count -= 30;
    }
  }

  display() {
    // UI boxes
    textAlign(CENTER, CENTER);
    fill(255);
    rect(600, 460, 40, 40);
    rect(640, 460, 40, 40);
    rect(600, 500, 40, 40);
    rect(600, 540, 40, 40);
    rect(640, 500, 40, 40);
    rect(640, 540, 40, 40);

    // Labels
    fill(0);
    text("Dependent", 720, 470);
    text("Variable", 720, 490);
    text("Selector", 720, 510);
    text("A₁ = " + this.A1, 720, 540);
    text("A₂ = " + this.A2, 720, 560);
    text("P₁", 620, 520);
    text("P₂", 620, 560);
    text("v₁", 660, 520);
    text("v₂", 660, 560);
    text("h₂", 660, 480);
    text("h1", 620, 480);

    // Headings
    text("Bernoulli's Equation", 400, 20);
    text("P₁ + 0.5ρv₁² + ρgh₁ = P₂ + 0.5ρv₂² + ρgh₂", 400, 40);
    text(
      "*Note: In this simulator, A (Cross-sectional area of the tube) is perceived",
      400,
      60
    );
    text(
      "to be directly proportionate to h (Height of the tube), as width is assumed constant",
      400,
      80
    );
    text(
      "All units in this simulator are arbituary, A1 is fixed to be 30 a.u.",
      400,
      100
    );
    text("A1 and A2 is dependent on v1  and v2 (Continuity Eq.)", 400, 120);
    text(
      "This simulator does not allow dependent variable to be ρ or g",
      400,
      140
    );

    // Highlight active dependent variable
    fill(0, 255, 255, 123);
    if (this.dVariable === "P1") rect(600, 500, 40, 40);
    if (this.dVariable === "P2") rect(600, 540, 40, 40);
    if (this.dVariable === "v1") rect(640, 500, 40, 40);
    if (this.dVariable === "v2") rect(640, 540, 40, 40);
    if (this.dVariable === "h1") rect(600, 460, 40, 40);
    if (this.dVariable === "h2") rect(640, 460, 40, 40);

    // Slider labels
    textSize(15);
    textAlign(LEFT, BOTTOM);
    stroke(0);
    fill(0);
    text("P₁:", 25, 520);
    text(this.P1, 225, 520);
    text("P₂:", 25, 570);
    text(this.P2, 225, 570);
    text("v₁:", 325, 520);
    text(this.v1, 525, 520);
    text("v₂:", 325, 570);
    text(this.v2, 525, 570);
    text("h₁:", 325, 420);
    text(this.h1, 525, 420);
    text("h₂:", 325, 470);
    text(this.h2, 525, 470);
    text("ρ:", 25, 420);
    text(this.rho, 225, 420);
    text("g:", 25, 470);
    text(this.g, 225, 470);

    // Draw tube
    fill(0, 255, 255);
    rect(100, 300 - this.A1 - this.h1, 200, 2 * this.A1);
    ellipse(100, 300 - this.h1, 20, 2 * this.A1);
    fill(127, 0, 255);
    rect(500, 300 - this.A2 - this.h2, 200, 2 * this.A2);
    ellipse(700, 300 - this.h2, 20, 2 * this.A2);

    stroke(0);
    fill(0);
    textAlign(LEFT, CENTER);
    line(200, 300 - this.A1 - this.h1, 200, 300 + this.A1 - this.h1);
    text("A₁*", 205, 300 - this.h1);
    line(600, 300 - this.A2 - this.h2, 600, 300 + this.A2 - this.h2);
    text("A₂*", 605, 300 - this.h2);
    fill(255);
    bezier(
      300,
      300 - this.A1 - this.h1,
      400,
      300 - this.A1 - this.h1,
      400,
      300 - this.A2 - this.h2,
      500,
      300 - this.A2 - this.h2
    );
    bezier(
      300,
      300 + this.A1 - this.h1,
      400,
      300 + this.A1 - this.h1,
      400,
      300 + this.A2 - this.h2,
      500,
      300 + this.A2 - this.h2
    );

    // Draw particles
    for (let index = particles2.length - 1; index > -1; index--) {
      if (particles2[index].x >= 700) {
        particles2.splice(index, 1);
      } else {
        particles2[index].iterate();
      }
    }
  }

  init() {
    this.P1_SLIDER.hide();
    this.P2_SLIDER.hide();
    this.v1_SLIDER.hide();
    this.v2_SLIDER.hide();
    this.h1_SLIDER.hide();
    this.h2_SLIDER.hide();
    this.rho_SLIDER.hide();
    this.g_SLIDER.hide();

    this.P1 = 25;
    this.P2 = 25;
    this.v1 = 5.5;
    this.v2 = 5.5;
    this.h1 = 0;
    this.h2 = 0;
    this.rho = 1;
    this.g = 2.75;
    this.A1 = 30;
    this.A2 = 30;
    this.dVariable = "v2";
    this.count = 0;

    this.P1_SLIDER.value(this.P1);
    this.P2_SLIDER.value(this.P2);
    this.v1_SLIDER.value(this.v1);
    this.v2_SLIDER.value(this.v2);
    this.h1_SLIDER.value(this.h1);
    this.h2_SLIDER.value(this.h2);
    this.rho_SLIDER.value(this.rho);
    this.g_SLIDER.value(this.g);
  }
}
