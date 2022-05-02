const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = 0;
  const mass = n.toString().split('');
  mass.forEach((el, i, arr) => {
    const arrCopy = [...arr];
    arrCopy.splice(i, 1);
    const num = Number(arrCopy.join(''));
    if (res === 0) res = num;
    else if (num > res) res = num;
  });
  return res;
}

module.exports = {
  deleteDigit
};
