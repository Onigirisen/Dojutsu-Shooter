import Cell from "./cell";
import { CONFIG } from "./constants";

class Grid {
  constructor({ maxRows, maxCols, rows = [] }) {
    this.rows = rows || [];
    this.maxRows = maxRows;
    this.maxCols = maxCols;
    this.generateRows();
    console.log(this.rows);
    console.log(this.checkNeighbors(this.rows[9][5]))
  }

  generateRows() {
    const radius = CONFIG.circle.radius;
    let grid = [];
    for (let i = 0; i < this.rows.length; i++) {
      const circles = [];
      this.rows[i].forEach((color, j) => {
        const pos = this.calcPos(i, j);
        const cell = new Cell({
          coordinate: [i, j],
          pos_x: pos[0],
          pos_y: pos[1],
          radius,
          color
        });
        circles.push(cell);
      });
      grid.push(circles);
    }
    this.rows = grid;
  }

  calcPos(row, col) {
    const isOddRow = row % 2 === 1;
    const radius = CONFIG.circle.radius;
    let pos_x = isOddRow ? radius*2 : radius, pos_y = radius;
    return [radius * col * 2 + pos_x, radius * row * 2 + pos_y - (6 * row)];
  }

  checkNeighbors(cell) {
    const potentialNeighbors = cell.getNeighborCoords();
    return potentialNeighbors.filter((neighbor) => {
      const x = neighbor[0];
      const y = neighbor[1];

      return x >= 0 &&
        x < this.maxRows &&
        y >= 0 &&
        y < this.maxCols &&
        this.rows[x][y]
    });
  }

  draw(ctx) {
    this.rows.forEach(row => {
      row.forEach(cell => {
        cell.draw(ctx);
      });
    });
  }
}

export default Grid;

