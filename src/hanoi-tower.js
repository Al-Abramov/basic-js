const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {


  /*let turns =  Math.pow(2, disksNumber) - 1;
  let seconds  = Math.floor((turns*3600)/turnsSpeed);

  return {turns, seconds };*/

  return {
    turns: Math.pow(2, disksNumber) - 1,
    seconds: Math.floor(( Math.pow(2, disksNumber) - 1) / (turnsSpeed/60/60))
  }
};
