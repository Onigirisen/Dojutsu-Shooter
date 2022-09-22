import { CONFIG, COLORS, FULL_GRID } from "./constants";
import Grid from "./grid";

class Game {
  constructor() {
    this.width = CONFIG.game.width;
    this.height = CONFIG.game.height;
    this.FPS = CONFIG.game.FPS;
    this.init();
  }

  init() {
    const rowHeight = CONFIG.circle.radius * 2;
    const rowCount = (this.height / rowHeight) - 4;
    const colCount = this.width / rowHeight;
    this.grid = new Grid({
      maxRows: rowCount,
      maxCols: colCount,
      rows: FULL_GRID,
    });
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.fillStyle = COLORS.grey;
    ctx.fillRect(0, 0, this.width, this.height);
    this.grid.draw(ctx);
  }


}
export default Game;
