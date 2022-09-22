class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.lastTime = 0;
    this.render = this.render.bind(this);
  }

  start() {
    this.render();
  }

  render(time) {
    const delta = time - this.lastTime;
    requestAnimationFrame(this.render);

    if (delta > 1000 / this.game.FPS) {
      // console.log(time)
      this.game.draw(this.ctx);
      this.lastTime = time;
    }
  }
}

export default GameView;
