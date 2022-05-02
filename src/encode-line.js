const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const massChar=[]
  const massCount=[]
  str.split('').forEach((el,i)=>{
    if(massChar && massChar[massChar.length-1]===el) massCount[massChar.length-1]++;
    else {
      massChar.push(el)
      massCount.push(1)
    }
  })
  return massChar.map((el,i)=> {
    if(massCount[i]===1) return  el
    else return massCount[i]+el
  }).join('')
}

module.exports = {
  encodeLine
};
