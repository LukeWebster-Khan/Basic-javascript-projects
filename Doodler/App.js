document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const doodler = document.createElement("div");
  const platform = document.createElement("div");
  let doodlerLeftSpace = 50;
  let startPoint = 150;
  let doodlerBottomSpace = startPoint;
  const platformCount = 5;
  let upTimerId;
  let downTimerId;
  let platforms = [];
  let isGameOver = false;
  let isJumping = false;
  let finalScore = 0;
  let highScore = 0;
  grid.appendChild(platform);

  function createDoodler() {
    doodler.classList.add("doodler");
    doodlerLeftSpace = platforms[0].left + 15;
    grid.appendChild(doodler);
    doodler.style.bottom = doodlerBottomSpace + "px";
    doodler.style.left = doodlerLeftSpace + "px";
  }

  class Platform {
    constructor(newPlatBottom) {
      this.bottom = newPlatBottom;
      this.left = Math.floor(Math.random() * 275);
      this.visual = document.createElement("div");
      this.visual.classList.add("platform");
      const visual = this.visual;
      visual.style.left = this.left + "px";
      visual.style.bottom = this.bottom + "px";
      grid.appendChild(visual);
      // console.log(this.left);
    }
  }

  function createPlatforms() {
    // platform.classList.add("platform");
    for (let i = 0; i < platformCount; i++) {
      const platGap = 600 / platformCount;
      const newPlatBottom = 100 + i * platGap;
      let newPlatform = new Platform(newPlatBottom);
      platforms.push(newPlatform);
      console.log(platforms);
    }
  }
  function movePlatforms() {
    if (doodlerBottomSpace > 10) {
      platforms.forEach((platform) => {
        platform.bottom -= 4;
        let visual = platform.visual;
        visual.style.bottom = platform.bottom + "px";

        if (platform.bottom < 10) {
          let firstPlatform = platforms[0].visual;
          firstPlatform.classList.remove("platform");
          platforms.shift();
          finalScore++;
          console.log(platforms);
        }
        if (platforms.length <= 5) {
          let platGap = 600 / platformCount;
          let newPlatBottom = 100 + 5 * platGap;
          platforms.push(new Platform(newPlatBottom));
        }
        // if (platform.bottom < 10) {
        //   let firstPlatform = platform[0].s;
        // }
      });
    }
  }

  function jump() {
    clearInterval(downTimerId);
    upTimerId = setInterval(function () {
      isJumping = true;
      doodlerBottomSpace += 8;
      doodler.style.bottom = doodlerBottomSpace + "px";
      if (isJumping && doodlerBottomSpace > startPoint + 200) {
        isJumping = false;
        fall();
      }
    }, 30);
  }

  function fall() {
    clearInterval(upTimerId);
    downTimerId = setInterval(function () {
      doodlerBottomSpace -= 8;
      doodler.style.bottom = doodlerBottomSpace + "px";
      if (doodlerBottomSpace <= 0) {
        gameOver();
      }
      platforms.forEach((platform) => {
        if (
          doodlerBottomSpace >= platform.bottom &&
          doodlerBottomSpace <= platform.bottom + 15 &&
          doodlerLeftSpace + 10 >= platform.left &&
          doodlerLeftSpace <= platform.left + 85 &&
          !isJumping
        ) {
          console.log("collision");
          startPoint = doodlerBottomSpace;
          jump();
        }
      });
    }, 30);
  }

  function gameOver() {
    console.log("gameover");
    isGameOver = true;
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
    grid.innerHTML = finalScore;

    clearInterval(upTimerId);
    clearInterval(downTimerId);
  }
  function control() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 37) {
        let reducedLeft = (doodlerLeftSpace -= 8);
        doodler.style.left = doodlerLeftSpace + "px";
      } else if (e.keyCode === 39) {
        let reducedRight = (doodlerLeftSpace += 8);
        doodler.style.left = doodlerLeftSpace + "px";
        console.log(e.shiftKey);
      }
    });
  }

  function bounce() {}

  function start() {
    if (!isGameOver) {
      createPlatforms();
      createDoodler();
      setInterval(movePlatforms, 30);
      jump();
      control();
      bounce();
    }
  }
  start();
});
