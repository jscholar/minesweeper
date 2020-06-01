const readline = require("readline");
const Board = require('../models/Board');

const LEVELS = require('../constants/LEVELS');

class Game {
  board;
  playing = false;
  
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });


  }

  startGame() {
    const levelPrompt = `Choose a level [ ${ 
      Object.entries(LEVELS)
        .map(([level, { name }]) => (
          `${level} (${name})`
        ))
      .join(', ')
    } ]: `;
    
    this.rl.question(
      levelPrompt,
      (diff = 1) => {
        if (LEVELS[diff] === undefined) {
          this.startGame();
        } else {
          const { width, height, mines } = LEVELS[diff];
          this.board = new Board(width, height);
          this.board.addMines(mines);
          playing = true;
          this.nextTurn();
        }
      });
  }

  nextTurn() {

  }
  
}

module.exports = Game;
