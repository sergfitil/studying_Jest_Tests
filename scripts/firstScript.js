function positiveSum(arr) {
  let sum = 0;
  for (let elem of arr) {
    if (elem >= 0) {
      sum += elem
    }
  }
  return sum;
}
module.exports = positiveSum;