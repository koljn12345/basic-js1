const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const obj = {};
  domains.forEach((el) => (el.split('.').reverse().reduce((acc, el1, indx) => {
    let temp;
    if (indx === 0) temp = `.${el1}`;
    else temp = `${acc}.${el1}`;
    if (obj[temp] === undefined) obj[temp] = 1;
    else obj[temp] += 1;
    return temp;
  }, 0)));
  return obj;
}

module.exports = {
  getDNSStats
};
