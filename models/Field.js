const randomizeArray = require('../utils/randomizeArray');

class Field {

  #field;
  #squaresLeft;
  #m; // Width
  #n; // Height

  /**
   * 
   * @param {Number} m Width of the field
   * @param {Number} n Height of the field
   */
  constructor(m, n) {
    this.#field = [];
    this.#m = m;
    this.#n = n;
    for (let i = 0; i < n; i++) {
      this.#field.push(new Array(m).fill(-1));
    }
  }

  /**
   * @param {Number} mines Number of mines to place on new field
   */
  addMines(mines) {
    if (mines > (this.#m * this.#n)) {
      // Too many mines
      // Reject
      return; 
    }

    // Serialize field
    let spots = [];
    for (let i = 0; i < this.#m * this.#n; i++) {
      spots.push(i);
    }

    // Randomize field
    randomizeArray(spots);

    // Set the first {mines} elements to be mines
    for (let i = 0; i < mines; i++) {
      const mine = spots[i];
      const row = Math.floor(mine / this.#m);
      const column = mine % this.#m;
      this.#field[row][column] = -2;
    }

    this.#squaresLeft = m * n - mines;
  }

  getSquaresLeft() {
    return this.#squaresLeft;
  }

}

module.exports = Field;