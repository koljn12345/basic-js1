const WINTER= 'winter';
const SPRING= 'spring';
const SUMMER= 'summer';
const AUTUMN= 'autumn';
module.exports = function getSeason(date) {
  if(Object.prototype.toString.call(date) != "[object Date]") throw new Error();
  if(!date instanceof Date || !date) {return 'Unable to determine the time of year!' };
  month= date.getMonth();
  if(month==11 || month<2) return WINTER;
  else if(month>=2 && month<5) return SPRING;
  else if(month>=5 && month<8) return SUMMER;
  else if(month>=8 && month<11) return AUTUMN;
  else throw 'Not implemented';
};
 