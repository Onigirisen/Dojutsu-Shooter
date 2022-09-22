# Dojutsu Shooter

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

## <a href="https://wireframe.cc/BK7fUB">Wireframes</a>
<img src="https://i.ibb.co/7r720rM/Screen-Shot-2022-09-16-at-1-22-49-AM.png">

## Architecture and Technologies
Technologies will be used to develop this game:
- Javascript (game logic, vanilla DOM)
- Canvas (2D renderer)
- Webpack to bundle js files
- Firebase to persist high scores in Firebase NoSQL real-time DB (if highscores are to be implemented)

## Implementation Timeline
- Friday and Weekend: 
  - Set up file structure and install necessary node modules
  - Research and write basic game logic to handle board setups
  
- Monday:
  - Continue with game logic to handle shoot indicator to determine tractory of projectile
  - Work out an initial version to add new random "ball" setups to allow for the board to be filled up with "balls"
  
- Tuesday:
  - Finish implementation of projectile trajectory and projectile behavior
  - Look into implementing the behavior of "ball" being knocked down when a projectile hits a setup with 2 or more connected "balls"
  
- Wednesday:
  - Look into Firebase so can high scores data can be persisted (if high scores are implemented)
  - Create ability to restart the level
  
- Thursday:
  - Polish and refactor code if necessary
  - Bonus features