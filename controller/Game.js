const readline = require("readline");
const Board = require('../models/Board');

class Game {
  board;
  playing = false;
  
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this.difficulties = {
      1: {
        width: 10,
        height: 10,
        mines: 10,
      },
      2: {
        width: 20,
        height: 20,
        mines: 40,
      },
      3: {
        width: 30,
        height: 30,
        mines: 100,
      }
    }
  }

  startGame() {
    this.rl.question('Choose a difficulty [1: easy (default), 2: medium, 3: hard] (1,2,3): ', (diff = 1) => {
      if (this.difficulties[diff] === undefined) {
        this.startGame();
      } else {
        const { width, height, mines } = this.difficulties[diff];
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
