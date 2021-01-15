const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
 
module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity != 'string') return false;
  sampleActivity=parseFloat(sampleActivity);
  if(sampleActivity<=0 || isNaN(sampleActivity)) return false;
  k=0.693/HALF_LIFE_PERIOD;
  ln= Math.log(MODERN_ACTIVITY/sampleActivity);
  if(ln<0) return false;
  t= ln/k;
  return Math.ceil(t);
};
 