const randomizeArray = require('../utils/randomizeArray');

class Board {

  #board;
  #squaresLeft;
  #m; // Width
  #n; // Height

  /**
   * 
   * @param {Number} m Width of the board
   * @param {Number} n Height of the board
   */
  constructor(m, n) {
    this.#board = [];
    this.#m = m;
    this.#n = n;
    for (let i = 0; i < n; i++) {
      this.#board.push(new Array(m).fill(-1));
    }
  }

  /**
   * @param {Number} mines Number of mines to place on new board
   */
  addMines(mines) {
    if (mines > (this.#m * this.#n)) {
      // Too many mines
      // Reject
      return; 
    }

    // Serialize board
    let spots = [];
    for (let i = 0; i < this.#m * this.#n; i++) {
      spots.push(i);
    }

    // Randomize board
    randomizeArray(spots);

    // Set the first {mines} elements to be mines
    for (let i = 0; i < mines; i++) {
      const mine = spots[i];
      const row = Math.floor(mine / this.#m);
      const column = mine % this.#m;
      this.#board[row][column] = -2;
    }

    this.#minesLeft = mines;
  }

  getSquaresLeft() {
    return this.#squaresLeft;
  }

}

module.exports = Board;