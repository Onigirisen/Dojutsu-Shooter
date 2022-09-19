import Game from './game'
import GameView from './gameview'
import Cell from './cell'


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementsByTagName("canvas")[0];
    canvas.width = 900;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    // const game = new Game()
    const gameView = new GameView(ctx)
    gameView.createGrid(ctx)
})
