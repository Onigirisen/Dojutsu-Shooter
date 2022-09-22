# <a href="https://onigirisen.github.io/Dojutsu-Shooter/">Dojutsu Shooter</a>

## Background
Dojutsu Shooter is a 2D bubble shooter inspired by the game, Bubble Pop. The player controls a stationary shooter at the bottom of the board whose goal is to knock down all the "balls" floating at the top of the board by matching three or more "balls" with like appearances. The player can shoot a projectile either directly in an indicated direction or may make trick shots by bouncing the projectile off the sides of the board. Once the game is finished, the user will be shown their accumulated score (may add in a list of high scores).

## Controls
- [←]: Move left
- [→]: Move right
- [space]: Shoot a ball

## Functionality & MVP
In Dojutsu Shooter, users will be able to:
1. Shift the shoot cursor left or right, and shoot a "ball" in the direction indicated.
2. The "ball" will be able collide with the sides of the board and other "balls" on the board.
3. Line indicator to display the trajectory of the "ball" being shot; whether straight or being bounced off the wall (trick shot).
4. Restart level, animate background.

Bonus MVPs:
- Game starting menu
- Various color themes and backgrounds.
- Different types of board layouts.
- List of high scores (maybe an add-in)

## Architecture and Technologies
Technologies will be used to develop this game:
- Javascript (game logic, vanilla DOM)
- Canvas (2D renderer)
- Webpack to bundle js files
- Firebase to persist high scores in Firebase NoSQL real-time DB at time of implementation.

## Techinical Implementation Details
During development, there arose a unique set of challenges with regards to setting up of the "level" of the game. Each of the placement of the of the balls that were to be knocked down needed to be set up in a grid with each row of balls alternating between rows containing balls that were spaced evenly spaced with a distance of 2 * r(radius) between the center points of the circles and the next row slightly offset setting the x coordinate to create the lattice like placement. The solution to the problem posed was to manually set each level of the in an array (manually setting the colors of the balls that would appear on the grid and their relative positions) and the translate that array into coordinates that could be mapped to the canvas. 

```
calcPos(row, col) {
    const isOddRow = row % 2 === 1;
    const radius = CONFIG.circle.radius;
    let pos_x = isOddRow ? radius*2 : radius, pos_y = radius;
    return [radius * col * 2 + pos_x, radius * row * 2 + pos_y - (6 * row)];
}
```
This function above was used to convert the relative positions of the balls by taking the coordinates of the row and columns from the array and then checking to see if it is an even or an odd row. Based on this information, the mapping and convertion to canvas coordinates would be possible. Based on whether or not the row was even or odd, the starting position of the row would be determined. The offset placement logic is also calculated as the coordinate tranlation is taking place. 

Once the canvas coordinates have been obtained, the below function outlines the simultaneous ball creation and placement of the balls creating the lattice like grid structure. This process was my approach to working around setting up a hexagonal grid structure.

```
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
```
Using the grid, we would call on the draw function defined in game_view.js to draw the grid to the canvas.

## ToDos
The game is still at it's barebones state. The features to make this a playable game still need to be implemented.
- Creating the curoser arrow for the play to be able to shoot towards a direction.
- Creating the random balls to act as projectiles for the player to shoot.
- Implementing collision logic to the balls to detect when the ball shot hits a wall to redirect direction and the grid to detect whether a ball has hit.
- Implementing the neigboring color detection logic to determine whether a cluster of like colors have been hit/whether to keep the clust active or destroy the cluster depending on how many balls of like colors are on the cluster.

## Future Features
Future features to include the following:
1. Score tracking.
2. Menu screen. 
3. High score board.



