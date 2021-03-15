const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(typeof options.repeatTimes === 'undefined'){
    options.repeatTimes = 1;
  }
  if(typeof options.separator === 'undefined') {
    options.separator = '+';
  }
  if(typeof options.addition === 'undefined') {
    options.addition = '';
  }
  if(typeof options.additionRepeatTimes === 'undefined') {
    options.additionRepeatTimes = 1;
  }
  if(typeof options.additionSeparator === 'undefined') {
    options.additionSeparator = '|';
  }

  let newStr = '';
  for(let i = 0; i < options.repeatTimes; i++) {
    if(i === options.repeatTimes-1){
    newStr += str + (options.addition + options.additionSeparator)
          .repeat(options.additionRepeatTimes-1) + options.addition;
    }else {
    newStr += str + (options.addition + options.additionSeparator)
          .repeat(options.additionRepeatTimes-1) + options.addition + options.separator;
    }
  }
  return newStr;
};
  