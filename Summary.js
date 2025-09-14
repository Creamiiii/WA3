class Summary {
  //Summary page
  display() {
    background(255);

    textAlign(CENTER, CENTER);
    stroke(0);
    fill(0);

    text("Summary of the equations:", width / 2, 50);

    textAlign(LEFT, CENTER);

    text("Continuity Equation: A1v1 = A2v2", 50, 100);
    text("- Flow rate over A1 = Flow rate over A2", 75, 120);
    text("- A1 = A2v2 / v1", 75, 140);
    text("- v1 = A2v2 / A1", 75, 160);

    text(
      "Bernoulli's Equation: P1 + 0.5ρv1² + ρgh1 = P2 + 0.5ρv2² + ρgh2",
      50,
      250
    );
    text("- Flow rate over A1 = Flow rate over A2", 75, 270);
    text("- P1 = P2 + 0.5ρv2² + ρgh2 - 0.5ρv1² - ρgh1", 75, 290);
    text("        = P2 + ρ(0.5(v2² - v1²) + g(h2 - 1))", 75, 310);
    text("- v1 = √(2(P2 + 0.5ρv2² + ρgh2 - P1 - ρgh1) / ρ)", 75, 330);
    text("        = √(2(P2 - P1 + ρg(h2 - h1) + 0.5ρv2²) / ρ)", 75, 350);
    text("-  ρ  = (P1 - P2) / (0.5(v2² - v1²) + g(h2 - h1))", 75, 370);
    text("-  g  = (P1 - P2 + 0.5ρ(v1² - v2²)) / ρ(h2 - h1)", 75, 390);

    text(
      "A is cross-sectional area, v is velocity, P is pressure, ρ is density, g is gravitational acceleration",
      75,
      480
    );
  }
}
