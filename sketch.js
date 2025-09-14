let EASY_MODE; // Page 3
let HARD_MODE; // Page 4
let START_PAGE; // Page 1
let SUMMARY_PAGE; // Page 2
let currentMode = "START";
let particles1 = [];
let particles2 = [];
let startButton = 0;

function setup() {
  createCanvas(800, 600);
  textFont("Georgia");
  textSize(15);
  stroke(0);
  EASY_MODE = new Continuity();
  EASY_MODE.init();
  HARD_MODE = new Bernoulli();
  HARD_MODE.init();
  START_PAGE = new Start();
  SUMMARY_PAGE = new Summary();
}

function draw() {
  if (currentMode === "START") {
    START_PAGE.display();
  }
  if (currentMode === "EASY") {
    EASY_MODE.iterate();
    EASY_MODE.display();
  }
  if (currentMode === "HARD") {
    HARD_MODE.iterate();
    HARD_MODE.display();
  }
  if (currentMode === "SUMMARY") {
    SUMMARY_PAGE.display();
  }
}

function mousePressed() {
  if (currentMode === "EASY") {
    if (mouseX > 600 && mouseX < 640) {
      //Select dependent variable
      if (mouseY > 500 && mouseY < 540) {
        EASY_MODE.dVariable = "A1";
      } else if (mouseY > 540 && mouseY < 580) {
        EASY_MODE.dVariable = "A2";
      }
    } else if (mouseX > 640 && mouseX < 680) {
      if (mouseY > 500 && mouseY < 540) {
        EASY_MODE.dVariable = "v1";
      } else if (mouseY > 540 && mouseY < 580) {
        EASY_MODE.dVariable = "v2";
      }
    }
  }
  if (currentMode === "HARD") {
    if (mouseX > 600 && mouseX < 640) {
      //Select dependent variable
      if (mouseY > 500 && mouseY < 540) {
        HARD_MODE.dVariable = "P1";
      } else if (mouseY > 540 && mouseY < 580) {
        HARD_MODE.dVariable = "P2";
      } else if (mouseY > 460 && mouseY < 500) {
        HARD_MODE.dVariable = "h1";
      }
    } else if (mouseX > 640 && mouseX < 680) {
      if (mouseY > 500 && mouseY < 540) {
        HARD_MODE.dVariable = "v1";
      } else if (mouseY > 540 && mouseY < 580) {
        HARD_MODE.dVariable = "v2";
      } else if (mouseY > 460 && mouseY < 500) {
        HARD_MODE.dVariable = "h2";
      }
    }
  }
  if (currentMode === "START") {
    startButton++;
  }
}

function keyPressed() {
  //Change page
  let previousMode = currentMode;
  if (event.keyCode === 39) {
    if (currentMode === "EASY") {
      currentMode = "HARD";
    } else if (currentMode === "START") {
      currentMode = "SUMMARY";
    } else if (currentMode === "SUMMARY") {
      currentMode = "EASY";
    }
  }
  if (event.keyCode === 37) {
    if (currentMode === "SUMMARY") {
      currentMode = "START";
    } else if (currentMode === "HARD") {
      currentMode = "EASY";
    } else if (currentMode === "EASY") {
      currentMode = "SUMMARY";
    }
  }
  if (currentMode !== previousMode) {
    EASY_MODE.init(); //Reset variables
    HARD_MODE.init();
    particles1 = [];
    particles2 = [];
  }
}
