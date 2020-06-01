const randomizeArray = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const r = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[r];
    arr[r] = temp;
  }
};

module.exports = randomizeArray;
