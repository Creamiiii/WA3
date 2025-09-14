class Start { //Start page
  display() {
    background(255);
    textAlign(CENTER, CENTER);
    fill(0);
    text("Welcome!", width / 2, 50);
    text("This program is about incompressible fluids.", width / 2, 80);
    text(
      "The first page is the start page! Yes, the one you are staring at...",
      width / 2,
      110
    );
    text(
      "The second page is a summary of the two equations involved in this simulation.",
      width / 2,
      140
    );
    text(
      "And the third page is about the Continuity Equation...",
      width / 2,
      170
    );
    text(
      "Lastly, the fourth page is about the Bernoulli's Equation!",
      width / 2,
      200
    );
    text(
      "Use your left and right arrow keys to navigate the pages.",
      width / 2,
      230
    );
    text("But first, click your mouse on the page!", width / 2, 260);

    if (startButton === 1) {
      text("It doesn't actually do anything...", width / 2, 290);
    }
  }
}
