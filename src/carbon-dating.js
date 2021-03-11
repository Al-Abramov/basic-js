const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity != String ||
typeof sampleActivity == undefined) {
    return false;
}


  let t = (parseInt(sampleActivity) * HALF_LIFE_PERIOD) / MODERN_ACTIVITY;

 return Math.ceil(t); 
};
