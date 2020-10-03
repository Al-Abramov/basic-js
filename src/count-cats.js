const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
var res = [].concat(...matrix);

return res.filter(item => item === '^^').length;

};
