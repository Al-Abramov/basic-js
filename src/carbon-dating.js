const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string" || 
     isNaN(parseFloat(sampleActivity)) || 
     sampleActivity <= 0 || sampleActivity > 15){
return false;
}

let k = HALF_LIFE_PERIOD / 0.693;

let t = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * k;

return Math.ceil(t); 
};
