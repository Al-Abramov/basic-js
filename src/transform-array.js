const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if ((!Array.isArray(arr))) {
    throw new Error();
  }
  
  let newArray = [];

  for(let i = 0; i < arr.length; i++) {
   if(arr[i] === '--discard-next'){
      i += 1;
      continue;
  }else if(arr[i] === '--discard-prev'){
    if (arr[i - 2] !== '--discard-next') {
      newArray.pop();
    }
  }else if(arr[i] === '--double-next') {
    if (i !== arr.length - 1) {
      newArray.push(arr[i + 1]);
    }
    continue;
  }else if(arr[i] === '--double-prev') {
    if(arr[i] === '--double-prev' && arr[i-1]!=undefined && arr[i-2] !== '--discard-next'){
      newArray.push(arr[i-1]);
    }
  }
  else{
    newArray.push(arr[i]);
  }
}
return newArray;
};