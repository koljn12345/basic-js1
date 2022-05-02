const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((acc, el, i) => (
    acc + el.reduce((acc1, el1, i1) => {
      if (i === 0) return acc1 + el1;
      if (matrix[i - 1][i1] !== 0) return acc1 + el1;
      return acc1;
    }, 0)
  ), 0);
}

module.exports = {
  getMatrixElementsSum
};
