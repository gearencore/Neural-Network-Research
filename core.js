class Game(){
  constructor(){
    this.canvas = null;
    this.ctx = null;
    this.player = null;
  }

  start(){
    this.canvas = window.Render();
    this.ctx = this.canvas.init();
    this.player = window.Player();
  }

  update(){
    const gameLoop = () => {
      this.ctx.draw();
      requestAnimationFrame(gameLoop);
    }
    gameLoop();
  }
  
}
const game = new Game();
game.start()
