// src/game.ts
var Game = class {
  constructor(canvas2, ctx2) {
    this.canvas = canvas2;
    this.ctx = ctx2;
  }
  start() {
    const gameLoop = () => {
      this.update();
      this.render();
      requestAnimationFrame(gameLoop);
    };
    gameLoop();
  }
  update() {
  }
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(50, 50, 40, 20);
  }
};

// src/index.ts
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var game = new Game(canvas, ctx);
game.start();
