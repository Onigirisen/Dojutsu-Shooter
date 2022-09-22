import './styles/reset.scss';
import './index.scss';
import './styles/sidebars.scss';
import './styles/grid.scss'
import Bubble from './scripts/cell';

import Game from './scripts/game';
import GameView from './scripts/game_view';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementsByTagName("canvas")[0];
  const game = new Game();
  canvas.width = game.width;
  canvas.height = game.height;

  const ctx = canvas.getContext("2d");
  const gameView = new GameView(game, ctx);
  gameView.start();
});
