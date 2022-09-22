
import { COLORS} from "./constants";

class Cell {
  constructor({ coordinate, pos_x, pos_y, radius, color }) {
    this.coordinate = coordinate;
    this.pos_x = pos_x;
    this.pos_y = pos_y;
    this.radius = radius;
    this.color = color;

  }

  isOddRow() {
    return this.coordinate[0] % 2 === 1;
  }

  getNeighborCoords() {
    const coords = this.coordinate;
    const evenDiffs = [[-1, -1], [-1, 0], [0, -1], [0, 1], [1, -1], [1, 0]];
    const oddDiffs = [[-1, 0], [-1, 1], [0, -1], [0, 1], [1, 0], [1, 1]];
    const diffs = this.isOddRow() ? oddDiffs : evenDiffs;

    return diffs.map((diff) => {
      const x = diff[0] + coords[0];
      const y = diff[1] + coords[1];
      return [x, y];
    })
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos_x, this.pos_y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = COLORS.onyx;
    ctx.stroke();

    // ctx.fillRect(this.pos_x, this.pos_y, this.width, this.height);

    // ctx.strokeStyle = "black";
    // ctx.beginPath();
    // ctx.moveTo(this.pos_x, this.pos_y);
    // ctx.lineTo(this.pos_x, this.width);
    // ctx.lineTo(this.width, this.height);
    // ctx.lineTo(this.pos_x, this.height);
    // ctx.lineTo(this.pos_x, this.pos_y);
    // ctx.stroke();
  }

}

export default Cell;
