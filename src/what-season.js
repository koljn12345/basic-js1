const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 const WINTER= 'winter';
 const SPRING= 'spring';
 const SUMMER= 'summer';
 const AUTUMN= 'autumn';
function getSeason(/* date */) {
  if(!date instanceof Date || !date) {return 'Unable to determine the time of year!' };
  if(Object.prototype.toString.call(date) != "[object Date]") throw new Error();
  month= date.getMonth();
  if(month==11 || month<2) return WINTER;
  else if(month>=2 && month<5) return SPRING;
  else if(month>=5 && month<8) return SUMMER;
  else if(month>=8 && month<11) return AUTUMN;
  else throw 'Not implemented';
}

module.exports = {
  getSeason
};
 