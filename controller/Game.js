const readline = require("readline");
const Field = require('../models/Field');

const LEVELS = require('../constants/LEVELS');

class Game {
  field;
  playing = false;
  
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log('Welcome to Minesweeper, console edition!');
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
          this.field = new Field(width, height);
          this.field.addMines(mines);
          playing = true;
          this.nextTurn();
        }
      });
  }

  nextTurn() {

  }
  
}

module.exports = Game;
