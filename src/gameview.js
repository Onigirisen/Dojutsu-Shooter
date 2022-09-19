import * as Util from "./util"
import Cell from "./cell"

class GameView {
    constructor(game,ctx){
        this.ctx = ctx;
        // this.game = game;
    }
    
    setUpControlBar(ctx) {
        this.ctx.fillStyle = "blue"
        this.ctx.fillRect(0,0,canvas.width, Util.boxCellSize.height);
        requestAnimationFrame(this.setUpControlBar.bind(this))
    }

    createGrid(ctx) {
        for (let y = Util.boxCellSize; y < this.ctx.height; y += Util.boxCellSize){
            for (let x = 0; x < this.ctx.width; x += Util.boxCellSize) {
                Util.gameGrid.push(new Cell(x,y))
            }
        }
    }
    
    handleGameGrid(ctx) {
        for (i = 0; i < Util.gameGrid.length; i ++) {
            Util.gameGrid[i].draw
        }
    }

}

export default GameView
