import * as Util from "./util"
class Cell {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = Util.boxCellSize
        this.height = Util.boxCellSize
    }

    draw() {
        ctx.strokeStyle = 'black';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}



export default Cell;