/**
 * Shuffles the given array into a random order
 * @param {Array} arr 
 */
const randomizeArray = (arr) => {
  // Fischer-Yates modern
  for (let i = arr.length - 1; i >= 0; i--) {
    const r = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[r];
    arr[r] = temp;
  }
};

module.exports = randomizeArray;
